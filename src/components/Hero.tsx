import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-semibold mb-6">
                Software as Leverage. Solutions as Strategy
              </h1>
              <div className="space-y-4 text-aisom-slate-600">
                <p className="text-lg">
                  Aisom builds intelligent software to help SMMEs operate seamlessly and grow to their full potential.
                </p>
                <p className="text-base">
                  We design solutions that scale with enterprise complexity, ensuring compliance, efficiency, and strategic alignment across distributed operations.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/products" className="btn-primary">
                  Platform Overview
                </Link>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-aisom-slate-600">Certara Compliance</span>
                  <span className="text-xs bg-aisom-blue-500 text-white px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-aisom-slate-600">Forge Operations</span>
                  <span className="text-xs bg-aisom-blue-500 text-white px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-aisom-slate-600">Platform Core</span>
                  <span className="text-xs bg-aisom-blue-500 text-white px-2 py-1 rounded">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
