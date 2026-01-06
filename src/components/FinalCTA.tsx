import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="bg-aisom-gunmetal-900 section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white text-2xl font-semibold mb-4">
                Enterprise Integration
              </h2>
              <p className="text-aisom-cool-200 mb-6">
                For organizations requiring strategic systems integration and intelligent infrastructure. Contact our enterprise team for deployment planning and architectural consultation.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Enterprise Team
              </Link>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold mb-4">Deployment Support</h4>
              <ul className="space-y-2 text-sm text-aisom-slate-600">
                <li>• Architectural assessment</li>
                <li>• Integration planning</li>
                <li>• Compliance review</li>
                <li>• Training and onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
