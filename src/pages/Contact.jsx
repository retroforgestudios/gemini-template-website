import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xpqgjgyd");

  return (
    <div className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <header className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-200">We are here to help. Reach out to our team for quotes, claims, or general questions.</p>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 text-lg">Whether you prefer to call, email, or stop by the office, our dedicated agents are ready to assist you.</p>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-primary text-xl">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600 mt-1">Main: (555) 123-4567</p>
                  <p className="text-gray-600">Claims: (555) 987-6543</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-primary text-xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1">info@agencyname.com</p>
                  <p className="text-gray-600">support@agencyname.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-primary text-xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">Office Location</h4>
                  <p className="text-gray-600 mt-1">123 Insurance Blvd, Suite 100<br/>Anytown, ST 12345</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-primary text-xl">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">Business Hours</h4>
                  <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-secondary">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {state.succeeded ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                <div className="text-green-500 text-4xl mb-4"><i className="fa-solid fa-circle-check"></i></div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">Thank you for reaching out. An agent will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">First Name</label>
                    <input type="text" name="first_name" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
                    <ValidationError prefix="First Name" field="first_name" errors={state.errors} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Last Name</label>
                    <input type="text" name="last_name" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
                    <ValidationError prefix="Last Name" field="last_name" errors={state.errors} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Email Address</label>
                  <input type="email" name="email" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Phone Number</label>
                  <input type="tel" name="phone" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary" />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
                  <textarea name="message" rows="4" required className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button type="submit" disabled={state.submitting} className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-3 px-4 rounded shadow-lg transition disabled:opacity-50 text-lg mt-4">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      {/* Full-Width Google Map */}
      <section className="w-full h-96 bg-gray-300">
        <iframe 
          title="Office Location"
          src="https://maps.google.com/maps?q=123%20Insurance%20Blvd,%20Anytown,%20ST%2012345&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}