export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' })
  }

  try {
    // Supabase configuration (server-side only)
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY // Use service key for server

    // Step 1: Create lead in Supabase
    const leadPayload = {
      first_name: name.split(' ')[0] || name,
      last_name: name.split(' ').slice(1).join(' ') || '',
      email: email,
      phone_number: phone,
      service_requested: message || 'ШІ Агенти',
      voice_opener: null // Will be generated next
    }

    const leadResponse = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(leadPayload),
    })

    if (!leadResponse.ok) {
      throw new Error('Failed to create lead')
    }

    const leadData = await leadResponse.json()
    const leadId = leadData[0]?.id

    // Step 2: Generate voice opener with OpenAI
    const openaiKey = process.env.OPENAI_API_KEY

    const voiceOpenerPrompt = `Create a personalized Ukrainian voice opener for a call from Nord AI agency to ${name}.
    Service requested: ${message || 'AI solutions'}

    Rules:
    - Keep it under 30 words
    - Sound professional but warm
    - Mention their specific interest if provided
    - Start with "Доброго дня" and introduce as Roman from Nord AI

    Return only the voice opener text, nothing else.`

    let voiceOpenerValue = `Доброго дня, ${name}! Це Роман з Nord AI Agency. Дякуємо за ваш запит щодо AI рішень.`

    if (openaiKey) {
      try {
        const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4',
            messages: [{ role: 'user', content: voiceOpenerPrompt }],
            max_tokens: 100,
            temperature: 0.7
          })
        })

        if (aiResponse.ok) {
          const aiData = await aiResponse.json()
          voiceOpenerValue = aiData.choices[0]?.message?.content || voiceOpenerValue
        }
      } catch (error) {
        console.error('OpenAI error:', error)
        // Continue with fallback opener
      }
    }

    // Step 3: Update lead with voice opener
    const voiceOpener = {
      state: 'generated',
      value: voiceOpenerValue,
      isStale: false
    }

    await fetch(`${supabaseUrl}/rest/v1/leads?id=eq.${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      },
      body: JSON.stringify({ voice_opener: voiceOpener }),
    })

    res.status(200).json({
      success: true,
      leadId,
      message: 'Lead created successfully with voice opener'
    })

  } catch (error) {
    console.error('Create lead error:', error)
    res.status(500).json({ error: 'Failed to create lead' })
  }
}