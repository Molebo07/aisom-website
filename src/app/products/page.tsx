import type { Metadata } from 'next'
import Solutions from '@/components/Solutions'
import FinalCTA from '@/components/FinalCTA'

export const metadata: Metadata = {
  title: 'Platform Modules - Certara & Forge | Aisom',
  description: 'Enterprise operational infrastructure: Certara for compliance automation and Forge for operational execution and optimization.',
}

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-aisom-cool-50 section-padding">
        <div className="container-max">
          <h1 className="mb-6">Our Solutions</h1>
          <p className="text-lg max-w-2xl">
            Cutting-edge software platforms designed to transform how organizations operate, comply, and grow.
          </p>
        </div>
      </section>

      <Solutions />

      {/* Detailed Product Information */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="space-y-16">
            {/* Certara Section */}
            <div id="certara" className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="mb-4">Certara</h2>
                <h3 className="mb-6">
                  Compliance & Governance Platform
                </h3>
                <p className="mb-4">
                  Enterprise-grade compliance management platform that ensures regulatory adherence across distributed operations.
                </p>
                <div className="mb-4">
                  <span className="px-2 py-1 bg-aisom-blue-500 text-white text-xs rounded">
                    Beta Ready
                  </span>
                </div>
                <div className="mb-4">
                  <a
                    href="https://form.typeform.com/to/KXSokz4U?utm_content=xxxxx#first_name=xxxxx&last_name=xxxxx&email=xxxxx&phone_number=xxxxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block text-sm"
                  >
                    Join Certara Beta
                  </a>
                </div>
                <p className="text-xs text-aisom-slate-500">
                  Limited beta slots available. Enterprise verification required.
                </p>
              </div>
              <div className="card p-6">
                <h4 className="mb-4">Capabilities</h4>
                <div className="capability-list">
  <div className="capability-item">
    <div className="capability-bullet"></div>
    <span>Automated compliance monitoring</span>
  </div>
  <div className="capability-item">
    <div className="capability-bullet"></div>
    <span>Centralised governance dashboard</span>
  </div>
  <div className="capability-item">
    <div className="capability-bullet"></div>
    <span>Real-time risk assessment</span>
  </div>
  <div className="capability-item">
    <div className="capability-bullet"></div>
    <span>Automated reporting</span>
  </div>
  <div className="capability-item">
    <div className="capability-bullet"></div>
    <span>E-sign integrations</span>
  </div>
  <div className="capability-item">
    <div className="capability-bullet"></div>
    <span>Services marketplace from compliance professionals</span>
  </div>
</div>
              </div>
            </div>

            {/* Forge Section */}
            <div id="forge" className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1">
                <h2 className="mb-4">Forge</h2>
                <h3 className="mb-6">
                  Operations Execution & Optimisation Platform
                </h3>
                <p className="mb-4">
                  Optimizes workflows and reduces bottlenecks through intelligent process design. Leverage AI to identify inefficiencies, automate repetitive tasks, and streamline operations across your organization.
                </p>
                <div className="text-aisom-slate-500 text-sm">
                  Coming soon
                </div>
              </div>
              <div className="order-1 lg:order-2 card p-6">
                <h4 className="mb-4">Key Features</h4>
                <ul className="space-y-2 text-sm">
  <li>• Workflow automation and optimisation</li>
  <li>• Reduction of bottlenecks</li>
  <li>• Identification of inefficiencies</li>
  <li>• Automate repetitive tasks</li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
