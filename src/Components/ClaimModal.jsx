import { useForm, ValidationError } from '@formspree/react';

export default function ClaimModal({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("mbdvaqav");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[100] transition-opacity">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative mx-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-primary">Report a Claim</h2>
        <p className="text-sm text-gray-600 mb-4">Please provide initial details. An agent will contact you shortly.</p>
        
        {state.succeeded ? (
          <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded">
            Thank you! Your claim details have been securely submitted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input type="text" name="name" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Policy Number (if known)</label>
              <input type="text" name="policy_number" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary" />
              <ValidationError prefix="Policy Number" field="policy_number" errors={state.errors} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Date of Incident</label>
              <input type="date" name="incident_date" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary" />
              <ValidationError prefix="Incident Date" field="incident_date" errors={state.errors} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Brief Description</label>
              <textarea name="description" rows="3" required className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-secondary"></textarea>
              <ValidationError prefix="Description" field="description" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition disabled:opacity-50">
              Submit Claim
            </button>
          </form>
        )}
      </div>
    </div>
  );
}