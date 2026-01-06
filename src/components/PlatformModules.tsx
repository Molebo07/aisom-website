import Link from 'next/link'

const modules = [
  {
    id: 'certara',
    name: 'Certara',
    title: 'Compliance & Governance Platform',
    description: 'Enterprise-grade compliance management platform that ensures regulatory adherence across distributed operations.',
    capabilities: [
      'Automated compliance monitoring',
      'Centralised governance dashboard',
      'Real-time risk assessment',
      'Automated reporting',
      'E-sign integrations',
      'Services marketplace from compliance professionals'
    ],
    status: 'Beta Ready',
    href: '/products#certara',
    betaSignupUrl: 'https://form.typeform.com/to/KXSokz4U?utm_content=xxxxx#first_name=xxxxx&last_name=xxxxx&email=xxxxx&phone_number=xxxxx'
  },
  {
    id: 'forge',
    name: 'Forge',
    title: 'Operations Execution & Optimisation Platform',
    description: 'Intelligent workflow orchestration platform for seamless operations.',
    capabilities: [
      'Workflow automation and optimisation',
      'Reduction of bottlenecks',
      'Identification of inefficiencies',
      'Automate repetitive tasks'
    ],
    status: 'Production',
    href: '/products#forge'
  }
]

export default function PlatformModules() {
  return (
    <section className="bg-aisom-cool-50 section-padding">
      <div className="container-max">
        <div className="documentation-style">
          <div className="mb-8">
            <h2>Our Solutions</h2>
            <p className="mt-2">
              Core operational infrastructure components designed for enterprise deployment.
            </p>
            <div className="mt-4 p-4 bg-aisom-blue-500 text-white rounded-lg">
              <h3 className="font-semibold mb-2">Beta Program Now Open</h3>
              <p className="text-sm text-aisom-blue-100 mb-3">
                Certara beta is now available for qualified businesses from 1 Feb 2026. Join our beta program to get early access to compliance automation capabilities.
              </p>
              <p className="text-xs text-aisom-blue-200">
                Limited beta slots available. Enterprise verification required.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {modules.map((module) => (
              <div key={module.id} className="module-container">
                <div className="module-header">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-xl font-semibold">{module.name}</h3>
                      <span className="px-2 py-1 bg-aisom-blue-500 text-white text-xs rounded">
                        {module.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {module.betaSignupUrl && (
                        <a
                          href={module.betaSignupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs px-3 py-1"
                        >
                          Join Beta
                        </a>
                      )}
                      <Link href={module.href} className="text-aisom-cool-200 hover:text-white text-sm font-medium">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="module-content">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">{module.title}</h4>
                      <p className="text-aisom-slate-600 mb-4">{module.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Capabilities</h4>
                      <div className="capability-list">
                        {module.capabilities.map((capability, index) => (
                          <div key={index} className="capability-item">
                            <div className="capability-bullet"></div>
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
