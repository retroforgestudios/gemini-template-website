export default function Auto() {
  return (
    <div className="flex-grow">
      <header className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto Insurance</h1>
          <p className="text-lg text-blue-200">Hit the road with confidence and the right protection.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection for Every Mile</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you commute every day or just drive on the weekends, we make sure you have the coverage you need if the unexpected happens. We shop multiple top-rated carriers for you.
          </p>
          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r">
            <h4 className="font-bold text-gray-900 mb-2">Ready to explore your options?</h4>
            <button className="inline-block bg-primary hover:bg-blue-900 text-white font-bold py-2 px-6 rounded transition mt-2">Request an Auto Quote</button>
          </div>
        </div>
      </main>
    </div>
  );
}