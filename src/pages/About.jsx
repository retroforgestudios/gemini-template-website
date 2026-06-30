import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <header className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About AgencyName</h1>
          <p className="text-lg text-blue-200">Serving our community with integrity, trust, and expertise since 1970.</p>
        </div>
      </header>

      {/* Mission & History Container */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Our Mission */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is simple: to provide families and businesses with the peace of mind they deserve. We believe that insurance isn't just about policies; it's about protecting the people and things that matter most in your life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are committed to delivering personalized, transparent, and comprehensive coverage solutions while building lifelong relationships with our clients based on trust.
            </p>
          </div>

          {/* Our History */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 1970, AgencyName started as a small, family-owned storefront. For over 50 years, we have weathered storms, economic shifts, and countless changes in the insurance industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we have grown into one of the region's most trusted independent agencies, yet we still operate with the exact same core values of honesty and neighborly care that we started with on day one.
            </p>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our experienced agents are here to guide you through every step of your insurance journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 border-4 border-gray-50">
                <i className="fa-solid fa-user text-5xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sarah Jenkins</h3>
              <p className="text-secondary font-semibold mb-3">Principal Agent</p>
              <p className="text-sm text-gray-600 leading-relaxed">Specializes in commercial policies and overall business risk management.</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 border-4 border-gray-50">
                <i className="fa-solid fa-user text-5xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Michael Chang</h3>
              <p className="text-secondary font-semibold mb-3">Senior Agent</p>
              <p className="text-sm text-gray-600 leading-relaxed">Your go-to expert for home, auto, and personal umbrella coverage.</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 border-4 border-gray-50">
                <i className="fa-solid fa-user text-5xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Elena Rodriguez</h3>
              <p className="text-secondary font-semibold mb-3">Life & Health Specialist</p>
              <p className="text-sm text-gray-600 leading-relaxed">Dedicated to helping families secure their financial future and well-being.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action (CTA) */}
      <section className="bg-primary py-16 px-4 text-center border-t-4 border-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to work with a team that cares?</h2>
          <p className="text-blue-200 mb-8 text-lg">Let us review your current coverage and find the perfect plan for your unique needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary hover:bg-sky-600 text-white font-bold py-3 px-8 rounded shadow-lg transition text-lg">
              Get a Free Quote
            </button>
            <Link to="/" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded transition text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}