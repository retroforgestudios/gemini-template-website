export default function Life() {
  return (
    <div className="flex-grow">
      <header className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Life Insurance</h1>
          <p className="text-lg text-blue-200">Secure your family's financial future with a policy tailored to your needs.</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Life Insurance Matters</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Life insurance provides financial security to your loved ones in the event of an unexpected tragedy, helping cover expenses like mortgage payments, college tuition, and daily living costs.
          </p>
          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r">
            <h4 className="font-bold text-gray-900 mb-2">Ready to explore your options?</h4>
            <button className="inline-block bg-primary hover:bg-blue-900 text-white font-bold py-2 px-6 rounded transition mt-2">Request a Life Insurance Quote</button>
          </div>
        </div>
      </main>
    </div>
  );
}