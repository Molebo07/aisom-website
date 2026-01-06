import Link from 'next/link'

const modules = [
  {
    name: 'Certara',
    subtitle: 'Compliance & Governance Platform',
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
    href: '/products/certara',
    betaSignupUrl: 'https://form.typeform.com/to/KXSokz4U?utm_content=xxxxx#first_name=xxxxx&last_name=xxxxx&email=xxxxx&phone_number=xxxxx'
  },
  {
    name: 'Forge',
    subtitle: 'Operations Execution & Optimisation Platform',
    description: 'Intelligent workflow orchestration platform for seamless operations.',
    capabilities: [
      'Workflow automation and optimisation',
      'Reduction of bottlenecks',
      'Identification of inefficiencies',
      'Automate repetitive tasks'
    ],
    status: 'Production',
    href: '/products/forge',
  },
]

export default function Solutions() {
  return (
    <section className="bg-aisom-cool-50 section-padding">
      <div className="container-max">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Solutions</h2>
          <p className="text-aisom-slate-600">Core infrastructure components that power enterprise operations.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div key={module.name} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {module.name}
                  </h3>
                  <p className="text-sm text-aisom-slate-600 mb-3">
                    {module.subtitle}
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className="text-xs bg-aisom-blue-500 text-white px-2 py-1 rounded">
                    {module.status}
                  </span>
                  {module.betaSignupUrl && (
                    <a
                      href={module.betaSignupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs btn-primary px-2 py-1"
                    >
                      Join Beta
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-aisom-slate-600 mb-4">
                {module.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Capabilities</h4>
                <ul className="text-xs text-aisom-slate-500 space-y-1">
                  {module.capabilities.map((capability) => (
                    <li key={capability}>• {capability}</li>
                  ))}
                </ul>
              </div>

              <Link href={module.href} className="text-aisom-blue-500 text-sm font-medium hover:text-aisom-blue-600">
                Documentation →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
