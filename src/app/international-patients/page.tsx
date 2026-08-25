export default function InternationalPatientsPage() {
  const services = [
    'Medical consultation coordination',
    'Hospital appointment coordination',
    'Medical-visa documentation assistance',
    'Airport pickup and drop',
    'Accommodation assistance',
    'Local transportation',
    'Interpreter assistance where available',
    'Patient and attendant support',
    'Discharge coordination',
  ]

  return (
    <div className="pt-32 px-6 lg:px-10 max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          International Care
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Complete Support for International Patients
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Travelling to India for medical treatment can involve many arrangements. Hana Medical Services provides coordinated support to make the process easier for patients and their attendants.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <div key={service} className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-lg font-semibold text-darkblue dark:text-white">{service}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-primary/5 p-8 text-center dark:bg-primary/10">
        <h2 className="text-3xl font-bold text-darkblue dark:text-white mb-3">
          Supporting Patients From Around the World
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-200">
          We are building an international healthcare network to support patients seeking treatment in India from countries including Uzbekistan, Iraq, Oman, Qatar, Saudi Arabia, South Africa, Kenya, Tanzania, Nigeria, and Ghana.
        </p>
      </div>
    </div>
  )
}
