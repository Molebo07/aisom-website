import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Aisom - Systems Engineering & Enterprise Infrastructure',
  description: 'Aisom is a systems engineering company focused on operational infrastructure for enterprise organizations requiring precision, compliance, and efficiency.',
}

export default function AboutPage() {
  return (
    <main className="bg-aisom-cool-50 min-h-screen">
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="documentation-style">
            <div className="module-container">
              <div className="module-header">
                <h2>About</h2>
              </div>
              <div className="module-content">
                <div className="space-y-6">
  <p>
    Aisom is a systems engineering company that bridges the gap between business strategy and software execution. Our team collaborates to design intelligent systems that empower SMMEs to scale efficiently, stay compliant, and make smarter decisions.
  </p>
  <p>
    We don't just build technology, we architect solutions that serve as strategic leverage for your business. Every line of code and every system we design is guided by one principle: <span className="text-aisom-blue-500 inline">impact over output</span>.
  </p>
  <p>
    Founded by young technologists and strategists who understand both the boardroom and the codebase, Aisom exists to help ambitious SMMEs turn their operational challenges into competitive advantages.
  </p>
  <div className="mt-8">
    <h4 className="font-semibold mb-3">Industry Focus</h4>
    <div className="text-sm text-aisom-slate-600">
      Financial and Business Services, Manufacturing, Construction, Commercial Services, and Trade
    </div>
  </div>
</div>
                </div>
              </div>
            </div>

            <div className="module-container mt-8">
              <div className="module-header">
                <h2>Operational Philosophy</h2>
              </div>
              <div className="module-content">
                <div className="space-y-6">
                  <p>
                    We believe that operational excellence requires both technical precision and institutional understanding. Our solutions are built to serve the needs of organizations where failure is not an option.
                  </p>

                  <p>
                    Every system we design incorporates the lessons learned from operating in highly regulated, high-stakes environments. We prioritize reliability, auditability, and operational certainty over feature velocity.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Reliability First</h4>
                      <p className="text-sm text-aisom-slate-600">
                        Systems designed for 99.99% uptime in critical operations.
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Compliance Built-in</h4>
                      <p className="text-sm text-aisom-slate-600">
                        Regulatory requirements integrated into system architecture.
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Enterprise Scale</h4>
                      <p className="text-sm text-aisom-slate-600">
                        Solutions that grow with organizational complexity.
                      </p>
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
