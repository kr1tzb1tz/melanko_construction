'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../../components/Footer';
import LetsGetStarted from '../../components/LetsGetStarted';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to get all images from a project directory dynamically
  const getAllImagesFromProject = (projectDir, totalImages) => {
    // Generate only the images that should exist
    const images = [];
    for (let i = 1; i <= totalImages; i++) {
      images.push(`${projectDir}/${i}.webp`);
    }
    
    return images;
  };

  const projects = [
    {
      title: "Modern Kitchen Renovation",
      category: "Kitchens",
      description: "Complete kitchen transformation featuring custom cabinets, quartz countertops, and premium appliances in a contemporary design.",
      imageDir: "/projects/kitchens/example1",
      mainImage: "1.webp",
      totalImages: 3,
      year: "2024"
    },
    {
      title: "Luxury Master Bathroom",
      category: "Bathrooms",
      description: "Spa-like master bathroom renovation with custom tile work, freestanding tub, and walk-in shower with premium fixtures.",
      imageDir: "/projects/bathrooms/example1",
      mainImage: "1.webp",
      totalImages: 3,
      year: "2024"
    },
    {
      title: "Family Room Addition",
      category: "Additions",
      description: "400 sq ft family room addition seamlessly integrated with existing home structure, featuring vaulted ceilings and large windows.",
      imageDir: "/projects/additions/example1",
      mainImage: "1.webp",
      totalImages: 4,
      year: "2023"
    },
    {
      title: "Living Room Remodel",
      category: "Remodels",
      description: "Complete living room transformation with built-in entertainment center, new flooring, and updated lighting throughout.",
      imageDir: "/projects/remodels/example1",
      mainImage: "1.webp",
      totalImages: 3,
      year: "2023"
    },
    {
      title: "Decorative Concrete Patio",
      category: "Concrete",
      description: "Custom decorative concrete patio with stamped finish and integrated lighting for outdoor entertainment space.",
      imageDir: "/projects/concrete/example1",
      mainImage: "1.webp",
      totalImages: 2,
      year: "2023"
    },
    {
      title: "Multi-Level Deck",
      category: "Decks",
      description: "Two-level composite deck with built-in seating, outdoor kitchen area, and premium railing system.",
      imageDir: "/projects/decks/example1",
      mainImage: "1.webp",
      totalImages: 3,
      year: "2023"
    },
    {
      title: "Chef's Kitchen Renovation",
      category: "Kitchens",
      description: "Professional-grade kitchen renovation with commercial appliances, custom island, and walk-in pantry.",
      imageDir: "/projects/kitchens/example2",
      mainImage: "1.webp",
      totalImages: 3,
      year: "2022"
    },
    {
      title: "Guest Bathroom Remodel",
      category: "Bathrooms",
      description: "Complete guest bathroom remodel featuring modern vanity, subway tile, and updated plumbing fixtures.",
      imageDir: "/projects/bathrooms/example2",
      mainImage: "1.webp",
      totalImages: 5,
      year: "2022"
    },
    {
      title: "Home Office Addition",
      category: "Additions",
      description: "Custom home office addition with built-in shelving, natural lighting, and soundproofing for professional use.",
      imageDir: "/projects/additions/example2",
      mainImage: "1.webp",
      totalImages: 4,
      year: "2022"
    }
  ];

  const categories = ["All", "Kitchens", "Bathrooms", "Additions", "Remodels", "Concrete", "Decks"];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const openModal = (project) => {
    // Get all images dynamically from the project directory using totalImages
    const projectImages = getAllImagesFromProject(project.imageDir, project.totalImages);
    const projectWithImages = {
      ...project,
      images: projectImages
    };
    setSelectedProject(projectWithImages);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

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
              <span className="text-[#CC1A25] text-sm font-semibold tracking-widest uppercase">Our Work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Gallery
            </h1>
            <div className="w-24 h-1 bg-[#CC1A25] mx-auto mb-8"></div>
            <p className="text-xl max-w-2xl mx-auto text-white/80 leading-relaxed">
              Explore our portfolio of completed projects showcasing quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeFilter === category
                    ? "bg-[#000000] text-white" 
                    : "bg-white text-gray-700 hover:bg-[#000000] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 0.1}s`}}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`${project.imageDir}/${project.mainImage}`}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-[#000000]/10 text-[#000000] text-sm font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => openModal(project)}
                    className="text-[#000000] hover:text-[#374151] font-medium flex items-center gap-2"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                project: "Kitchen Renovation",
                quote: "Melanko Construction exceeded our expectations. Their attention to detail and professionalism made our kitchen renovation stress-free and beautiful."
              },
              {
                name: "Mike Rodriguez",
                project: "Office Buildout",
                quote: "The team delivered our office buildout on time and on budget. The quality of work is outstanding and we couldn't be happier with the results."
              },
              {
                name: "Jennifer Chen",
                project: "Custom Home",
                quote: "From foundation to finish, Melanko Construction handled every aspect of our custom home build with expertise and care. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <div className="flex text-[#CC1A25] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsGetStarted />

      <Footer />

      {/* Image Modal Carousel */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="relative max-w-6xl w-full max-h-full my-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] rounded-lg overflow-hidden">
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Project Info */}
            <div className="mt-3 sm:mt-4 text-center text-white px-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{selectedProject.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-2 sm:mb-3">{selectedProject.description}</p>
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <span className="bg-[#000000]/20 text-[#000000] px-2 sm:px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <span>{selectedProject.year}</span>
                <span>{currentImageIndex + 1} / {selectedProject.images.length}</span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {selectedProject.images.length > 1 && (
              <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4 px-2">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-[#000000]' : 'opacity-60 hover:opacity-80'
                    } transition-all`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
