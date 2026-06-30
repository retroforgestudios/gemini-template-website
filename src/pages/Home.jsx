export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-32 px-4 relative" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Protecting What Matters Most to You.</h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200">Independent insurance solutions tailored to your life, your business, and your employees.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary hover:bg-sky-600 text-white font-bold py-3 px-8 rounded shadow-lg transition text-lg">Get a Free Quote</button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Products, Dedicated Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We offer a wide range of customized plans to ensure you get the perfect coverage at competitive rates.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personal Insurance</h3>
              <p className="text-gray-600 mb-6">Comprehensive coverage for your home, auto, life, and personal assets.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Business Insurance</h3>
              <p className="text-gray-600 mb-6">Customized risk management solutions and commercial policies.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Employee Benefits</h3>
              <p className="text-gray-600 mb-6">Attract top talent with competitive group health and retirement plans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}