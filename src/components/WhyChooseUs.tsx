const principles = [
  {
    title: 'Systems First',
    description: 'We design for operational continuity. Every component serves the larger system architecture, not individual features.',
  },
  {
    title: 'Compliance by Design',
    description: 'Regulatory requirements are built into system foundations, not added as afterthoughts.',
  },
  {
    title: 'Infrastructure Focus',
    description: 'We build the operational layers that applications depend on. Stability over novelty.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold mb-8">Operating Principles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div key={principle.title} className="card p-6">
                <h3 className="font-semibold mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-aisom-slate-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
