import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

export default function InternationalPatientsPage() {
  const services = [
    ['Medical consultation coordination', '/images/about/Industries/medicalconsult.jpg'],
    ['Hospital appointment coordination', '/images/about/Industries/hospitalappointment.jpg'],
    ['Medical-visa documentation assistance', '/images/about/Industries/medicalvia.jpg'],
    ['Airport pickup and drop', '/images/about/Industries/airportpickup.jpg'],
    ['Accommodation assistance', '/images/about/Industries/accomodate.jpg'],
    ['Local transportation', '/images/about/Industries/localtransport.jpg'],
    ['Interpreter assistance where available', '/images/about/Industries/intertreter.jpg'],
    ['Patient and attendant support', '/images/about/Industries/patientattendent.jpg'],
    ['Discharge coordination', '/images/about/Industries/discharge.jpg'],
  ]

  return (
    <div className="pt-32 px-6 lg:px-10 max-w-6xl mx-auto space-y-12 pb-20">
      <div className="text-center">
        <p className="text-sm font-semibold text-primary mb-3">
          International care
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Complete Support for International Patients
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Travelling to India for medical treatment can involve many arrangements. Hana Medical Services provides coordinated support to make the process easier for patients and their attendants.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map(([service, image]) => (
          <div key={service} className="flex min-h-60 flex-col items-center rounded-2xl border border-teal-100 bg-white p-7 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-6 flex h-48 w-48 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-transparent p-2">
              <Image
                src={getImgPath(image)}
                alt=""
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-xl font-semibold leading-8 text-darkblue dark:text-white">{service}</p>
          </div>
        ))}
      </div>

      <div className="grid items-center gap-8 p-0 md:grid-cols-2 md:py-8">
        <div>
          <h2 className="mb-3 text-3xl font-bold text-darkblue dark:text-white">
            Supporting patients from around the world
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-200">
            We are building an international healthcare network to support patients seeking treatment in India from countries including Uzbekistan, Iraq, Oman, Qatar, Saudi Arabia, South Africa, Kenya, Tanzania, Nigeria, and Ghana.
          </p>
        </div>
        <div className="flex min-h-64 items-center justify-center overflow-hidden p-0">
          <Image
            src={getImgPath('/images/about/Industries/world.jpg')}
            alt="World map representing international patient support"
            width={800}
            height={500}
            className="h-full max-h-80 w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
