import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center aspect-square">
                <Image
                  src="/logo.svg"
                  alt="Melanko Construction Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#CC1A25]">Melanko Construction</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed font-medium">
              Quality craftsmanship. Grounded in pride. Customized for you.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services#kitchens" className="hover:text-white transition-colors duration-300">Kitchen Remodels</Link></li>
              <li><Link href="/services#bathrooms" className="hover:text-white transition-colors duration-300">Bathroom Remodels</Link></li>
              <li><Link href="/services#remodels" className="hover:text-white transition-colors duration-300">Room Remodels</Link></li>
              <li><Link href="/services#additions" className="hover:text-white transition-colors duration-300">Room Additions</Link></li>
              <li><Link href="/services#concrete" className="hover:text-white transition-colors duration-300">Concrete</Link></li>
              <li><Link href="/services#decks" className="hover:text-white transition-colors duration-300">Decks</Link></li>
              <li><Link href="/services#general" className="hover:text-white transition-colors duration-300">General Construction</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+17406763331" className="hover:text-white transition-colors duration-300">
                  (740) 676-3331
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@melankoconstruction.com" className="hover:text-white transition-colors duration-300">
                  info@melankoconstruction.com
                </a>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=451+E+39th+St,+Shadyside,+OH+43947" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>451 E 39th St<br />Shadyside, OH 43947</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
              <li><Link href="/employment" className="hover:text-white transition-colors duration-300">Employment</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">Licensed & Insured</p>
          <p>&copy; {currentYear} Melanko Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
