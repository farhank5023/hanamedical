export default function PatientJourneyPage() {
  const steps = [
    ['01', 'Share Your Reports', 'Send your medical reports and treatment details.'],
    ['02', 'Case Assessment', 'Our team identifies the relevant specialty and healthcare provider.'],
    ['03', 'Specialist Coordination', 'We coordinate the case with the appropriate provider.'],
    ['04', 'Treatment Options & Estimate', 'Available options and estimated cost are obtained from the relevant provider.'],
    ['05', 'Appointment & Documentation', 'We coordinate appointments and assist with required documentation.'],
    ['06', 'Travel to India', 'Plan your journey with travel and arrival support.'],
    ['07', 'Airport, Stay & Local Support', 'Arrival, accommodation, and local transportation coordination.'],
    ['08', 'Hospital & Treatment', 'India-side coordination during the hospital journey.'],
    ['09', 'Discharge & Follow-Up', 'Assistance with discharge and available follow-up coordination.'],
  ]

  return (
    <div className="pt-32 px-6 lg:px-10 max-w-6xl mx-auto space-y-12 pb-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Patient Support
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Patient Journey
        </h1>
      </div>

      <div className="space-y-6">
        {steps.map(([number, title, desc]) => (
          <div key={number} className="flex gap-5 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              {number}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-darkblue dark:text-white mb-2">{title}</h2>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
