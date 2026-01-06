import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forge - Operational Execution & Optimization Layer | Aisom',
  description: 'Forge provides intelligent workflow automation and operational efficiency platform for complex organizations.',
}

export default function ForgePage() {
  return (
    <main>
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold mb-2">Forge</h1>
              <p className="text-xl text-aisom-slate-600 mb-4">Operational Execution & Optimization Layer</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-aisom-blue-500 text-white px-2 py-1 rounded">Production</span>
                <span className="text-aisom-slate-500">Version 1.9.2</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Purpose</h2>
                  <p className="text-aisom-slate-600">
                    Forge delivers intelligent workflow automation and operational optimization. The platform transforms complex business processes into efficient, automated workflows with continuous performance monitoring and optimization.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Core Capabilities</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Process Optimization</h3>
                      <p className="text-sm text-aisom-slate-600">AI-driven analysis and optimization of operational workflows.</p>
                    </div>
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Workflow Automation</h3>
                      <p className="text-sm text-aisom-slate-600">Intelligent automation of repetitive and complex business processes.</p>
                    </div>
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Performance Analytics</h3>
                      <p className="text-sm text-aisom-slate-600">Real-time monitoring and analytics of operational performance metrics.</p>
                    </div>
                    <div className="card p-4">
                      <h3 className="font-semibold mb-2">Resource Allocation</h3>
                      <p className="text-sm text-aisom-slate-600">Dynamic resource optimization and intelligent task distribution.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Deployment Context</h2>
                  <p className="text-aisom-slate-600 mb-4">
                    Forge is designed for organizations with complex operational workflows requiring automation, optimization, and continuous improvement.
                  </p>
                  <div className="card p-4">
                    <h3 className="font-semibold mb-2">Target Organizations</h3>
                    <ul className="text-sm text-aisom-slate-600 space-y-1">
                      <li>• Large enterprises with complex operations</li>
                      <li>• Manufacturing and supply chain companies</li>
                      <li>• Professional services firms</li>
                      <li>• Healthcare delivery organizations</li>
                      <li>• Financial services operations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-semibold mb-4">System Requirements</h3>
                  <ul className="text-sm text-aisom-slate-600 space-y-2">
                    <li>• Workflow management systems</li>
                    <li>• Business process engines</li>
                    <li>• Analytics and reporting platforms</li>
                    <li>• Integration middleware</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Integration Points</h3>
                  <ul className="text-sm text-aisom-slate-600 space-y-2">
                    <li>• ERP systems</li>
                    <li>• CRM platforms</li>
                    <li>• Business intelligence tools</li>
                    <li>• Workflow engines</li>
                  </ul>
                </div>

                <div className="card p-6">
                  <h3 className="font-semibold mb-4">Documentation</h3>
                  <ul className="text-sm space-y-2">
                    <li><a href="#" className="text-aisom-blue-500 hover:text-aisom-blue-600">API Reference</a></li>
                    <li><a href="#" className="text-aisom-blue-500 hover:text-aisom-blue-600">Workflow Design Guide</a></li>
                    <li><a href="#" className="text-aisom-blue-500 hover:text-aisom-blue-600">Optimization Framework</a></li>
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
