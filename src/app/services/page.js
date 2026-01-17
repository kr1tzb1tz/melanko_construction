import Link from 'next/link';
import Image from 'next/image';
import { Home, Bath, Plus, Wrench, HardHat, TreePine, Hammer } from 'lucide-react';
import Footer from '../../components/Footer';
import LetsGetStarted from '../../components/LetsGetStarted';

export default function Services() {
  const services = [
    {
      id: "kitchens",
      icon: <Home size={48} />,
      title: "Kitchen Remodels",
      description: "Complete kitchen remodels from design to installation. We create beautiful, functional kitchens that enhance your home's value and your daily living experience.",
      image: "/services/kitchen.webp"
    },
    {
      id: "bathrooms",
      icon: <Bath size={48} />,
      title: "Bathroom Remodels",
      description: "Transform your bathroom with modern fixtures, custom tile work, elegant finishes, and spa-like amenities.",
      image: "/services/bathroom.webp"
    },
    {
      id: "remodels",
      icon: <Wrench size={48} />,
      title: "Room Remodels",
      description: "Transform any room in your home with our comprehensive remodeling services. From living rooms to bedrooms, we bring your vision to life with quality craftsmanship.",
      image: "/services/remodel.webp"
    },
    {
      id: "additions",
      icon: <Plus size={48} />,
      title: "Room Additions",
      description: "Expand your living space with custom room additions. From planning to completion, we seamlessly integrate new spaces into your existing home structure.",
      image: "/services/addition.webp"
    },
    {
      id: "concrete",
      icon: <HardHat size={48} />,
      title: "Concrete",
      description: "Durable concrete work including driveways, patios, walkways, and decorative finishes. Built to withstand the test of time and weather.",
      image: "/services/concrete.webp"
    },
    {
      id: "decks",
      icon: <TreePine size={48} />,
      title: "Decks",
      description: "Custom deck construction and renovation. From simple platforms to multi-level outdoor living spaces with built-in features.",
      image: "/services/deck.webp"
    },
    {
      id: "general",
      icon: <Hammer size={48} />,
      title: "General Construction",
      description: "Comprehensive construction services for residential projects of all sizes and complexity. Whatever your project needs, we have the expertise to deliver.",
      image: "/services/remodel.webp"
    }
  ];

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
              <span className="text-[#CC1A25] text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Services
            </h1>
            <div className="w-24 h-1 bg-[#CC1A25] mx-auto mb-8"></div>
            <p className="text-xl max-w-2xl mx-auto text-white/80 leading-relaxed">
              Comprehensive general contracting services delivered with precision, quality, and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Complete Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end construction services, ensuring your project is completed 
              on time, on budget, and to the highest quality standards.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} id={service.id} className={`grid md:grid-cols-2 gap-12 items-center scroll-mt-16 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="text-[#000000] mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#000000] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#CC1A25] hover:bg-[#b3151f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Get a Quote
                  </Link>
                </div>
                <div className={`relative h-96 rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsGetStarted />

      <Footer />
    </div>
  );
}
