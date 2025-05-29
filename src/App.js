import React, { useState, useEffect } from 'react';

// --- Icon Components (Simple SVGs) ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145l.005-.002.007-.003.017-.008a5.741 5.741 0 00.28-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.281-.145l.002-.001.006-.003.017-.008.006-.003a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.746 5.746 0 00.26-.133l.002-.001.006-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.741 5.741 0 00.281-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.28-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.281-.145l.002-.001.006-.003.017-.008.006-.003a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.746 5.746 0 00.26-.133l.002-.001.006-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.741 5.741 0 00.281-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.28-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.281-.145l.002-.001.006-.003.017-.008.006-.003a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.746 5.746 0 00.26-.133l.002-.001.006-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.741 5.741 0 00.281-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.28-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.281-.145c.094-.052.192-.101.287-.153A4.25 4.25 0 0014.25 16V8a4.25 4.25 0 00-4.25-4.25S5.75 3.75 5.75 8v8a4.25 4.25 0 003.941 4.233z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.001a1.5 1.5 0 01-2.252 1.737l-1.07-1.071a.5.5 0 00-.708 0l-1.286 1.286a.5.5 0 000 .708l1.071 1.07a1.5 1.5 0 01-1.737 2.253l-3.001-.715A1.5 1.5 0 012 11.852V3.5zm16.5-.5a1.5 1.5 0 00-1.5-1.5h-1.148a1.5 1.5 0 00-1.465 1.175l-.716 3.001a1.5 1.5 0 002.252 1.737l1.07-1.071a.5.5 0 01.708 0l1.286 1.286a.5.5 0 010 .708l-1.071 1.07a1.5 1.5 0 001.737 2.253l3.001-.715A1.5 1.5 0 0018 11.852V3.5z" clipRule="evenodd" />
     <path d="M12.94 11.06a2.25 2.25 0 013.182 0l.001.001c.93.93.93 2.438 0 3.368l-.001.001a2.25 2.25 0 01-3.182 0l-.001-.001a2.25 2.25 0 010-3.182l.001-.001zM7.06 5.06a2.25 2.25 0 013.182 0l.001.001c.93.93.93 2.438 0 3.368l-.001.001a2.25 2.25 0 01-3.182 0l-.001-.001a2.25 2.25 0 010-3.182l.001-.001z" />
  </svg>
);

const EnvelopeIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>;
const LinkedInIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>;
const YouTubeIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.504 2.504 0 01-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.504 2.504 0 01-1.768-1.768C1.998 15.22 2 12 2 12s0-3.22.42-4.814a2.504 2.504 0 011.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.75 15.562V8.438L15.028 12 9.75 15.562z" clipRule="evenodd" /></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>;
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;


// --- Image Placeholder ---
const ImagePlaceholder = ({ src, alt, className, fallbackText = "Image" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = () => {
    setImgSrc(`https://placehold.co/600x400/cccccc/333333?text=${encodeURIComponent(fallbackText)}`);
  };
  return <img src={imgSrc} alt={alt} className={className} onError={handleError} />;
};


// --- Navbar Component ---
function Navbar({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Tool Room", page: "tool-room" },
    { name: "Services", page: "services" },
    { name: "Team", page: "team" },
    { name: "Contact Us", page: "contact" },
  ];

  const handleNav = (page) => {
    setCurrentPage(page);
    setIsOpen(false); // Close menu on navigation
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleNav('home')} className="flex items-center space-x-2">
              <ImagePlaceholder src="https://placehold.co/150x50/ffffff/333333?text=YBM+Logo" alt="YBM Techno Craft Logo" className="h-10 w-auto rounded" fallbackText="YBM Logo" />
            </button>
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.page)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.page)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">About YBM Techno Craft</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><MapPinIcon className="mr-2 text-sky-400" /><span>Locations</span></li>
              <li className="flex items-center"><PhoneIcon className="mr-2 text-sky-400" /><span>+01 9876543210</span></li>
              <li className="flex items-center"><EnvelopeIcon className="mr-2 text-sky-400" /><span>demo@gmail.com</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <p className="text-sm leading-relaxed">
              From mold design to manufacturing and delivery, we provide end-to-end services for all your plastic molding requirements.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Explore</h4>
             <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                    <ImagePlaceholder key={i} src={`https://placehold.co/100x100/4A5568/E2E8F0?text=Gallery${i+1}`} alt={`Gallery image ${i+1}`} className="rounded-lg shadow-md hover:opacity-80 transition-opacity" fallbackText={`Img ${i+1}`} />
                ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <input type="email" className="w-full p-3 rounded-md bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm" placeholder="Enter your email" />
            <button className="mt-3 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-md transition-colors text-sm">Subscribe</button>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><span className="sr-only">Facebook</span><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><span className="sr-only">Twitter</span><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><span className="sr-only">LinkedIn</span><LinkedInIcon /></a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><span className="sr-only">YouTube</span><YouTubeIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} YBM Techno Craft. All Rights Reserved. Inspired by <a href="https://html.design" className="text-sky-400 hover:underline">Free HTML Templates</a>.</p>
        </div>
      </div>
    </footer>
  );
}

// --- Page Components ---
function Home({ setCurrentPage }) {
  const services = [
    { title: "Injection Moulding", icon: "https://placehold.co/80x80/38BDF8/FFFFFF?text=IM", items: ["Multi Cavity Injection-Mould", "Multi Color / Dual Injection-Mould", "Over Mould"] },
    { title: "Compression & Specialized Moulds", icon: "https://placehold.co/80x80/6366F1/FFFFFF?text=CSM", items: ["Compression-Mould", "Stack Mould", "Auto Unscrewing-Mould"] },
    { title: "Casting & Blow Moulding", icon: "https://placehold.co/80x80/EC4899/FFFFFF?text=CBM", items: ["Die Cast-Mould", "Extrusion Blow-Mould"] },
    { title: "LSR Moulding", icon: "https://placehold.co/80x80/F59E0B/FFFFFF?text=LSR", items: ["First Time In India” to Develop Liquid silicon mold (LSR)"] },
  ];

  const projects = [
    { src: "https://placehold.co/600x400/1F2937/9CA3AF?text=Project+Main", alt: "Main Project Image", title: "Our Flagship Project", description: "Detailed description of this significant project and its impact." },
    { src: "https://placehold.co/300x200/374151/9CA3AF?text=Project+A", alt: "Project A", title: "Project Alpha", description: "Innovative solution for industry X." },
    { src: "https://placehold.co/300x200/4B5563/9CA3AF?text=Project+B", alt: "Project B", title: "Project Beta", description: "Cutting-edge design for Y." },
    { src: "https://placehold.co/300x200/6B7280/9CA3AF?text=Project+C", alt: "Project C", title: "Project Gamma", description: "High-precision manufacturing." },
    { src: "https://placehold.co/300x200/9CA3AF/1F2937?text=Project+D", alt: "Project D", title: "Project Delta", description: "Sustainable material usage." },
  ];
  
  const stats = [
    { icon: "https://placehold.co/60x60/38BDF8/FFFFFF?text=Yrs", value: "16+", label: "Years of Business" },
    { icon: "https://placehold.co/60x60/6366F1/FFFFFF?text=Prj", value: "55+", label: "Projects Delivered" },
    { icon: "https://placehold.co/60x60/EC4899/FFFFFF?text=Cust", value: "300+", label: "Satisfied Customers" },
    { icon: "https://placehold.co/60x60/F59E0B/FFFFFF?text=Srv", value: "10+", label: "Services" },
  ];

  const teamMembers = [
    { name: "Alex Johnson", role: "Lead Designer", img: "https://placehold.co/200x200/1F2937/9CA3AF?text=Alex", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] },
    { name: "Maria Garcia", role: "Engineering Head", img: "https://placehold.co/200x200/374151/9CA3AF?text=Maria", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] },
    { name: "Ken Adams", role: "Operations Chief", img: "https://placehold.co/200x200/4B5563/9CA3AF?text=Ken", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] },
    { name: "Sarah Lee", role: "Marketing Expert", img: "https://placehold.co/200x200/6B7280/9CA3AF?text=Sarah", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] },
  ];

  const testimonials = [
    {
      quote: "YBM Techno Craft delivered beyond our expectations. Their precision and quality are unmatched. Highly recommended for any complex molding needs.",
      clientName: "John Doem",
      clientCompany: "Innovatech Ltd.",
      clientImage: "../images/Clients/C1.png"
    },
    {
      quote: "The team at YBM is incredibly knowledgeable and supportive. They guided us through the entire process, resulting in a fantastic product.",
      clientName: "Jane Smith",
      clientCompany: "Future Solutions Inc.",
      clientImage: "https://placehold.co/100x100/6B7280/1F2937?text=JS"
    },
    {
      quote: "We've partnered with YBM on multiple projects, and they consistently provide top-tier service and exceptional mold manufacturing.",
      clientName: "Robert Brown",
      clientCompany: "Global Manufacturing Co.",
      clientImage: "https://placehold.co/100x100/4B5563/1F2937?text=RB"
    }
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 5000); // Auto-scroll every 5 seconds
    return () => clearTimeout(timer);
  }, [currentTestimonial]);


  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Welcome to YBM Techno Craft</h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Leading innovation in plastic and plastic mold manufacturing since 2008. Expertise, state-of-the-art technology, and a commitment to quality define us.
              </p>
              <ul className="space-y-3 text-md opacity-90 mb-8">
                  <li className="flex items-start"><span className="text-green-300 mr-2 mt-1">&#10004;</span><strong>Expertise and Experience:</strong> Global exposure ensuring cutting-edge solutions.</li>
                  <li className="flex items-start"><span className="text-green-300 mr-2 mt-1">&#10004;</span><strong>Advanced Technology:</strong> Precision and quality in every product.</li>
                  <li className="flex items-start"><span className="text-green-300 mr-2 mt-1">&#10004;</span><strong>Comprehensive Solutions:</strong> End-to-end services for plastic molding.</li>
              </ul>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-100 transition-colors text-lg"
              >
                Get a Quote
              </button>
            </div>
            <div className="mt-8 md:mt-0">
              <ImagePlaceholder src={require(`./images/Clients/C1.png`)} alt="Precision Engineering" className="rounded-xl shadow-2xl" fallbackText="Engineering" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Delivering excellence in a wide range of molding services, tailored to meet diverse industrial needs with precision and innovation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <ImagePlaceholder src={service.icon} alt={`${service.title} icon`} className="h-16 w-16 mb-6 rounded-full shadow-md mx-auto" fallbackText={service.title.substring(0,3)} />
                <h3 className="text-xl font-semibold mb-3 text-center text-sky-600">{service.title}</h3>
                <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                  {service.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Projects</h2>
              <p className="text-lg text-slate-600 mb-8">
                Explore a portfolio of our successful projects, showcasing our capability in delivering high-quality molds and plastic components across various industries.
              </p>
              <button 
                onClick={() => setCurrentPage('tool-room')}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
              >
                View Tool Room
              </button>
              <div className="mt-10">
                <ImagePlaceholder src={projects[0].src} alt={projects[0].alt} className="rounded-xl shadow-xl w-full" fallbackText={projects[0].alt} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8 md:mt-0">
              {projects.slice(1).map((project, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                  <ImagePlaceholder src={project.src} alt={project.alt} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" fallbackText={project.alt} />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <SearchIcon />
                    <h3 className="text-lg font-semibold text-white mt-2 text-center">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <ImagePlaceholder src={stat.icon} alt={`${stat.label} icon`} className="h-16 w-16 mb-4 rounded-full shadow-md mx-auto bg-white p-2" fallbackText={stat.label.substring(0,3)} />
                <div className="text-4xl font-bold text-sky-400">{stat.value}</div>
                <p className="text-lg text-slate-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Team and Experts</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Meet the dedicated professionals behind YBM Techno Craft, driving innovation and excellence in every project.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <ImagePlaceholder src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md object-cover" fallbackText={member.name.substring(0,1)} />
                <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                <p className="text-sky-600 mb-3">{member.role}</p>
                <div className="flex justify-center space-x-3 mt-3">
                   {member.social.map((s, i) => (
                     <a key={i} href={Object.values(s)[0]} className="text-slate-500 hover:text-sky-500 transition-colors">
                       {Object.keys(s)[0] === 'fb' && <FacebookIcon />}
                       {Object.keys(s)[0] === 'tw' && <TwitterIcon />}
                       {Object.keys(s)[0] === 'li' && <LinkedInIcon />}
                     </a>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="relative max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl">
            <div className="text-center">
              <ImagePlaceholder 
                src={testimonials[currentTestimonial].clientImage} 
                alt={testimonials[currentTestimonial].clientName} 
                className="w-24 h-24 rounded-full mx-auto mb-6 shadow-md object-cover"
                fallbackText={testimonials[currentTestimonial].clientName.substring(0,1)}
              />
              <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <h4 className="text-lg font-semibold text-sky-600">{testimonials[currentTestimonial].clientName}</h4>
              <p className="text-sm text-slate-500">{testimonials[currentTestimonial].clientCompany}</p>
            </div>
            <button 
              onClick={prevTestimonial} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-slate-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-slate-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon />
            </button>
            <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-sky-500' : 'bg-slate-300 hover:bg-slate-400'} transition-colors`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function About({ setCurrentPage }) {
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">About YBM Techno Craft</h1>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Founded in 2008 by Mr. Malappa, a visionary mold design engineer with over 27 years of global experience, YBM Techno Craft stands as a beacon of excellence in plastic and plastic mold manufacturing. Our journey began with a commitment to precision, innovation, and unparalleled quality.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              We leverage state-of-the-art technology and a deep understanding of engineering principles to deliver solutions that not only meet but exceed client expectations. Our expertise spans across diverse industries, both in India and internationally.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At YBM Techno Craft, we believe in building lasting relationships through consistent delivery of superior products and dedicated customer service. Our passion for engineering and commitment to excellence drives us forward.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
            >
              Connect With Us
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <ImagePlaceholder src="https://placehold.co/600x700/1F2937/9CA3AF?text=Our+Story" alt="YBM Team or Facility" className="rounded-xl shadow-2xl object-cover w-full h-full" fallbackText="Our Story" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Services({ setCurrentPage }) {
   const serviceItems = [
    { title: "Injection Moulding", description: "High-precision multi-cavity, multi-color, and over-molding solutions.", icon: "https://placehold.co/80x80/38BDF8/FFFFFF?text=IM", detailsLink: "injection-moulding" },
    { title: "Compression Moulds", description: "Durable and complex compression molds for various applications.", icon: "https://placehold.co/80x80/6366F1/FFFFFF?text=CM", detailsLink: "compression-moulds" },
    { title: "Specialized Moulds", description: "Including stack molds and auto unscrewing molds for intricate parts.", icon: "https://placehold.co/80x80/A78BFA/FFFFFF?text=SM", detailsLink: "specialized-moulds" },
    { title: "Die Cast Moulds", description: "Robust die-casting molds for metal components.", icon: "https://placehold.co/80x80/EC4899/FFFFFF?text=DCM", detailsLink: "die-cast-moulds" },
    { title: "Extrusion Blow Moulds", description: "Efficient blow molding solutions for hollow plastic parts.", icon: "https://placehold.co/80x80/F59E0B/FFFFFF?text=EBM", detailsLink: "extrusion-blow-moulds" },
    { title: "LSR Moulding", description: "Pioneering Liquid Silicone Rubber (LSR) molding in India.", icon: "https://placehold.co/80x80/10B981/FFFFFF?text=LSR", detailsLink: "lsr-moulding" },
  ];

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Our Comprehensive Services</h1>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          YBM Techno Craft offers a full spectrum of mold design and manufacturing services, utilizing cutting-edge technology and decades of expertise to bring your concepts to reality.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1">
              <ImagePlaceholder src={service.icon} alt={`${service.title} icon`} className="h-20 w-20 mb-6 rounded-full shadow-md" fallbackText={service.title.substring(0,3)} />
              <h3 className="text-2xl font-semibold text-sky-600 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              <button 
                onClick={() => alert(`Details for ${service.title} coming soon!`)} // Placeholder for actual navigation or modal
                className="mt-auto bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-6 rounded-lg transition-colors text-sm"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Team({ setCurrentPage }) {
 const teamMembersData = [
    { name: "Mr. Malappa", role: "Founder & Chief Engineer", img: "https://placehold.co/250x250/1E3A8A/FFFFFF?text=MM", bio: "With over 27 years of global experience, Mr. Malappa leads our design and manufacturing with unmatched expertise.", social: [{li:"#"}, {mail:"#"}] },
    { name: "Priya Sharma", role: "Head of Operations", img: "https://placehold.co/250x250/3B82F6/FFFFFF?text=PS", bio: "Priya ensures seamless execution of projects from start to finish, optimizing for quality and efficiency.", social: [{li:"#"}, {tw:"#"}] },
    { name: "Rajesh Kumar", role: "Lead Design Innovator", img: "https://placehold.co/250x250/10B981/FFFFFF?text=RK", bio: "Rajesh spearheads our R&D, constantly pushing the boundaries of mold technology.", social: [{li:"#"}, {fb:"#"}] },
    { name: "Anjali Desai", role: "Client Relations Manager", img: "https://placehold.co/250x250/F59E0B/FFFFFF?text=AD", bio: "Anjali is dedicated to understanding client needs and ensuring complete satisfaction.", social: [{li:"#"}, {mail:"#"}] },
  ];
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Meet Our Expert Team</h1>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          The strength of YBM Techno Craft lies in our dedicated and experienced team, committed to delivering excellence and innovation in every endeavor.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <ImagePlaceholder src={member.img} alt={member.name} className="w-full h-64 object-cover" fallbackText={member.name.substring(0,1)} />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-sky-700 mb-1">{member.name}</h3>
                <p className="text-md text-indigo-500 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 mb-4 h-20 overflow-y-auto">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                   {member.social.map((s, i) => (
                     <a key={i} href={Object.values(s)[0]} className="text-slate-500 hover:text-sky-600 transition-colors">
                       {Object.keys(s)[0] === 'fb' && <FacebookIcon />}
                       {Object.keys(s)[0] === 'tw' && <TwitterIcon />}
                       {Object.keys(s)[0] === 'li' && <LinkedInIcon />}
                       {Object.keys(s)[0] === 'mail' && <EnvelopeIcon />}
                     </a>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact({ setCurrentPage }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if(formData.name && formData.email && formData.message) {
        console.log("Form submitted:", formData);
        // Here you would typically send the data to a backend
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        // Optional: Reset submission message after some time
        setTimeout(() => setIsSubmitted(false), 5000);
    } else {
        alert("Please fill in all required fields (Name, Email, Message).");
    }
  };

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          We're here to help with your plastic molding needs. Reach out to us for inquiries, quotes, or to discuss your next project.
        </p>
        
        {isSubmitted && (
            <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                Thank you for your message! We'll get back to you soon.
            </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-700 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number (Optional)</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full p-3 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors text-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl mb-8">
                <h2 className="text-2xl font-semibold text-slate-700 mb-6">Our Location</h2>
                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    {/* Placeholder for Google Maps. 
                        To embed a real map: 
                        1. Go to Google Maps.
                        2. Search for your location.
                        3. Click "Share" then "Embed a map".
                        4. Copy the HTML and paste it here, ensuring to adjust width/height as needed.
                        Note: You might need a Google Maps API key for more advanced usage.
                    */}
                    <div className="bg-slate-300 flex items-center justify-center h-64 md:h-96">
                        <p className="text-slate-500 text-center p-4">
                            Google Map will be displayed here. <br/>
                            (Example: YBM Techno Craft, Pune, Maharashtra, India)
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl">
                <h3 className="text-xl font-semibold text-slate-700 mb-4">Contact Details</h3>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center"><MapPinIcon className="w-6 h-6 mr-3 text-sky-600"/>123 Industrial Area, Pune, Maharashtra, 411001, India</li>
                    <li className="flex items-center"><PhoneIcon className="w-6 h-6 mr-3 text-sky-600"/>+91 98765 43210</li>
                    <li className="flex items-center"><EnvelopeIcon className="w-6 h-6 mr-3 text-sky-600"/>info@ybmtechnocraft.com</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolRoom({ setCurrentPage }) {
  const slides = [
    { title: "CNC Milling Center", description: "High-precision CNC milling for complex parts. State-of-the-art machinery ensures accuracy and efficiency.", img: "https://placehold.co/800x500/1F2937/9CA3AF?text=CNC+Milling" },
    { title: "EDM Machines", description: "Electrical Discharge Machining for intricate shapes and hard materials. Perfect for detailed mold components.", img: "https://placehold.co/800x500/374151/9CA3AF?text=EDM+Machines" },
    { title: "Grinding & Finishing", description: "Precision grinding and surface finishing for superior mold quality and longevity.", img: "https://placehold.co/800x500/4B5563/9CA3AF?text=Grinding+Station" },
    { title: "Quality Inspection Lab", description: "Advanced metrology equipment for rigorous quality checks at every stage of manufacturing.", img: "https://placehold.co/800x500/6B7280/9CA3AF?text=QA+Lab" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

   useEffect(() => {
    const timer = setTimeout(nextSlide, 7000); // Auto-scroll every 7 seconds
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Our State-of-the-Art Tool Room</h1>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Explore our advanced manufacturing facility, equipped with cutting-edge machinery to produce high-quality molds with precision and efficiency.
        </p>

        <div className="relative w-full max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'}`}
            >
              <ImagePlaceholder src={slide.img} alt={slide.title} className="w-full h-[300px] md:h-[500px] object-cover" fallbackText={slide.title} />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-end p-6 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{slide.title}</h2>
                <p className="text-sm md:text-lg text-slate-200 mb-4 max-w-xl">{slide.description}</p>
                <button 
                    onClick={() => setCurrentPage('contact')}
                    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors text-sm md:text-base"
                >
                    Inquire Now
                </button>
              </div>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-20 bg-white/50 hover:bg-white/80 text-slate-800 p-2 md:p-3 rounded-full shadow-md transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-20 bg-white/50 hover:bg-white/80 text-slate-800 p-2 md:p-3 rounded-full shadow-md transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRightIcon />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-sky-500' : 'bg-white/50 hover:bg-white/80'} transition-colors`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// --- Main App Component ---
function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Default page

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'tool-room':
        return <ToolRoom setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'team':
        return <Team setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
