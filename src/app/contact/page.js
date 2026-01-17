import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Footer from '../../components/Footer';
import LetsGetStarted from '../../components/LetsGetStarted';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden bg-black">
        {/* Diagonal accent */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 w-1/3 h-full bg-gradient-to-l from-[#CC1A25]/20 to-transparent skew-x-[-12deg]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CC1A25]/50 to-transparent"></div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="text-[#CC1A25] text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Contact
            </h1>
            <div className="w-24 h-1 bg-[#CC1A25] mx-auto mb-8"></div>
            <p className="text-xl max-w-2xl mx-auto text-white/80 leading-relaxed">
              Ready to start your project? Let's discuss your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="bg-[#CC1A25] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone</h3>
              <a
                href="tel:+17406763331"
                className="text-[#CC1A25] hover:text-[#b3151f] font-semibold text-lg transition-colors duration-300"
              >
                (740) 676-3331
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="bg-[#CC1A25] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
              <a
                href="mailto:info@melankoconstruction.com"
                className="text-[#CC1A25] hover:text-[#b3151f] font-semibold text-base transition-colors duration-300 break-all"
              >
                info@melankoconstruction.com
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="bg-[#CC1A25] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-700 font-medium">
                451 E 39th St<br />
                Shadyside, OH 43947
              </p>
            </div>

            {/* Hours */}
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="bg-[#CC1A25] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hours</h3>
              <div className="text-gray-700 text-sm space-y-1">
                <p>Mon-Fri: 7AM - 6PM</p>
                <p>Sat: 8AM - 4PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LetsGetStarted />

      <Footer />
    </div>
  );
}
