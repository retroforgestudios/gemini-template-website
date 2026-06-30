import { useForm, ValidationError } from '@formspree/react';

export default function QuoteModal({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("xdarlywo");

  // If the modal isn't supposed to be open, hide it completely
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[100] transition-opacity">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative mx-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-primary">Get a Free Quote</h2>
        
        {state.succeeded ? (
          <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded">
            Thank you! Your quote request has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input type="text" name="name" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input type="email" name="email" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Insurance Type</label>
              <select name="insurance_type" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary">
                <option value="Personal">Personal (Auto, Home, Life)</option>
                <option value="Business">Business / Commercial</option>
                <option value="Benefits">Employee Benefits</option>
              </select>
              <ValidationError prefix="Insurance Type" field="insurance_type" errors={state.errors} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">How can we help?</label>
              <textarea name="message" rows="3" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="w-full bg-secondary hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}