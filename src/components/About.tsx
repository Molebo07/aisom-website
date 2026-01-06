export default function About() {
  return (
    <section className="bg-aisom-cool-50 section-padding">
      <div className="container-max">
        <div className="max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Systems Integration</h2>
              <div className="space-y-4 text-aisom-slate-600">
                <p>
                  Aisom provides strategic systems integration and intelligent software infrastructure. We specialize in operational foundations that enterprise applications depend on.
                </p>
                <p>
                  Our approach combines deep technical architecture with regulatory compliance frameworks, ensuring that complex organizations can operate with confidence.
                </p>
                <p>
                  We build systems that other companies build products on top of.
                </p>
              </div>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-4">Core Capabilities</h4>
              <ul className="space-y-2 text-sm text-aisom-slate-600">
                <li>• Strategic architecture design</li>
                <li>• Compliance automation</li>
                <li>• Operational optimization</li>
                <li>• Enterprise integration</li>
                <li>• Regulatory frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
