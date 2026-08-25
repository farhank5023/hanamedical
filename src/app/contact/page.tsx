import ContactForm from '../components/ContactForm/index'

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Let&apos;s Start Your Healthcare Journey
        </h1>
        <p className="text-gray-600">
          Whether you are a patient seeking treatment in India or an organization looking to partner with Hana, our team is ready to assist.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="border rounded-lg p-6 shadow-sm">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6">
          <div className="border rounded-lg p-5 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              For patients: send your medical reports and get support with hospital coordination, treatment planning, travel assistance, and more.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-primary">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217L8 8.583 0 4.217V4z"/>
                <path d="M0 5.383v6.617a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.383l-7.447 4.653a1 1 0 0 1-1.106 0L0 5.383z"/>
              </svg>
              <a href="mailto:hello@hanamedicalservices.com" className="hover:text-primary transition">
                hello@hanamedicalservices.com
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-primary">
                <path d="M3.654 1.328a.75.75 0 0 1 .847-.23l2.231.86a.75.75 0 0 1 .447.725L7.18 5.6a.75.75 0 0 1-.677.56L5.98 6.38a.75.75 0 0 0-.529.38l-.863 1.833a9.2 9.2 0 0 0 4.319 4.319l1.833-.863a.75.75 0 0 0 .38-.529l.22-1.523a.75.75 0 0 1 .56-.677l2.715-.45a.75.75 0 0 1 .725.447l.86 2.231a.75.75 0 0 1-.23.847l-1.405 1.065a1.75 1.75 0 0 1-1.24.405C7.79 15.5 1.5 9.21 1.5 4.698a1.75 1.75 0 0 1 .405-1.24l1.065-1.405Z"/>
              </svg>
              <a href="tel:+919876543210" className="hover:text-primary transition">
                WhatsApp: +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-primary">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-1 2v.5a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2.5V2h6Zm3 12V4H2v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1Z"/>
              </svg>
              <span>India</span>
            </div>
          </div>

          <div className="h-[415px] border rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.722499559411!2d80.9289914!3d26.848777199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd7963565b4b%3A0x5d0e4c7b3eee272!2sARZU%20INTERNATIONAL%20SHOP%20NO%2008%20SECOND%20FLOOR%20LUCKNOW%20PLAZA%20BUILDING!5e0!3m2!1sen!2sin!4v1774975856069!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}