import { Mail, DollarSign, Users, Award } from 'lucide-react';
import Footer from '../../components/Footer';
import LetsGetStarted from '../../components/LetsGetStarted';

export default function Employment() {
  const benefits = [
    {
      icon: <DollarSign size={32} />,
      title: "Competitive Pay",
      description: "Above-market wages with performance bonuses and overtime opportunities"
    },
    {
      icon: <Users size={32} />,
      title: "Team Environment",
      description: "Collaborative workplace culture with supportive team members"
    },
    {
      icon: <Award size={32} />,
      title: "Career Growth",
      description: "Professional development opportunities and advancement pathways"
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
              <span className="text-[#CC1A25] text-sm font-semibold tracking-widest uppercase">Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Employment
            </h1>
            <div className="w-24 h-1 bg-[#CC1A25] mx-auto mb-8"></div>
            <p className="text-xl max-w-2xl mx-auto text-white/80 leading-relaxed">
              Build your career with a team committed to quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work at Melanko Construction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work at Melanko Construction?
            </h2>
            <p className="text-xl text-gray-600">
              Join a company that values its employees and invests in their success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-[#CC1A25] mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Career Opportunities
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            If you are either looking to join a group of high quality men or are someone who strives to be the best in the industry, send your resume and contact info to:
          </p>
          <a
            href="mailto:info@melankoconstruction.com"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-[#CC1A25] hover:text-[#b3151f] transition-colors duration-300"
          >
            <Mail size={28} className="flex-shrink-0" />
            info@melankoconstruction.com
          </a>
        </div>
      </section>

      <LetsGetStarted />

      <Footer />
    </div>
  );
}
