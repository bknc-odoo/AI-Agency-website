import React, { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface DataType {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  formats: string[]
  capabilities: string[]
  useCase: string
  processingTime: string
  accuracy: string
}

const DataShowcase: React.FC = () => {
  const { t } = useTranslation()
  const [activeData, setActiveData] = useState(0)

  const dataTypes: DataType[] = [
    {
      id: 'office-chaos',
      name: 'Your Office Files (The Messy Ones)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 8h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'Stop worrying about your scattered Word docs, old Excel files, and random PDFs. Our AI reads everything.',
      formats: ['Word Documents', 'Excel Spreadsheets', 'PowerPoint Files', 'PDF Reports', 'Email Archives'],
      capabilities: [
        'Reads any document format',
        'Extracts key information automatically',
        'Connects related data across files',
        'Creates searchable knowledge base',
        'No reformatting required'
      ],
      useCase: 'Turn your document chaos into organized, searchable intelligence',
      processingTime: 'Minutes, not months',
      accuracy: 'AI understands context, not just text'
    },
    {
      id: 'google-drive',
      name: 'Your Google Drive Disaster',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="14" x2="12" y2="18" stroke="currentColor" strokeWidth="2"/>
          <line x1="10" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'All those Google Sheets, Docs, and Slides sitting in random folders? AI organizes it all automatically.',
      formats: ['Google Sheets', 'Google Docs', 'Google Slides', 'Shared Folders', 'Collaborative Files'],
      capabilities: [
        'Connects to Google Workspace directly',
        'Reads collaborative documents',
        'Tracks changes and versions',
        'Builds unified data view',
        'No manual export needed'
      ],
      useCase: 'Transform your Google Drive mess into structured business intelligence',
      processingTime: 'Syncs continuously',
      accuracy: 'Understands collaborative context'
    },
    {
      id: 'email-madness',
      name: 'Your Email Mountains',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'Years of emails with attachments, contracts, and conversations? AI extracts every important detail.',
      formats: ['Gmail Archives', 'Outlook Files', 'Email Attachments', 'Threading History', 'Contact Lists'],
      capabilities: [
        'Reads email content and attachments',
        'Extracts contracts and agreements',
        'Identifies key relationships',
        'Creates timeline of interactions',
        'Privacy-safe processing'
      ],
      useCase: 'Turn email chaos into relationship and contract intelligence',
      processingTime: 'Processes years of emails overnight',
      accuracy: 'Understands business relationships'
    },
    {
      id: 'legacy-systems',
      name: 'Your Old System Exports',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 7h12v6H6z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'That ancient CRM export, old accounting software data, or CSV files from 2015? AI makes sense of it all.',
      formats: ['CSV Exports', 'Database Dumps', 'Legacy Reports', 'Old Software Files', 'Mixed Formats'],
      capabilities: [
        'Handles any file format',
        'Cleans messy data automatically',
        'Connects historical patterns',
        'No data migration needed',
        'Preserves data history'
      ],
      useCase: 'Rescue valuable insights from old systems without expensive migrations',
      processingTime: 'Works with what you have',
      accuracy: 'Smart enough to handle inconsistencies'
    },
    {
      id: 'real-world-chaos',
      name: 'Your Real-World Mix',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        </svg>
      ),
      description: 'Photos of whiteboards, scanned documents, voice recordings, and handwritten notes? AI handles the real world.',
      formats: ['Phone Photos', 'Scanned Documents', 'Voice Recordings', 'Handwritten Notes', 'Mixed Media'],
      capabilities: [
        'Reads handwriting and photos',
        'Transcribes voice recordings',
        'Processes mixed media files',
        'Connects physical and digital',
        'No perfect formats required'
      ],
      useCase: 'Digitize and organize everything from the physical world',
      processingTime: 'Understands messy real-world data',
      accuracy: 'Handles imperfect inputs perfectly'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800/20 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-glow">
            {t('dataShowcase.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('dataShowcase.subtitle')}
          </p>
        </div>

        {/* Data Type Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dataTypes.map((dataType, index) => (
            <button
              key={dataType.id}
              onClick={() => setActiveData(index)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300
                ${activeData === index
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800/70'
                }
              `}
            >
              <span className="text-2xl">{dataType.icon}</span>
              <span className="font-semibold">{dataType.name}</span>
            </button>
          ))}
        </div>

        {/* Active Data Type Details */}
        <div className="tech-card rounded-2xl p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-3xl">
                  {dataTypes[activeData].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{dataTypes[activeData].name}</h3>
                  <p className="text-slate-400">{dataTypes[activeData].description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Supported Formats</h4>
                <div className="flex flex-wrap gap-2">
                  {dataTypes[activeData].formats.map((format, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                <p className="text-slate-300">{dataTypes[activeData].useCase}</p>
              </div>
            </div>

            {/* Right Side - Capabilities & Metrics */}
            <div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">AI Capabilities</h4>
                <div className="space-y-3">
                  {dataTypes[activeData].capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-slate-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {dataTypes[activeData].processingTime}
                  </div>
                  <div className="text-sm text-slate-500">Processing Time</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {dataTypes[activeData].accuracy}
                  </div>
                  <div className="text-sm text-slate-500">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Pipeline Visualization */}
        <div className="tech-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('dataShowcase.pipeline')}</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: 'Ingest', desc: 'Data Collection', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14-7l-5 5-5-5" stroke="currentColor" strokeWidth="2"/></svg> },
              { step: 'Clean', desc: 'Preprocessing', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2"/></svg> },
              { step: 'Analyze', desc: 'AI Processing', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.5 2A2.5 2.5 0 007 4.5v15A2.5 2.5 0 009.5 22h5a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0014.5 2h-5z" stroke="currentColor" strokeWidth="2"/><path d="M10 8h4m-4 4h4m-4 4h4" stroke="currentColor" strokeWidth="2"/></svg> },
              { step: 'Extract', desc: 'Insights', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/></svg> },
              { step: 'Deliver', desc: 'Results', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> }
            ].map((stage, index) => (
              <React.Fragment key={stage.step}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {stage.icon}
                  </div>
                  <div className="text-white font-semibold">{stage.step}</div>
                  <div className="text-sm text-slate-400">{stage.desc}</div>
                </div>
                {index < 4 && (
                  <div className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect hover:scale-105">
            {t('dataShowcase.cta')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 11l5-5 5 5M12 6v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DataShowcase