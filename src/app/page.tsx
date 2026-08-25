// import ContactForm from './components/ContactForm'
import Category from './components/Home/Category'
import Founder from './components/Home/Founder'
import Hero from './components/Home/Hero'
// import Pricing from './components/Home/Pricing'
import Project from './components/Home/Project'
import Records from './components/Home/Records'
// import Review from './components/Home/Review'
import Specialize from './components/Home/Specialize'
import WhoWeAre from './components/Home/WhoWeAre'

export default function Home() {
  const faqs = [
    {
      question: 'How does Hana Medical Services help patients?',
      answer:
        'We coordinate medical consultations, specialist referrals, hospital appointments, travel planning, and treatment support for patients seeking care in India.',
    },
    {
      question: 'Can international patients get help with travel and accommodation?',
      answer:
        'Yes. We assist with medical-visa documentation, airport pickup, accommodation arrangements, local transport support, and healthcare coordination during the stay.',
    },
    {
      question: 'Do I need to bring my medical reports?',
      answer:
        'Yes, sharing your reports is the best way to begin. We review the information and help identify the right specialty, doctors, and hospital pathway.',
    },
    {
      question: 'Which treatments do you support?',
      answer:
        'We support a range of specialties including oncology, cardiology, neurology, orthopaedics, fertility, kidney care, liver-related care, paediatric care, and general surgery.',
    },
  ]

  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Project />
      <Records />
      {/* <Review /> */}
      <Specialize />
      {/* <Pricing /> */}
      <Category />
      <Founder />

      <section id="faq" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold text-primary">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-darkblue dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-teal-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="mb-2 text-xl font-bold text-darkblue dark:text-white">
                {item.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* <ContactForm /> */}
    </main>
  )
}
