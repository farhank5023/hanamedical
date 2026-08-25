'use client'

const Founder = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Your Medical Reports',
      text: 'Send your reports, prescriptions, and previous records so our care team can assess the case accurately.',
    },
    {
      number: '02',
      title: 'Case Coordination',
      text: 'We identify the right specialist, hospital, and treatment pathway based on your condition and preference.',
    },
    {
      number: '03',
      title: 'Treatment Planning',
      text: 'We coordinate available treatment options and estimated cost details from the relevant healthcare providers.',
    },
    {
      number: '04',
      title: 'Travel & Support',
      text: 'From visa guidance to airport transfer, accommodation, and local coordination, we help simplify the journey.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-secondary to-teal-50 dark:from-darkmode dark:via-darklight dark:to-darkmode">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm mb-3">
            Patient journey
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold text-darkblue dark:text-white">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-teal-100 bg-white/80 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-darkblue dark:text-white">
                {step.title}
              </h3>
              <p className="text-base leading-7 text-lightgrey dark:text-gray-200 normal-case">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Founder