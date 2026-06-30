import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from './QuoteModal';
import ClaimModal from './ClaimModal';

export default function Navbar() {
  // These create 'switches' we can flip to open and close the modals
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isClaimOpen, setIsClaimOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-primary text-3xl"></i>
                <span className="font-bold text-2xl text-gray-900">Agency<span className="text-secondary">Name</span></span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary font-semibold py-6 flex items-center">
                  Insurance <i className="fa-solid fa-chevron-down text-xs ml-1 transition-transform group-hover:rotate-180"></i>
                </button>
                
                <div className="absolute top-full left-0 w-[600px] bg-white shadow-2xl rounded-b-lg border-t-4 border-primary hidden group-hover:flex opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                  <div className="w-1/2 p-6">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Coverage Types</h3>
                    <ul className="space-y-3">
                      <li><Link to="/life" className="block text-gray-700 hover:text-primary font-semibold transition"><i className="fa-solid fa-heart-pulse w-5 text-secondary mr-2"></i> Life Insurance</Link></li>
                      <li><Link to="/health" className="block text-gray-700 hover:text-primary font-semibold transition"><i className="fa-solid fa-notes-medical w-5 text-secondary mr-2"></i> Health Insurance</Link></li>
                      <li><Link to="/auto" className="block text-gray-700 hover:text-primary font-semibold transition"><i className="fa-solid fa-car w-5 text-secondary mr-2"></i> Auto Insurance</Link></li>
                    </ul>
                  </div>
                  <div className="w-1/2 bg-gray-50 p-6 flex flex-col justify-center items-start border-l border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center text-xl mb-4">
                      <i className="fa-solid fa-user-shield"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Not sure what you need?</h3>
                    <p className="text-sm text-gray-600 mb-4">Our expert agents can help you build a custom policy.</p>
                    
                    {/* Flipping the quote switch to TRUE */}
                    <button onClick={() => setIsQuoteOpen(true)} className="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition text-sm shadow-md">Talk to an Agent</button>
                  </div>
                </div>
              </div>

              <Link to="/" className="text-gray-700 hover:text-primary font-semibold transition">About Us</Link>
              <Link to="/" className="text-gray-700 hover:text-primary font-semibold transition">Contact</Link>
              
              {/* Flipping the claim switch to TRUE */}
              <button onClick={() => setIsClaimOpen(true)} className="border-2 border-primary text-primary px-4 py-2 rounded font-bold hover:bg-primary hover:text-white transition">Report Claim</button>
              
              {/* Flipping the quote switch to TRUE */}
              <button onClick={() => setIsQuoteOpen(true)} className="bg-secondary text-white px-5 py-2 rounded font-bold hover:bg-sky-600 transition shadow-lg">Get a Quote</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Render the Modals (They only show if the switches are true) */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <ClaimModal isOpen={isClaimOpen} onClose={() => setIsClaimOpen(false)} />
    </>
  );
}