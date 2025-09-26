export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, message } = req.body

  if (!name) {
    return res.status(400).json({ error: 'Name is required' })
  }

  try {
    // Generate voice opener with OpenAI
    const openaiKey = process.env.OPENAI_API_KEY // Server-side only

    const voiceOpenerPrompt = `Create a personalized Ukrainian voice opener for a call from Nord AI agency to ${name}.
    Service requested: ${message || 'AI solutions'}

    Rules:
    - Keep it under 30 words
    - Sound professional but warm
    - Mention their specific interest if provided
    - Start with "Доброго дня" and introduce as Roman from Nord AI

    Return only the voice opener text, nothing else.`

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

    let voiceOpenerValue = `Доброго дня, ${name}! Це Роман з Nord AI Agency. Дякуємо за ваш запит щодо AI рішень.`

    if (aiResponse.ok) {
      const aiData = await aiResponse.json()
      voiceOpenerValue = aiData.choices[0]?.message?.content || voiceOpenerValue
    }

    const voiceOpener = {
      state: 'generated',
      value: voiceOpenerValue,
      isStale: false
    }

    res.status(200).json({ voiceOpener })

  } catch (error) {
    console.error('Voice opener generation error:', error)

    // Return fallback voice opener
    const fallbackOpener = {
      state: 'generated',
      value: `Доброго дня, ${name}! Це Роман з Nord AI Agency. Дякуємо за ваш запит щодо AI рішень.`,
      isStale: false
    }

    res.status(200).json({ voiceOpener: fallbackOpener })
  }
}