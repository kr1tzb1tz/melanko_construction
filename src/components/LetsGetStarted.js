export default function LetsGetStarted() {
  return (
    <section className="py-20 bg-[#CC1A25] text-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      {/* Diagonal accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-0 w-1/3 h-full bg-gradient-to-r from-black/20 to-transparent skew-x-[12deg]"></div>
        <div className="absolute -right-20 top-0 w-1/4 h-full bg-gradient-to-l from-black/15 to-transparent skew-x-[-12deg]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Let's Get Started
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed">
            Quality you can trust. Licensed and insured. Local and family owned 40+ years.
          </p>
        </div>
      </div>
    </section>
  );
}
