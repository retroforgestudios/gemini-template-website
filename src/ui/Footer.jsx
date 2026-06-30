import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from './QuoteModal'; // Importing the modal

export default function Footer() {
  // The switch to open and close the quote modal
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <i className="fa-solid fa-shield-halved text-secondary text-3xl"></i>
                <span className="font-bold text-2xl text-white">Agency<span className="text-secondary">Name</span></span>
              </Link>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Protecting what matters most to you with tailored insurance solutions and neighborly care since 1970.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition"><i className="fa-brands fa-facebook text-xl"></i></a>
                <a href="#" className="text-blue-200 hover:text-white transition"><i className="fa-brands fa-twitter text-xl"></i></a>
                <a href="#" className="text-blue-200 hover:text-white transition"><i className="fa-brands fa-linkedin text-xl"></i></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-blue-200 hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-secondary"></i> Home</Link></li>
                <li><Link to="/about" className="text-blue-200 hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-secondary"></i> About Us</Link></li>
                <li><Link to="/contact" className="text-blue-200 hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-secondary"></i> Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">Our Products</h3>
              <ul className="space-y-3">
                <li><Link to="/auto" className="text-blue-200 hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-secondary"></i> Auto Insurance</Link></li>
                <li><Link to="/life" className="text-blue-200 hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-secondary"></i> Life Insurance</Link></li>
                <li><Link to="/health" className="text-blue-200 hover:text-white transition flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-secondary"></i> Health Insurance</Link></li>
              </ul>
            </div>

            {/* Contact Info & Call to Action */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2">Contact Us</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3 text-blue-200">
                  <i className="fa-solid fa-location-dot mt-1 text-secondary"></i>
                  <span>123 Insurance Blvd, Suite 100<br />Anytown, ST 12345</span>
                </li>
                <li className="flex items-center gap-3 text-blue-200">
                  <i className="fa-solid fa-phone text-secondary"></i>
                  <span>(555) 123-4567</span>
                </li>
              </ul>
              {/* This button flips the modal switch to TRUE */}
              <button 
                onClick={() => setIsQuoteOpen(true)} 
                className="w-full bg-secondary hover:bg-sky-600 text-white font-bold py-3 px-4 rounded transition shadow-lg flex justify-center items-center gap-2"
              >
                Request a Quote <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
            <p>&copy; {new Date().getFullYear()} AgencyName Insurance. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Render the Modal (Only shows if the switch is true) */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}