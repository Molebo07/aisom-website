import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certara - Compliance & Governance Infrastructure | Aisom',
  description: 'Certara provides automated compliance monitoring, risk assessment, and regulatory reporting framework for regulated organizations.',
}

export default function CertaraPage() {
  return (
    <main>
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold mb-2">Certara</h1>
              <p className="text-xl text-aisom-slate-600 mb-4">Compliance & Governance Infrastructure</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-aisom-blue-500 text-white px-2 py-1 rounded">Beta Ready</span>
                <span className="text-aisom-slate-500">Version 2.1.4</span>
                <a
                  href="https://form.typeform.com/to/KXSokz4U?utm_content=xxxxx#first_name=xxxxx&last_name=xxxxx&email=xxxxx&phone_number=xxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-3 py-1"
                >
                  Join Beta
                </a>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Purpose</h2>
                  <p className="text-aisom-slate-600">
                    Certara provides comprehensive compliance automation and governance infrastructure. The platform ensures regulatory compliance through automated monitoring, risk assessment, and systematic reporting frameworks.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Core Capabilities</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Policy Enforcement</h3>
                      <p className="text-sm text-aisom-slate-600">Automated policy implementation and continuous monitoring across all systems.</p>
                    </div>
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Risk Assessment</h3>
                      <p className="text-sm text-aisom-slate-600">Real-time risk evaluation and automated mitigation workflows.</p>
                    </div>
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Audit Trails</h3>
                      <p className="text-sm text-aisom-slate-600">Comprehensive audit logging and compliance reporting automation.</p>
                    </div>
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Regulatory Reporting</h3>
                      <p className="text-sm text-aisom-slate-600">Automated generation and submission of regulatory reports.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Deployment Context</h2>
                  <p className="text-aisom-slate-600 mb-4">
                    Certara is designed for organizations operating in regulated environments including financial services, healthcare, government, and critical infrastructure sectors.
                  </p>
                  <div className="card p-4">
                    <h3 className="font-semibold mb-2">Target Organizations</h3>
                    <ul className="text-sm text-aisom-slate-600 space-y-1">
                      <li>• Financial institutions and banks</li>
                      <li>• Healthcare and life sciences organizations</li>
                      <li>• Government agencies and contractors</li>
                      <li>• Critical infrastructure operators</li>
                      <li>• Regulated enterprises with compliance requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">System Requirements</h3>
                  <ul className="text-sm text-aisom-slate-600 space-y-2">
                    <li>• Enterprise database systems</li>
                    <li>• Secure network infrastructure</li>
                    <li>• Identity management systems</li>
                    <li>• Audit logging capabilities</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Integration Points</h3>
                  <ul className="text-sm text-aisom-slate-600 space-y-2">
                    <li>• Directory services (LDAP/AD)</li>
                    <li>• SIEM systems</li>
                    <li>• Enterprise databases</li>
                    <li>• Regulatory reporting systems</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Documentation</h3>
                  <ul className="text-sm space-y-2">
                    <li><a href="#" className="text-aisom-blue-500 hover:text-aisom-blue-600">API Reference</a></li>
                    <li><a href="#" className="text-aisom-blue-500 hover:text-aisom-blue-600">Configuration Guide</a></li>
                    <li><a href="#" className="text-aisom-blue-500 hover:text-aisom-blue-600">Compliance Framework</a></li>
                    <li><a href="#" className="text-aisom-blue-500 hover:text-aisom-blue-600">Deployment Manual</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
