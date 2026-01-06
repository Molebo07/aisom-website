import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operating Principles - Aisom Governance Framework',
  description: 'Aisom\'s operating principles and governance framework for enterprise systems engineering and operational infrastructure.',
}

const principles = [
  {
    title: 'Operational Certainty',
    description: 'Systems must provide predictable, reliable outcomes in critical operations. We design for failure prevention rather than failure recovery.',
    guidelines: [
      'Zero-downtime architecture patterns',
      'Predictive failure detection',
      'Automated recovery mechanisms',
      'Operational monitoring frameworks'
    ]
  },
  {
    title: 'Institutional Alignment',
    description: 'Solutions must integrate with existing enterprise structures while enabling future evolution. We prioritize organizational coherence over technological novelty.',
    guidelines: [
      'Enterprise integration standards',
      'Change management frameworks',
      'Governance model alignment',
      'Scalability planning'
    ]
  },
  {
    title: 'Regulatory Compliance',
    description: 'Compliance requirements are built into system architecture, not added as an afterthought. We design for auditability and regulatory certainty.',
    guidelines: [
      'Built-in compliance controls',
      'Automated reporting systems',
      'Audit trail architecture',
      'Regulatory change adaptation'
    ]
  },
  {
    title: 'Technical Integrity',
    description: 'We maintain architectural purity and technical excellence. Solutions are built to last and evolve, not to be replaced.',
    guidelines: [
      'Clean architecture principles',
      'Code maintainability standards',
      'Documentation requirements',
      'Technology evaluation frameworks'
    ]
  }
]

export default function EthosPage() {
  return (
    <main className="bg-aisom-cool-50 min-h-screen">
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="documentation-style">
            <div className="module-container">
              <div className="module-header">
                <h2>Operating Principles</h2>
              </div>
              <div className="module-content">
                <div className="space-y-6">
                  <p>
                    These principles guide all aspects of our work in designing and implementing enterprise operational infrastructure. They represent the non-negotiable standards that ensure our solutions serve the needs of organizations where operational excellence is critical.
                  </p>

                  <p>
                    Each principle is supported by specific implementation guidelines that are applied consistently across all projects and product development initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              {principles.map((principle, index) => (
                <div key={index} className="module-container">
                  <div className="module-header">
                    <h3 className="text-lg">{principle.title}</h3>
                  </div>
                  <div className="module-content">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="mb-4">{principle.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Implementation Guidelines</h4>
                        <div className="capability-list">
                          {principle.guidelines.map((guideline, idx) => (
                            <div key={idx} className="capability-item">
                              <div className="capability-bullet"></div>
                              <span className="text-sm">{guideline}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="module-container mt-8">
              <div className="module-header">
                <h2>Quality Assurance Framework</h2>
              </div>
              <div className="module-content">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Code Quality</h4>
                    <div className="capability-list">
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Automated testing requirements</span>
                      </div>
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Code review standards</span>
                      </div>
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Security scanning</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">System Reliability</h4>
                    <div className="capability-list">
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Load testing protocols</span>
                      </div>
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Disaster recovery validation</span>
                      </div>
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Performance benchmarking</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Operational Readiness</h4>
                    <div className="capability-list">
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Runbook documentation</span>
                      </div>
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Monitoring setup validation</span>
                      </div>
                      <div className="capability-item">
                        <div className="capability-bullet"></div>
                        <span className="text-sm">Support team training</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
