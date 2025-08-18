// src/components/InternationalToursLight.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InternationalToursLight = () => {
  const [selectedDestination,] = useState('all');
  const [activePackage, setActivePackage] = useState<number | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  
  // Background animation states
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setBackgroundPosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const tourPackages = [
     {
      id: 1,
      name: "Bangkok Adventure",
      country: "thailand",
      duration: "5 days",
      description: "Experience Thailand's vibrant capital with golden temples and bustling markets.",
      highlights: ["Grand Palace & Wat Phra Kaew", "Chatuchak Weekend Market", "Khao San Road street food", "Chao Phraya river cruise"],
      image: "/images/thailand/Bangkok.jpg",
    },
    {
      id: 2,
      name: "Phuket Island Paradise",
      country: "thailand",
      duration: "6 days",
      description: "Thailand's largest island with stunning beaches and vibrant nightlife.",
      highlights: ["Patong, Kata & Karon beaches", "Phi Phi Island tour", "Big Buddha viewpoint", "Beach clubs and nightlife"],
      image: "/images/thailand/phuket.jpg",
    },
    {
      id: 3,
      name: "Krabi Nature Escape",
      country: "thailand",
      duration: "5 days",
      description: "Dramatic limestone cliffs and crystal-clear waters in southern Thailand.",
      highlights: ["Railay Beach & Phra Nang Cave", "4 Island Tour", "Emerald Pool & Hot Springs", "Rock climbing adventures"],
      image: "/images/thailand/krabi.jpg",
    },
    {
      id: 4,
      name: "Chiang Mai Cultural Journey",
      country: "thailand",
      
      duration: "5 days",
      description: "Northern Thailand's cultural capital surrounded by mountains and temples.",
      highlights: ["Doi Suthep Temple", "Ethical elephant sanctuaries", "Night Bazaar shopping", "Yi Peng Lantern Festival (Nov)"],
      image: "/images/thailand/ChiangMai.jpg",
    },
    {
      id: 5,
      name: "Chiang Rai Temple Tour",
      country: "thailand",
      duration: "4 days",
      description: "Discover unique modern temples in Thailand's mystical northern region.",
      highlights: ["Wat Rong Khun (White Temple)", "Black House Museum", "Golden Triangle viewpoint", "Tea plantation visits"],
      image: "/images/thailand/ChiangRai.jpg",
    },
    {
      id: 6,
      name: "Ayutthaya Historical Exploration",
      country: "thailand",
      duration: "3 days",
      description: "UNESCO World Heritage Site with ancient temple ruins near Bangkok.",
      highlights: ["Wat Mahathat (Buddha head in tree)", "Bicycle tour of ruins", "Historical river cruise", "Photo opportunities at sunset"],
      image: "/images/thailand/Ayutthaya.jpg",
    },
    {
      id: 7,
      name: "Pattaya Beach Getaway",
      country: "thailand",
      duration: "4 days",
      description: "Beach destination with family fun and vibrant nightlife near Bangkok.",
      highlights: ["Jomtien Beach & Coral Island", "Walking Street nightlife", "Nong Nooch Tropical Garden", "Tiffany Cabaret Show"],
      image: "/images/thailand/Pattaya.jpg",
    },
    {
      id: 8,
      name: "Pai Mountain Retreat",
      country: "thailand",
      duration: "4 days",
      description: "Peaceful mountain town in Northern Thailand loved by backpackers.",
      highlights: ["Pai Canyon exploration", "Bamboo Bridge walk", "Hot springs relaxation", "Scooter tours to viewpoints"],
      image: "/images/pai.jpg",
    },
    {
      id: 9,
      name: "Sukhothai Historical Park",
      country: "thailand",
      
      duration: "4 days",
      description: "Explore the ruins of Thailand's first capital at this UNESCO site.",
      highlights: ["Sukhothai Historical Park temples", "Bike through ancient city", "Light and Sound show", "Golden hour photography"],
      image: "/images/thailand/Sukhothai.jpg",
    },
    {
      id: 10,
      name: "Koh Samui Luxury Escape",
      country: "thailand",
      
      duration: "6 days",
      description: "Stylish island known for luxury resorts and wellness retreats.",
      highlights: ["Spa & wellness experiences", "Chaweng & Lamai beaches", "Big Buddha Temple", "Ang Thong Marine Park tour"],
      image: "/images/thailand/Kohsamui.jpg",
    },
  ];

  const filteredPackages = selectedDestination === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.country === selectedDestination);

  // Calculate background gradients based on mouse position
  const radialGradient = `radial-gradient(circle at ${backgroundPosition.x * 100}% ${backgroundPosition.y * 100}%, rgba(125, 211, 252, 0.1) 0%, rgba(14, 165, 233, 0.05) 20%, transparent 70%)`;
  const linearGradient = `linear-gradient(to bottom, rgba(8, 47, 73, 0.05) 0%, rgba(8, 47, 73, 0.1) 100%)`;

  return (
    <div 
      className="min-h-screen text-gray-900 py-16 px-4 sm:px-8 relative overflow-hidden"
      style={{
        background: `${radialGradient}, ${linearGradient}, radial-gradient(ellipse at top, rgba(199, 210, 254, 0.1), transparent), radial-gradient(ellipse at bottom, rgba(103, 232, 249, 0.1), transparent)`,
      }}
    >
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-700">
              Thailand
            </span> Tour Packages
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover ancient wonders, vibrant cultures, and divine experiences with our premium spiritual tour packages
          </motion.p>
        </motion.div>

        {/* Tour Packages */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`rounded-2xl overflow-hidden border border-gray-200/30 bg-white/80 backdrop-blur-lg shadow-xl ${
                activePackage === pkg.id ? 'ring-2 ring-cyan-500 scale-[1.02]' : ''
              } transition-all duration-300 relative`}
              whileHover={{ y: -10 }}
              layout
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Hover effect overlay */}
              {hoveredPackage === pkg.id && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
              
              <div className="relative h-60 overflow-hidden">
                <AnimatePresence>
                  <motion.img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ scale: 1.1 }}
                  />
                </AnimatePresence>
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {pkg.duration}
                </motion.div>
              </div>
              
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent"
                  whileHover={{ x: 5 }}
                >
                  {pkg.name}
                </motion.h3>
                
                <p className="text-gray-700 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-cyan-600 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Package Highlights
                  </h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-cyan-500 mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.button
                    className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-medium text-white hover:from-cyan-500 hover:to-blue-600 transition-all shadow-md flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Book Now
                  </motion.button>
                  
                  <button 
                    className="text-cyan-600 hover:text-cyan-700 flex items-center gap-1 font-medium"
                    onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                  >
                    {activePackage === pkg.id ? 'Show Less' : 'Learn More'}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${activePackage === pkg.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <AnimatePresence>
                  {activePackage === pkg.id && (
                    <motion.div 
                      className="mt-6 pt-6 border-t border-gray-200/30"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-bold text-cyan-600 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        What's Included
                      </h4>
                      <ul className="grid grid-cols-2 gap-3 text-sm mb-4">
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          4-5 Star Accommodation
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          All Transportation
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Daily Breakfast
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Guided Tours
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          24/7 Support
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Entry Fees Included
                        </li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {pkg.country === 'india' ? (
                          <>
                            <span className="px-3 py-1 bg-purple-100/80 backdrop-blur-sm text-purple-800 rounded-full text-sm">Spiritual Journey</span>
                            <span className="px-3 py-1 bg-yellow-100/80 backdrop-blur-sm text-yellow-800 rounded-full text-sm">Pilgrimage</span>
                            <span className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm">Cultural Experience</span>
                          </>
                        ) : (
                          <>
                            <span className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm">Cultural Experience</span>
                            <span className="px-3 py-1 bg-cyan-100/80 backdrop-blur-sm text-cyan-800 rounded-full text-sm">Local Cuisine</span>
                            <span className="px-3 py-1 bg-amber-100/80 backdrop-blur-sm text-amber-800 rounded-full text-sm">Adventure</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            whileInView={{ 
              backgroundSize: ['100%', '200%'],
              backgroundPosition: ['0%', '100%']
            }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-purple-500 to-blue-700 animate-gradient">
              Traveler Experiences
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                tour: "Kedarnath Pilgrimage",
                comment: "The trek to Kedarnath was challenging but spiritually rewarding. The helicopter option made it accessible for my elderly parents.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                tour: "Varanasi Spiritual Experience",
                comment: "The Ganga Aarti at Dashashwamedh Ghat was a transcendental experience. Our guide helped us understand the deep spiritual significance.",
                rating: 5
              },
              {
                name: "Amit Patel",
                tour: "Golden Temple Pilgrimage",
                comment: "The Langar experience was humbling. Seeing thousands of people being served with love and devotion was truly inspiring.",
                rating: 5
              },
              {
                name: "Sunita Reddy",
                tour: "Tirupati Balaji Darshan",
                comment: "The divine atmosphere at Tirumala is indescribable. The annadanam (free meal) service is incredibly well-organized.",
                rating: 5
              },
              {
                name: "Vikram Singh",
                tour: "Vaishno Devi Yatra",
                comment: "The trek through the mountains was serene and beautiful. The cave darshan was a deeply spiritual experience.",
                rating: 5
              },
              {
                name: "Meera Desai",
                tour: "Somnath Jyotirlinga Darshan",
                comment: "The sound of waves near the temple creates a divine atmosphere. The light and sound show beautifully narrates the temple's history.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/30 shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-cyan-600 text-sm">{testimonial.tour}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
            whileInView={{ 
              backgroundSize: ['100%', '200%'],
              backgroundPosition: ['0%', '100%']
            }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-purple-500 to-blue-700 animate-gradient">
              Ready for Your Spiritual Journey?
            </span>
          </motion.h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Join thousands of pilgrims who've experienced divine journeys with Spiritual India Tours
          </p>

          <motion.a
            href="/images/brochure.pdf"
            download="Spiritual_India_Brochure.pdf"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-lg text-white shadow-lg shadow-cyan-500/30 hover:from-cyan-500 hover:to-blue-600 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-3">
              Download Brochure
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </motion.a>
          
          <p className="mt-4 text-gray-600">
            Flexible booking options • 24/7 customer support • Devotional assistance
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InternationalToursLight;