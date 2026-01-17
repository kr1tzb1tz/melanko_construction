"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Phone, Mail, MapPin, Home, Bath, Plus, Wrench, HardHat, TreePine, Hammer, ArrowRight, X } from 'lucide-react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import Footer from '../components/Footer';
import LetsGetStarted from '../components/LetsGetStarted';

export default function HomePage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const navigateToService = (serviceId) => {
    router.push(`/services#${serviceId}`);
  };

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      id: "kitchens",
      icon: <Home size={56} />,
      title: "Kitchen Remodels",
      description: "Complete kitchen remodels from design to installation. We create beautiful, functional kitchens that enhance your home's value.",
      image: "/services/kitchen.webp"
    },
    {
      id: "bathrooms",
      icon: <Bath size={56} />,
      title: "Bathroom Remodels",
      description: "Transform your bathroom with modern fixtures, custom tile work, and elegant finishes.",
      image: "/services/bathroom.webp"
    },
    {
      id: "remodels",
      icon: <Wrench size={56} />,
      title: "Room Remodels",
      description: "Transform any room in your home. From living rooms to bedrooms, we bring your vision to life.",
      image: "/services/remodel.webp"
    },
    {
      id: "additions",
      icon: <Plus size={56} />,
      title: "Room Additions",
      description: "Expand your living space with custom room additions seamlessly integrated into your existing home.",
      image: "/services/addition.webp"
    },
    {
      id: "concrete",
      icon: <HardHat size={56} />,
      title: "Concrete",
      description: "Durable concrete work including driveways, patios, walkways, and decorative finishes.",
      image: "/services/concrete.webp"
    },
    {
      id: "decks",
      icon: <TreePine size={56} />,
      title: "Decks",
      description: "Custom deck construction and renovation. From simple platforms to multi-level outdoor living spaces.",
      image: "/services/deck.webp"
    },
    {
      id: "general",
      icon: <Hammer size={56} />,
      title: "General Construction",
      description: "Comprehensive construction services for residential projects of all sizes and complexity.",
      image: "/services/general.webp"
    }
  ];
  return (
    <ParallaxProvider>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Diagonal accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 top-0 w-1/3 h-full bg-gradient-to-l from-[#CC1A25]/15 to-transparent skew-x-[-12deg]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CC1A25]/50 to-transparent"></div>
        </div>
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-52">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="text-[#CC1A25] text-sm font-semibold tracking-widest uppercase">Est. 1986</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Quality craftsmanship.<br className="hidden sm:block" />
              <span className="text-white/90">Grounded in pride.</span>
            </h1>
            <div className="w-24 h-1 bg-[#CC1A25] mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed">
              Local & family owned general contracting with decades of experience. Customized for you.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-secondary mb-6">
              About Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission & Vision */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold text-[#000000] mb-4">Our Mission</h3>
              <p className="text-elegant mb-4">
                Home renovations are a major investment and we know the process isn't always easy. Projects disrupt normal daily lives and decisions through the process can be stressful. So our mission is simple, here at Melanko Construction Co. we not only strive to deliver a high quality completion of your project but also provide the best customer experience while your dream project is completed.
              </p>
              <p className="text-elegant mb-8 italic text-gray-600">
                Rest assured knowing that team members show up regularly, the job is done correctly, team members are clean and professional, communication is clear and any questions can be answered, and inconveniences are kept to a minimum.
              </p>

              <h3 className="text-2xl font-semibold text-[#000000] mb-4">Our Vision</h3>
              <p className="text-elegant">
                We strive to make your experience the best while we give you a project you love.
              </p>
            </div>

            {/* History */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-semibold text-[#000000] mb-4">Our History</h3>
              <p className="text-elegant mb-8">
                Melanko Construction Co. was incorporated in 1986 by Paul Melanko Jr. He built the company with the same vision of quality, reliability, and trust that still exists today. After 35+ years in business Paul retired and son, Jared Melanko took over as president in 2021.
              </p>
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/crew.jpg"
                    alt="Melanko Construction Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#CC1A25] rounded-full flex items-center justify-center shadow-xl">
                  <Hammer className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Parallax Background */}
        <Parallax speed={-20} className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="/parallax.png"
              alt="Construction Background"
              fill
              className="object-cover opacity-40"
            />
          </div>
        </Parallax>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="heading-secondary mb-6">
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction services delivered with precision and expertise
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="card-elegant p-8 group animate-fade-in-up w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                <div className="text-[#CC1A25] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="heading-tertiary mb-4">{service.title}</h3>
                <p className="text-elegant mb-6">
                  {service.description}
                </p>
                <Link href={`/services#${service.id}`} className="text-[#CC1A25] hover:text-[#b3151f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsGetStarted />

      <Footer />
      </div>
    </ParallaxProvider>
  );
}
