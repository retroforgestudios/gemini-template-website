export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <a href="#" className="flex items-center gap-2 mb-4">
            <i className="fa-solid fa-shield-halved text-secondary text-3xl"></i>
            <span className="font-bold text-2xl text-white">Agency<span className="text-secondary">Name</span></span>
          </a>
          <p className="text-sm mb-4">Providing innovative insurance solutions and exceptional service to our community since 1970.</p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-secondary transition">Life Insurance</a></li>
            <li><a href="#" className="hover:text-secondary transition">Health Insurance</a></li>
            <li><a href="#" className="hover:text-secondary transition">Auto Insurance</a></li>
            <li><a href="#" className="hover:text-secondary transition">Home Insurance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot mt-1 text-secondary"></i>
              <span>1234 Main Street, Suite 100<br/>Omaha, NE 68102</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-secondary"></i>
              <span>(555) 123-4567</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Get In Touch</h4>
          <p className="text-sm mb-4">Need a quick quote? Reach out to our agents directly.</p>
          <button className="block text-center bg-secondary hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition w-full">Request a Quote</button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-sm text-center flex justify-between items-center">
        <p>&copy; 2026 AgencyName Insurance. All Rights Reserved.</p>
      </div>
    </footer>
  );
}