import React, { useState, useEffect, useRef } from 'react';

// --- Icon Components (Simple SVGs - unchanged, kept for brevity) ---
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
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145l.005-.002.007-.003.017-.008a5.741 5.741 0 00.28-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.281-.145l.002-.001.006-.003.017-.008.006-.003a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.746 5.746 0 00.26-.133l.002-.001.006-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.741 5.741 0 00.281-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.28-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.281-.145l.002-.001.006-.003.017-.008.006-.003a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.746 5.746 0 00.26-.133l.002-.001.006-.003.018-.007.005-.002.007-.003.017-.008a5.746 5.746 0 00.26-.133l.005-.003.018-.007.005-.002.006-.003.017-.008a5.741 5.741 0 00.281-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.28-.145l.006-.003.018-.008.005-.002a5.741 5.741 0 00.281-.145c.094-.052.192-.101.287-.153A4.25 4.25 0 0014.25 16V8a4.25 4.25 0 00-4.25-4.25S5.75 3.75 5.75 8v8a4.25 4.25 0 003.941 4.233z" clipRule="evenodd" />
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

const CalendarDaysIcon = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" strokeWidth="1.0" stroke="currentColor" className={className}><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/></svg>
);

// --- Corrected/Verified SVG Icon Components for Stats Section ---
// BriefcaseIcon (Verified Heroicons Outline)
const BriefcaseIcon = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" strokeWidth="1.0" stroke="currentColor" className={className}><path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"/></svg>
);

// UserGroupIcon (Verified Heroicons Outline)
const UserGroupIcon = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" strokeWidth="1.0" stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
);


// WrenchScrewdriverIcon (Verified Heroicons Outline - this is stylistically consistent)
const WrenchScrewdriverIcon = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" strokeWidth="1.0" stroke="currentColor" className={className}><path d="M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"/></svg>
);

const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>;
const LinkedInIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>;
const YouTubeIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.504 2.504 0 01-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.504 2.504 0 01-1.768-1.768C1.998 15.22 2 12 2 12s0-3.22.42-4.814a2.504 2.504 0 011.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.75 15.562V8.438L15.028 12 9.75 15.562z" clipRule="evenodd" /></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>;
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;
const ChevronDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>;


// --- Image Placeholder ---
// Assuming images are in public/images/ folder
const ImagePlaceholder = ({ src, alt, className, fallbackText = "Image" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = (e) => {
    const errorMsg = `Error loading image: ${src}`;
    if (e && e.nativeEvent && e.nativeEvent.message) {
      console.error(`${errorMsg} - ${e.nativeEvent.message}`);
    } else {
      console.error(errorMsg);
    }
    // More descriptive fallback text
    const descriptiveFallback = alt && alt !== "Image" ? alt : fallbackText;
    setImgSrc(`https://placehold.co/600x400/cccccc/333333?text=${encodeURIComponent(descriptiveFallback)}`);
  };
  return <img src={imgSrc} alt={alt} className={className} onError={handleError} />;
};


// --- Navbar Component ---
function Navbar({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mouldsOpen, setMouldsOpen] = useState(false);
  const mouldsDropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Tool Room", page: "tool-room" },
    { 
      name: "Moulds", 
      page: "moulds", 
      dropdown: true, 
      subLinks: [
        { name: "Stack Mould", page: "moulds-stack" },
        { name: "Bi-Material Mould", page: "moulds-bimaterial" },
        { name: "Bi-Color Mould", page: "moulds-bicolor" },
        { name: "LSR Mould", page: "moulds-lsr" },
        { name: "Collapsible Core Moulds", page: "moulds-collapsible" },
        { name: "Unscrewing Moulds", page: "moulds-unscrewing" },
        { name: "Multi Cavity Cap Mould", page: "moulds-multicavitycap"},
      ] 
    },
    { name: "Impactful Products", page: "impactful-products" },
    { name: "Production", page: "production"},
    { name: "Services", page: "services" }, // Kept existing services page
    { name: "Team", page: "team" },
    { name: "Contact Us", page: "contact" },
  ];

  const handleNav = (page) => {
    setCurrentPage(page);
    setIsOpen(false); 
    setMouldsOpen(false);
  };

  const toggleMouldsDropdown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to document click listener
    setMouldsOpen(!mouldsOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mouldsDropdownRef.current && !mouldsDropdownRef.current.contains(event.target)) {
        setMouldsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mouldsDropdownRef]);


  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleNav('home')} className="flex items-center space-x-3">
              <ImagePlaceholder src="/images/logo.jpg" alt="YBM Techno Craft Logo" className="h-12 w-auto rounded-md" fallbackText="YBM" />
              <div>
                <span className="font-bold text-xl">YBM Techno Craft</span>
                <p className="text-xs text-sky-300">One Stop Solution for all your plastic needs</p>
              </div>
            </button>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="relative" ref={mouldsDropdownRef}>
                    <button
                      onClick={toggleMouldsDropdown}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center"
                    >
                      {link.name} <ChevronDownIcon />
                    </button>
                    {mouldsOpen && (
                      <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {link.subLinks.map(subLink => (
                            <button
                              key={subLink.name}
                              onClick={() => handleNav(subLink.page)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-600 hover:text-white transition-colors"
                              role="menuitem"
                            >
                              {subLink.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNav(link.page)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                )
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

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMouldsOpen(!mouldsOpen)} // Simple toggle for mobile
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors flex justify-between items-center"
                  >
                    {link.name} <ChevronDownIcon />
                  </button>
                  {mouldsOpen && (
                    <div className="pl-4">
                      {link.subLinks.map(subLink => (
                        <button
                          key={subLink.name}
                          onClick={() => handleNav(subLink.page)}
                          className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-slate-600 hover:text-white transition-colors"
                        >
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
              <button
                key={link.name}
                onClick={() => handleNav(link.page)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
              >
                {link.name}
              </button>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// --- Footer Component (Updated Gallery Images) ---
function Footer() {
  // Example: Use some product images for footer gallery
  const footerGalleryImages = [
    "/images/Other products/Utensils/utensils1.png",
    "/images/Other products/Flip top caps/Flip top caps 1.png",
    "/images/Other products/Baby pacifiers and bottles/Baby pacifiers and bottles 1.png",
    "/images/Bi material mould/Bi material mould 1.png",
    "/images/Stack mould/Stack mould 1.png",
    "/images/Health care/Health care 1.png",
  ];

  return (
    <footer className="bg-slate-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <ImagePlaceholder src="/images/logo.jpg" alt="YBM Footer Logo" className="h-10 w-auto rounded" fallbackText="YBM"/>
                <h4 className="text-xl font-semibold text-white">YBM Techno Craft</h4>
            </div>
            <p className="text-sm text-slate-400 mb-3">One Stop Solution for all your plastic needs.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><MapPinIcon className="mr-2 text-sky-400" /><span>123 Industrial Area, Pune, MH, India</span></li>
              <li className="flex items-center"><PhoneIcon className="mr-2 text-sky-400" /><span>+91 98765 43210</span></li>
              <li className="flex items-center"><EnvelopeIcon className="mr-2 text-sky-400" /><span>info@ybmtechnocraft.com</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Navigate to About');}} className="hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Navigate to Services');}} className="hover:text-sky-400 transition-colors">Services</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Navigate to Tool Room');}} className="hover:text-sky-400 transition-colors">Tool Room</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Navigate to Contact');}} className="hover:text-sky-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Explore Our Work</h4>
             <div className="grid grid-cols-3 gap-2">
                {footerGalleryImages.map((src, i) => (
                    <ImagePlaceholder key={i} src={src} alt={`Gallery image ${i+1}`} className="rounded-lg shadow-md hover:opacity-80 transition-opacity aspect-square object-cover" fallbackText={`Img ${i+1}`} />
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
          <p>&copy; {new Date().getFullYear()} YBM Techno Craft. All Rights Reserved. Inspired by <a href="https://html.design" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Free HTML Templates</a>.</p>
        </div>
      </div>
    </footer>
  );
}

// --- Page Components ---
function Home({ setCurrentPage }) {
  const services = [
    { title: "Injection Moulding", icon: "/images/Techno craft/Techno craft 1.png", items: ["Multi Cavity Injection-Mould", "Multi Color / Dual Injection-Mould", "Over Mould"] },
    { title: "Compression & Specialized Moulds", icon: "/images/Stack mould/Stack mould 1.png", items: ["Compression-Mould", "Stack Mould", "Auto Unscrewing-Mould"] },
    { title: "Casting & Blow Moulding", icon: "/images/Bi material mould/Bi material mould 2.png", items: ["Die Cast-Mould", "Extrusion Blow-Mould"] },
    { title: "LSR Moulding", icon: "/images/Tools/Liquid silicon mold.png", items: ["First Time In India” to Develop Liquid silicon mold (LSR)"] },
  ];

  const projects = [
    { src: "/images/Bi colour mould/Bi colour mould 1.png", alt: "Bi-Colour Mould", title: "Our Flagship Project", description: "Precision multi-cavity cap moulds for high volume production." },
    { src: "/images/Multi cavity cap mould/Multi cavity cap mould 1.png", alt: "Bi-Colour Mould", title: "Project Alpha", description: "Innovative bi-colour moulding solutions." },
    { src: "/images/Mirror cavity mould/Mirror cavity mould 1.png", alt: "Mirror Cavity Mould", title: "Project Beta", description: "Cutting-edge mirror finish cavity designs." },
    { src: "/images/Electrical item/Electrical item 1.png", alt: "Electrical Item Mould", title: "Project Gamma", description: "High-precision manufacturing for electrical components." },
    { src: "/images/Health care/Health care 1.png", alt: "Health Care Product Mould", title: "Project Delta", description: "Moulds for critical healthcare applications." },
  ];
  
  const stats = [
    { icon: CalendarDaysIcon, value: "16+", label: "Years of Business" },
    { icon: BriefcaseIcon, value: "55+", label: "Projects Delivered" },
    { icon: UserGroupIcon, value: "300+", label: "Satisfied Customers" },
    { icon: WrenchScrewdriverIcon, value: "10+", label: "Services" },
  ];

  const teamMembers = [
    { name: "Mr. Malappa", role: "Founder & CEO", img: "/images/Clients/C2.png", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] }, // Example client images for team
    { name: "Priya Sharma", role: "Engineering Head", img: "/images/Clients/C3.png", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] },
    { name: "Rajesh Kumar", role: "Operations Chief", img: "/images/Clients/C4.png", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] },
    { name: "Anjali Desai", role: "Marketing Expert", img: "/images/Clients/C5.png", social: [{fb:"#"}, {tw:"#"}, {li:"#"}] },
  ];

  const testimonials = [
    {
      quote: "YBM Techno Craft delivered beyond our expectations. Their precision and quality are unmatched. Highly recommended for any complex molding needs.",
      clientName: "John Doeman", // Corrected typo
      clientCompany: "Innovatech Ltd.",
      clientImage: "/images/Clients/C6.png"
    },
    {
      quote: "The team at YBM is incredibly knowledgeable and supportive. They guided us through the entire process, resulting in a fantastic product.",
      clientName: "Jane Smith",
      clientCompany: "Future Solutions Inc.",
      clientImage: "/images/Clients/C7.png"
    },
    {
      quote: "We've partnered with YBM on multiple projects, and they consistently provide top-tier service and exceptional mold manufacturing.",
      clientName: "Robert Brown",
      clientCompany: "Global Manufacturing Co.",
      clientImage: "/images/Clients/C8.png"
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
    const timer = setTimeout(nextTestimonial, 5000); 
    return () => clearTimeout(timer);
  }, [currentTestimonial, testimonials.length]);


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
              <ImagePlaceholder src="/images/Techno craft/Techno craft 1.png" alt="Precision Engineering Showcase" className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[450px]" fallbackText="Engineering" />
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
                <ImagePlaceholder src={service.icon} alt={`${service.title} icon`} className="h-20 w-20 mb-6 rounded-full shadow-md mx-auto object-contain p-2 bg-slate-100" fallbackText={service.title.substring(0,3)} />
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
                onClick={() => setCurrentPage('impactful-products')}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
              >
                View Impactful Products
              </button>
              <div className="mt-10">
                <ImagePlaceholder src={projects[0].src} alt={projects[0].alt} className="rounded-xl shadow-xl w-full h-auto max-h-[400px] object-cover" fallbackText={projects[0].alt} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8 md:mt-0">
              {projects.slice(1).map((project, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                  <ImagePlaceholder src={project.src} alt={project.alt} className="w-full h-48 md:h-60 object-cover transform group-hover:scale-110 transition-transform duration-300" fallbackText={project.alt} />
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
            {stats.map((stat, index) => {
              const IconComponent = stat.icon; // IconComponent is now the SVG component itself
              return (
                <div key={index} className="p-6">
                  {/* Wrapper for the icon to create the circular background and centering */}
                  <div className="h-20 w-20 mb-6 rounded-full shadow-lg mx-auto bg-white p-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-sky-600 group-hover:text-sky-500 transition-colors duration-300" /> {/* SVG icon */}
                  </div>
                  <div className="text-4xl font-bold text-sky-400">{stat.value}</div>
                  <p className="text-lg text-slate-300 mt-1">{stat.label}</p>
                </div>
              );
            })}
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
            <ImagePlaceholder src="/images/Techno craft/Techno craft 2.png" alt="YBM Team or Facility" className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px]" fallbackText="Our Story" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Services({ setCurrentPage }) {
   const serviceItems = [
    { title: "Injection Moulding", description: "High-precision multi-cavity, multi-color, and over-molding solutions.", icon: "/images/Multi cavity cap mould/Multi cavity cap mould 2.png", detailsLink: "injection-moulding" },
    { title: "Compression Moulds", description: "Durable and complex compression molds for various applications.", icon: "/images/Other products/Utensils/utensils1.png", detailsLink: "compression-moulds" }, // Example image
    { title: "Specialized Moulds", description: "Including stack molds and auto unscrewing molds for intricate parts.", icon: "/images/Stack mould/Stack mould 2.png", detailsLink: "specialized-moulds" },
    { title: "Die Cast Moulds", description: "Robust die-casting molds for metal components.", icon: "/images/Other products/Silicon covers/Silicon covers 1.png", detailsLink: "die-cast-moulds" }, // Example image
    { title: "Extrusion Blow Moulds", description: "Efficient blow molding solutions for hollow plastic parts.", icon: "/images/Other products/Baby pacifiers and bottles/Baby pacifiers and bottles 2.png", detailsLink: "extrusion-blow-moulds" },
    { title: "LSR Moulding", description: "Pioneering Liquid Silicone Rubber (LSR) molding in India.", icon: "/images/Tools/Liquid silicon mold.png", detailsLink: "lsr-moulding" },
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
              <ImagePlaceholder src={service.icon} alt={`${service.title} icon`} className="h-24 w-24 mb-6 rounded-full shadow-md object-contain p-2 bg-slate-100" fallbackText={service.title.substring(0,3)} />
              <h3 className="text-2xl font-semibold text-sky-600 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              <button 
                onClick={() => alert(`Details for ${service.title} coming soon!`)} 
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
    { name: "Mr. Malappa", role: "Founder & Chief Engineer", img: "/images/Clients/C10.png", bio: "With over 27 years of global experience, Mr. Malappa leads our design and manufacturing with unmatched expertise.", social: [{li:"#"}, {mail:"#"}] },
    { name: "Priya Sharma", role: "Head of Operations", img: "/images/Clients/C11.png", bio: "Priya ensures seamless execution of projects from start to finish, optimizing for quality and efficiency.", social: [{li:"#"}, {tw:"#"}] },
    { name: "Rajesh Kumar", role: "Lead Design Innovator", img: "/images/Clients/C12.png", bio: "Rajesh spearheads our R&D, constantly pushing the boundaries of mold technology.", social: [{li:"#"}, {fb:"#"}] },
    { name: "Anjali Desai", role: "Client Relations Manager", img: "/images/Clients/C13.png", bio: "Anjali is dedicated to understanding client needs and ensuring complete satisfaction.", social: [{li:"#"}, {mail:"#"}] },
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
                <p className="text-sm text-slate-600 mb-4 min-h-[60px]">{member.bio}</p> {/* Ensure consistent height */}
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
    if(formData.name && formData.email && formData.message) {
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    } else {
        // Replace alert with a more user-friendly notification if possible
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
            <div className="mb-8 p-4 bg-green-100 text-green-700 rounded-lg text-center shadow">
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
                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1340000000003!2d73.85674361489275!3d18.52043038740707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07700000001%3A0xaccadc57787925d6!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622110000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border:0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Google Maps Location of Pune"
                        className="min-h-[300px] md:min-h-[400px]"
                    ></iframe>
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

// --- Tool Room Page (Enhanced with Grid) ---
function ToolRoom({ setCurrentPage }) {
  const tools = [
    { name: "CNC Milling YMC 15 VMC 1020", img: "/images/Tools/CNC Milling YMC 15 VMC 1020.png", description: "High-speed precision CNC milling for complex geometries." },
    { name: "EDM Machine OSCARMAX", img: "/images/Tools/EDM Machine OSCARMAX.png", description: "Electrical Discharge Machining for intricate details and hard materials." },
    { name: "Lathe Machine", img: "/images/Tools/Lathe.png", description: "Versatile lathe machines for turning operations." },
    { name: "Surface Grinding Machine", img: "/images/Tools/Surface grinding.png", description: "Achieving fine finishes and precise dimensions." },
    { name: "Radial Drilling Machine", img: "/images/Tools/Radial drilling.png", description: "For drilling operations on various components." },
    { name: "Shibaura Injection Moulding Machine", img: "/images/Tools/Shibaura machine injection moulding.png", description: "Advanced injection moulding capabilities." },
    { name: "Liquid Silicon Mold Setup", img: "/images/Tools/Liquid silicon mold.png", description: "Specialized equipment for LSR moulding." },
    { name: "RPT Machine", img: "/images/Tools/RPT Machine.png", description: "Rapid Prototyping Technology for quick iterations." },
  ];

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Our State-of-the-Art Tool Room</h1>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Explore our advanced manufacturing facility, equipped with cutting-edge machinery to produce high-quality molds with precision and efficiency. We invest in the latest technology to ensure superior outcomes for all our clients.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <ImagePlaceholder 
                src={tool.img} 
                alt={tool.name} 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                fallbackText={tool.name} 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sky-700 mb-2">{tool.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
            <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors text-lg"
            >
                Inquire About Our Capabilities
            </button>
        </div>
      </div>
    </div>
  );
}

// --- Moulds Pages ---
const MouldItemCard = ({ title, description, images = [], setCurrentPage }) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
    {images.length > 0 && (
      <ImagePlaceholder src={images[0]} alt={title} className="w-full h-56 object-cover" fallbackText={title} />
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-sky-700 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">{description}</p>
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {images.slice(1, 4).map((img, idx) => (
            <ImagePlaceholder key={idx} src={img} alt={`${title} example ${idx+1}`} className="w-full h-20 object-cover rounded-md shadow" fallbackText="Mould"/>
          ))}
        </div>
      )}
       <button 
          onClick={() => setCurrentPage('contact')} // Or a specific enquiry page
          className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
        >
          Inquire About {title}
        </button>
    </div>
  </div>
);

function MouldsPage({ mouldType, setCurrentPage }) {
  const mouldData = {
    "moulds-stack": { 
        title: "Stack Moulds", 
        description: "Stack moulds increase productivity by incorporating multiple parting lines, effectively doubling or quadrupling the output of a conventional mould within the same machine and cycle time. Ideal for high-volume production of shallow parts.",
        images: ["/images/Stack mould/Stack mould 1.png", "/images/Stack mould/Stack mould 2.png"] 
    },
    "moulds-bimaterial": { 
        title: "Bi-Material Moulds", 
        description: "Bi-material (or two-shot) moulds allow for the injection of two different materials or colors in a single machine cycle. This process is used to create parts with enhanced functionality, aesthetics, or ergonomics.",
        images: ["/images/Bi material mould/Bi material mould 1.png", "/images/Bi material mould/Bi material mould 2.png", "/images/Bi material mould/Bi material mould 3.png", "/images/Bi material mould/Bi material mould 4.png"] 
    },
    "moulds-bicolor": { 
        title: "Bi-Color Moulds", 
        description: "Similar to bi-material moulds, bi-color moulds are designed to produce parts with two distinct colors. This is often used for aesthetic appeal or to differentiate features on a product.",
        images: ["/images/Bi colour mould/Bi colour mould 1.png", "/images/Bi colour mould/Bi colour mould 2.png", "/images/Bi colour mould/Bi colour mould 3.png"] 
    },
    "moulds-lsr": { 
        title: "LSR (Liquid Silicone Rubber) Moulds", 
        description: "LSR moulds are specialized for processing liquid silicone rubber, a material known for its flexibility, durability, and resistance to extreme temperatures. Widely used in medical, automotive, and consumer goods.",
        images: ["/images/Tools/Liquid silicon mold.png"] // Using tool image as placeholder
    },
    "moulds-collapsible": { 
        title: "Collapsible Core Moulds", 
        description: "Collapsible core technology is used for moulding parts with internal undercuts or threads. The core collapses to allow for easy ejection of the part, eliminating the need for complex side-actions.",
        images: ["/images/Other products/Utensils/utensils3.png", "/images/Other products/Flip top caps/Flip top caps 3.png"] // Example images
    },
    "moulds-unscrewing": { 
        title: "Unscrewing Moulds", 
        description: "Unscrewing moulds are designed for parts with internal or external threads, such as caps and closures. An automated unscrewing mechanism rotates the core or cavity to release the threaded part.",
        images: ["/images/Multi cavity cap mould/Multi cavity cap mould 3.png", "/images/Multi cavity cap mould/Multi cavity cap mould 4.png"] // Example images
    },
     "moulds-multicavitycap": { 
        title: "Multi Cavity Cap Moulds", 
        description: "Specialized for high-volume production of caps and closures, these moulds feature multiple cavities to maximize output and efficiency. Precision engineering ensures consistency across all cavities.",
        images: ["/images/Multi cavity cap mould/Multi cavity cap mould 1.png", "/images/Multi cavity cap mould/Multi cavity cap mould 2.png", "/images/Multi cavity cap mould/Multi cavity cap mould 3.png", "/images/Multi cavity cap mould/Multi cavity cap mould 4.png"]
    },
  };

  const currentMould = mouldData[mouldType];
  const allMoulds = Object.keys(mouldData).map(key => ({id: key, ...mouldData[key]}));


  if (!currentMould && mouldType !== 'moulds') { // If a specific mould type is invalid
    return (
        <div className="py-16 md:py-24 bg-slate-100 text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Mould Type Not Found</h1>
            <p className="text-slate-700 mb-8">The requested mould type could not be found. Please select from the available moulds.</p>
            <button onClick={() => setCurrentPage('moulds')} className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg">View All Moulds</button>
        </div>
    );
  }
  
  // Landing page for /moulds
  if (mouldType === 'moulds') {
    return (
      <div className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Our Specialized Moulds</h1>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            YBM Techno Craft excels in designing and manufacturing a diverse range of high-precision moulds. Explore our capabilities in various mould technologies tailored to your specific production needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allMoulds.map(mould => (
              <div key={mould.id} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {mould.images && mould.images.length > 0 && (
                  <ImagePlaceholder 
                    src={mould.images[0]} 
                    alt={mould.title} 
                    className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300" 
                    fallbackText={mould.title} 
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-sky-700 mb-2">{mould.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">{mould.description.substring(0, 100)}...</p>
                  <button 
                    onClick={() => setCurrentPage(mould.id)}
                    className="mt-auto w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


  // Detail page for a specific mould type
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => setCurrentPage('moulds')} className="mb-8 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-2 px-4 rounded-lg flex items-center transition-colors">
            <ChevronLeftIcon /> <span className="ml-1">Back to All Moulds</span>
        </button>
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-sky-700 mb-6">{currentMould.title}</h1>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">{currentMould.description}</p>
            
            {currentMould.images && currentMould.images.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold text-slate-800 mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentMould.images.map((img, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-md">
                                <ImagePlaceholder src={img} alt={`${currentMould.title} - Example ${index+1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" fallbackText={`${currentMould.title} ${index+1}`} />
                            </div>
                        ))}
                    </div>
                </>
            )}
             <div className="mt-12 text-center">
                <button 
                    onClick={() => setCurrentPage('contact')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-lg shadow-md transition-colors text-lg"
                >
                    Request a Quote for {currentMould.title}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}


// --- Impactful Products Page ---
function ImpactfulProductsPage({ setCurrentPage }) {
  const productCategories = [
    {
      title: "Automotive Industry: Mirror Cavity Housing Moulds",
      description: "Precision moulds for automotive components like mirror housings, demanding high surface finish and dimensional accuracy. Our expertise ensures robust moulds for complex automotive parts.",
      images: [
        "/images/Mirror cavity mould/Mirror cavity mould 1.png",
        "/images/Mirror cavity mould/Mirror cavity mould 2.png",
        "/images/Mirror cavity mould/Mirror cavity mould 3.png",
      ],
      altPrefix: "Automotive Mirror Mould"
    },
    {
      title: "Health Care Industry Products",
      description: "Manufacturing critical moulds for the health care sector, adhering to stringent quality and hygiene standards. Products include medical devices, diagnostic components, and pharmaceutical packaging.",
      images: [
        "/images/Health care/Health care 1.png",
        "/images/Health care/Health care 2.png",
        "/images/Health care/Health care 3.png",
        "/images/Health care/Health care 4.jpg",
      ],
      altPrefix: "Health Care Product Mould"
    },
    {
      title: "Electrical Moulds & Components",
      description: "Developing intricate moulds for various electrical items, including casings, connectors, and insulators. We focus on precision for safety and functionality in electrical applications.",
      images: [
        "/images/Electrical item/Electrical item 1.png",
        "/images/Electrical item/Electrical item 2.png",
      ],
      altPrefix: "Electrical Item Mould"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Our Impactful Products</h1>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          YBM Techno Craft is proud to contribute to various key industries by manufacturing high-quality, precision moulds for critical applications. Discover some of our work below.
        </p>

        <div className="space-y-16">
          {productCategories.map((category, catIndex) => (
            <section key={catIndex} className="bg-white p-8 md:p-10 rounded-xl shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-sky-700 mb-3">{category.title}</h2>
              <p className="text-md text-slate-600 mb-8 leading-relaxed">{category.description}</p>
              {category.images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images.map((imgSrc, imgIndex) => (
                    <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md group">
                      <ImagePlaceholder 
                        src={imgSrc} 
                        alt={`${category.altPrefix} ${imgIndex + 1}`} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        fallbackText={`${category.altPrefix} ${imgIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500">More images coming soon for this category.</p>
              )}
            </section>
          ))}
        </div>
         <div className="text-center mt-16">
            <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors text-lg"
            >
                Discuss Your Project Needs
            </button>
        </div>
      </div>
    </div>
  );
}

// --- Production Page ---
function ProductionPage({ setCurrentPage }) {
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Moulding & Production Excellence</h1>
          
          <div className="prose prose-lg max-w-none text-slate-700"> {/* Using Tailwind Typography for nice text styling */}
            <p>
              At YBM Techno Craft, our production capabilities are centered around delivering high-quality plastic components through precision moulding processes. We understand that the journey from a concept to a tangible product requires meticulous planning, advanced technology, and skilled execution.
            </p>
            
            <h2 className="text-2xl font-semibold text-sky-700 mt-8 mb-3">Our Moulding Philosophy</h2>
            <p>
              Our approach to moulding is built on a foundation of:
            </p>
            <ul>
              <li><strong>Precision:</strong> Utilizing state-of-the-art machinery and meticulously crafted moulds to ensure every part meets exact specifications.</li>
              <li><strong>Quality Control:</strong> Implementing rigorous quality checks at every stage of the production process, from raw material inspection to final product verification.</li>
              <li><strong>Efficiency:</strong> Optimizing cycle times and processes to deliver cost-effective solutions without compromising on quality.</li>
              <li><strong>Versatility:</strong> Handling a wide range of thermoplastic and thermosetting materials to suit diverse application needs.</li>
              <li><strong>Innovation:</strong> Continuously exploring new techniques and technologies to enhance our moulding capabilities and offer cutting-edge solutions.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-sky-700 mt-8 mb-3">Key Aspects of Our Production</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-slate-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-slate-800">Material Selection</h3>
                    <p className="text-sm">Expert guidance in choosing the right plastic material based on product requirements, including strength, flexibility, temperature resistance, and cost.</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-slate-800">Mould Maintenance</h3>
                    <p className="text-sm">Regular and preventative maintenance of moulds to ensure longevity and consistent part quality throughout the production lifecycle.</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-slate-800">Process Optimization</h3>
                    <p className="text-sm">Fine-tuning of moulding parameters (temperature, pressure, cycle time) for optimal part quality and production efficiency.</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-slate-800">Post-Moulding Operations</h3>
                    <p className="text-sm">Offering secondary operations such as assembly, printing, and finishing to provide a complete manufacturing solution.</p>
                </div>
            </div>
            
            <p className="mt-8">
              Whether you require high-volume production runs or specialized, intricate components, YBM Techno Craft has the expertise and infrastructure to meet your moulding needs. We partner with you from the initial design phase through to full-scale production, ensuring a seamless and successful outcome.
            </p>
          </div>

          <div className="text-center mt-10">
            <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors text-lg"
            >
                Get a Production Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// --- Main App Component ---
function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update document title based on page
    const pageTitle = currentPage.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.title = `YBM Techno Craft - ${pageTitle === 'Home' ? 'One Stop Solution for Plastic Needs' : pageTitle}`;

  }, [currentPage]);

  const renderPage = () => {
    if (currentPage.startsWith('moulds-')) {
      return <MouldsPage mouldType={currentPage} setCurrentPage={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'tool-room':
        return <ToolRoom setCurrentPage={setCurrentPage} />;
      case 'moulds': // Main moulds landing page
        return <MouldsPage mouldType="moulds" setCurrentPage={setCurrentPage} />;
      case 'impactful-products':
        return <ImpactfulProductsPage setCurrentPage={setCurrentPage} />;
      case 'production':
        return <ProductionPage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'team':
        return <Team setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />; // Fallback to home
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased"> {/* Added antialiased for smoother fonts */}
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
