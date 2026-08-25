export default function TreatmentsPage() {
  return (
    <div className="pt-32 px-6 lg:px-10 max-w-6xl mx-auto space-y-12 pb-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Medical Services
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Our Medical Specialties
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hana Medical Services helps international patients connect with trusted specialists and healthcare providers in India for a wide range of clinical needs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Oncology & Cancer Care', 'Support for evaluation and treatment options through appropriate oncology specialists and hospitals.'],
          ['Cardiology & Cardiac Care', 'Coordination for cardiac evaluation, interventional procedures, and cardiac surgery.'],
          ['Neurosurgery & Neurology', 'Assistance for specialized neurological evaluation and neurosurgical treatment.'],
          ['Spine & Orthopaedics', 'Coordination for spine conditions, joint problems, orthopaedic procedures, and joint replacement.'],
          ['Kidney & Renal Care', 'Support for nephrology, renal care, and relevant transplant evaluation pathways.'],
          ['Liver & Transplant Care', 'Coordination for liver disease and transplant-related evaluation.'],
          ['IVF & Fertility', 'Assistance for fertility evaluation and assisted reproductive treatment.'],
          ['Paediatric Care', 'Coordination for children requiring specialized medical consultation and treatment.'],
          ['General & Advanced Surgery', 'Coordination for surgical consultations and procedures through appropriate providers.'],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
              +
            </div>
            <h2 className="text-2xl font-bold text-darkblue dark:text-white mb-3">{title}</h2>
            <p className="text-gray-600 dark:text-gray-200 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
