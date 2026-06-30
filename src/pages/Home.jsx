import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-32 px-4 relative" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Protecting What Matters Most to You.</h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200">Independent insurance solutions tailored to your life, your business, and your employees.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-secondary hover:bg-sky-600 text-white font-bold py-3 px-8 rounded shadow-lg transition text-lg inline-block">Get a Free Quote</Link>
          </div>
        </div>
      </header>

      {/* Trusted Carriers Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted by Top Carriers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-500">
            <div className="text-xl font-bold text-gray-800 flex items-center gap-2"><i className="fa-solid fa-umbrella"></i> Traveler's</div>
            <div className="text-xl font-bold text-gray-800 flex items-center gap-2"><i className="fa-solid fa-car-side"></i> Progressive</div>
            <div className="text-xl font-bold text-gray-800 flex items-center gap-2"><i className="fa-solid fa-building-shield"></i> State Auto</div>
            <div className="text-xl font-bold text-gray-800 flex items-center gap-2"><i className="fa-solid fa-hands-holding-circle"></i> Safeco</div>
            <div className="text-xl font-bold text-gray-800 flex items-center gap-2"><i className="fa-solid fa-house-chimney-crack"></i> Nationwide</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Products, Dedicated Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We offer a wide range of customized plans to ensure you get the perfect coverage at competitive rates.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg p-8 border-t-4 border-primary shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personal Insurance</h3>
              <p className="text-gray-600 mb-6">Comprehensive coverage for your home, auto, life, and personal assets.</p>
            </div>
            <div className="bg-white rounded-lg p-8 border-t-4 border-secondary shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Business Insurance</h3>
              <p className="text-gray-600 mb-6">Customized risk management solutions and commercial policies.</p>
            </div>
            <div className="bg-white rounded-lg p-8 border-t-4 border-primary shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Employee Benefits</h3>
              <p className="text-gray-600 mb-6">Attract top talent with competitive group health and retirement plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Call to Action */}
      <section className="bg-primary py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Not sure how much coverage you actually need?</h2>
          <p className="text-blue-100 text-lg mb-8">Stop guessing. Let our experts review your current policies and find gaps before you need to file a claim.</p>
          <Link to="/contact" className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded shadow-lg transition text-lg">
            Talk to an Expert
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Agent talking with clients" 
                className="rounded-lg shadow-2xl object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose an Independent Agent?</h2>
              <p className="text-gray-600 mb-8 text-lg">Unlike captive agents who only sell one brand, we work for you. We shop dozens of top-rated carriers to find the exact coverage you need at the absolute best price.</p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-primary mt-1">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">More Choices</h4>
                    <p className="text-gray-600">Access to multiple carriers means better rates and customized packages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-primary mt-1">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Unbiased Advice</h4>
                    <p className="text-gray-600">We aren't pushed by corporate quotas to sell you things you don't need.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-primary mt-1">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">One-Stop Shopping</h4>
                    <p className="text-gray-600">Bundle your home, auto, and life insurance all under one roof.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it. See why families and businesses trust us.</p>
          </div>
          
          <div className="elfsight-app-22f7b298-0289-4f97-b458-240e4afda5d9" data-elfsight-app-lazy="true"></div>
          
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50 border border-gray-200 rounded-lg open:bg-white open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 marker:content-none">
                How long does it take to get a quote?
                <i className="fa-solid fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Most personal auto and home quotes can be generated within 15 to 30 minutes! Commercial policies or complex life insurance plans may take 1-2 business days as we negotiate the best rates with underwriters.
              </div>
            </details>

            <details className="group bg-gray-50 border border-gray-200 rounded-lg open:bg-white open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 marker:content-none">
                Do I need to cancel my old policy myself?
                <i className="fa-solid fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                We handle the heavy lifting! Once you sign with us, we can send a cancellation request to your previous carrier on your behalf. You won't have to deal with the awkward phone call.
              </div>
            </details>

            <details className="group bg-gray-50 border border-gray-200 rounded-lg open:bg-white open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 marker:content-none">
                What information do I need to get started?
                <i className="fa-solid fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                To get the most accurate quote, it helps to have your current insurance declarations page (the summary of your coverages), driver's license numbers for all drivers in the household, and the VIN numbers of your vehicles.
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}