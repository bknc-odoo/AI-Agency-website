import React, { useState } from 'react'

interface DataType {
  id: string
  name: string
  icon: string
  description: string
  formats: string[]
  capabilities: string[]
  useCase: string
  processingTime: string
  accuracy: string
}

const DataShowcase: React.FC = () => {
  const [activeData, setActiveData] = useState(0)

  const dataTypes: DataType[] = [
    {
      id: 'structured',
      name: 'Structured Data',
      icon: '📊',
      description: 'Traditional databases, spreadsheets, and organized datasets',
      formats: ['SQL Databases', 'CSV Files', 'Excel Sheets', 'JSON/XML', 'APIs'],
      capabilities: [
        'Real-time analytics',
        'Predictive modeling',
        'Pattern recognition',
        'Automated reporting',
        'Data validation'
      ],
      useCase: 'Financial analysis, sales forecasting, inventory management',
      processingTime: '< 1 second',
      accuracy: '99.9%'
    },
    {
      id: 'unstructured',
      name: 'Unstructured Data',
      icon: '📄',
      description: 'Documents, emails, PDFs, and free-form text content',
      formats: ['PDFs', 'Word Documents', 'Emails', 'Web Pages', 'Text Files'],
      capabilities: [
        'Content extraction',
        'Sentiment analysis',
        'Entity recognition',
        'Document classification',
        'Information retrieval'
      ],
      useCase: 'Contract analysis, customer feedback, legal document review',
      processingTime: '2-5 seconds',
      accuracy: '97%'
    },
    {
      id: 'multimedia',
      name: 'Multimedia Data',
      icon: '🎥',
      description: 'Images, videos, audio files, and visual content',
      formats: ['Images (JPG, PNG)', 'Videos (MP4, AVI)', 'Audio (MP3, WAV)', 'Live Streams'],
      capabilities: [
        'Object detection',
        'Face recognition',
        'Audio transcription',
        'Content moderation',
        'Quality analysis'
      ],
      useCase: 'Security monitoring, content creation, medical imaging',
      processingTime: '5-30 seconds',
      accuracy: '95%'
    },
    {
      id: 'realtime',
      name: 'Real-time Streaming',
      icon: '⚡',
      description: 'Live data feeds, IoT sensors, and continuous data streams',
      formats: ['IoT Sensors', 'API Streams', 'Log Files', 'Social Media', 'Trading Data'],
      capabilities: [
        'Stream processing',
        'Anomaly detection',
        'Real-time alerts',
        'Live dashboards',
        'Predictive maintenance'
      ],
      useCase: 'Manufacturing monitoring, fraud detection, system alerts',
      processingTime: 'Instant',
      accuracy: '98%'
    },
    {
      id: 'cloud',
      name: 'Cloud & Enterprise',
      icon: '☁️',
      description: 'Cloud platforms, data warehouses, and enterprise systems',
      formats: ['AWS S3', 'Google BigQuery', 'Salesforce', 'SAP', 'Microsoft Azure'],
      capabilities: [
        'ETL processes',
        'Data migration',
        'System integration',
        'Automated backups',
        'Compliance monitoring'
      ],
      useCase: 'Enterprise integration, data migration, compliance reporting',
      processingTime: '1-60 minutes',
      accuracy: '99.5%'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800/20 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data Processing Capabilities
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Any data type, any format, any scale - our AI processes it all
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
          <h3 className="text-2xl font-bold text-white mb-6 text-center">AI Processing Pipeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: 'Ingest', desc: 'Data Collection', icon: '📥' },
              { step: 'Clean', desc: 'Preprocessing', icon: '🔧' },
              { step: 'Analyze', desc: 'AI Processing', icon: '🧠' },
              { step: 'Extract', desc: 'Insights', icon: '💡' },
              { step: 'Deliver', desc: 'Results', icon: '🚀' }
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
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 glow-effect">
            Process Your Data Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default DataShowcase