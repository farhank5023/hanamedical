'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-24 px-6 lg:px-10 max-w-6xl mx-auto space-y-16">

      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          About Hana Medical Services
        </h1>
      </div>

      <div className="text-center space-y-6">
        <p className="text-lg text-gray-600 leading-relaxed">
          <span className="font-bold">Hana Medical Services</span> is an India-based international patient facilitation company focused on helping patients from around the world coordinate medical treatment in India.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          We assist patients and their attendants with the practical and logistical aspects of their healthcare journey, including healthcare-provider coordination, appointments, medical-visa documentation assistance, travel arrangements, airport transfers, accommodation and local support.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Our goal is to make healthcare in India more accessible, transparent, and reassuring for international patients who need trusted guidance and smooth coordination.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-5xl font-bold text-center mb-15">
          Our Mission
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To connect international patients with appropriate healthcare opportunities in India while providing dependable support throughout their journey.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[70%] h-52">
              <Image
                src="/images/about/prof.png"
                alt="Our Mission"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-5xl font-bold text-center mb-15">
          Our Vision
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To build a trusted global healthcare network connecting patients, healthcare professionals and healthcare providers across borders.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[70%] h-52">
              <Image
                src="/images/about/quality.png"
                alt="Our Vision"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}