import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

export default function TreatmentsPage() {
  return (
    <div className="pt-32 px-6 lg:px-10 max-w-6xl mx-auto space-y-12 pb-20">
      <div className="text-center">
        <p className="text-sm font-semibold text-primary mb-3">
          Medical services
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
          ['Oncology & Cancer Care', 'Support for evaluation and treatment options through appropriate oncology specialists and hospitals.', '/images/about/Industries/Cancer.jpg'],
          ['Cardiology & Cardiac Care', 'Coordination for cardiac evaluation, interventional procedures, and cardiac surgery.', '/images/about/Industries/Cardiology.jpg'],
          ['Neurosurgery & Neurology', 'Assistance for specialized neurological evaluation and neurosurgical treatment.', '/images/about/Industries/Neurosurgery.jpg'],
          ['Spine & Orthopaedics', 'Coordination for spine conditions, joint problems, orthopaedic procedures, and joint replacement.', '/images/about/Industries/Spine.jpg'],
          ['Kidney & Renal Care', 'Support for nephrology, renal care, and relevant transplant evaluation pathways.', '/images/about/Industries/Kidney.jpg'],
          ['Liver & Transplant Care', 'Coordination for liver disease and transplant-related evaluation.', '/images/about/Industries/transplant.jpg'],
          ['IVF & Fertility', 'Assistance for fertility evaluation and assisted reproductive treatment.', '/images/about/Industries/IVF.jpg'],
          ['Paediatric Care', 'Coordination for children requiring specialized medical consultation and treatment.', '/images/about/Industries/Medical Reports.jpg'],
          ['General & Advanced Surgery', 'Coordination for surgical consultations and procedures through appropriate providers.', '/images/about/Industries/Planning.jpg'],
        ].map(([title, desc, image]) => (
          <div key={title} className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="aspect-[3/2] w-full overflow-hidden">
              <Image
                src={getImgPath(image)}
                alt={title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-2xl font-bold text-darkblue dark:text-white">{title}</h2>
              <p className="leading-relaxed text-gray-600 dark:text-gray-200">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
