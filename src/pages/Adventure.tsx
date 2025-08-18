// src/components/NepalAdventures.tsx
import React, { useState,} from 'react';
import { motion } from 'framer-motion';


const NepalAdventures: React.FC = () => {
  const [activeTour, setActiveTour] = useState<number | null>(null);
  
  
 

  const tours = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      description: "Conquer the world's highest mountain trails with sherpa guides through the legendary Khumbu Valley.",
      highlights: ["Kala Patthar viewpoint", "Tengboche Monastery", "Namche Bazaar"],
      image: "/images/adventure/Everestbasecamp.jpg",
      difficulty: "Challenging",
      elevation: "5,364m"
    },
    {
      id: 2,
      title: "Annapurna Circuit",
      description: "Journey through diverse landscapes from lush rice terraces to the majestic Thorong La pass.",
      highlights: ["Poon Hill sunrise", "Muktinath Temple", "Marpha village"],
      image: "/images/adventure/annapurnacircuit.jpg",
      difficulty: "Moderate to Challenging",
      elevation: "5,416m"
    },
    {
      id: 3,
      title: "Skydiving over Himalayas",
      description: "Experience the ultimate adrenaline rush with a tandem skydive above the world's highest peaks.",
      highlights: ["15,000ft freefall", "Panoramic mountain views", "Professional instructors"],
      image:"/images/adventure/skydiving.jpg",
      difficulty: "Extreme",
      elevation: "15,000ft"
    },
    {
      id: 4,
      title: "Chitwan Jungle Safari",
      description: "Spot rhinos, tigers and crocodiles in Nepal's first national park on thrilling jungle excursions.",
      highlights: ["Elephant safari", "Tharu cultural show", "Bird watching"],
      image:"/images/adventure/chitwanjunglesafari.jpg",
      difficulty: "Easy",
      elevation: "415m"
    },
    {
      id: 5,
      title: "Pokhara Paragliding",
      description: "Soar above Phewa Lake with panoramic Himalayan views on a tandem paragliding adventure.",
      highlights: ["30min flight", "Professional pilots", "GoPro footage included"],
      image:"/images/adventure/pokharaparagliding.jpg",
      difficulty: "Moderate",
      elevation: "1,600m"
    },
    {
      id: 6,
      title: "Bhote Koshi Bungee",
      description: "Plunge 160m into the Bhote Koshi gorge on one of the world's highest bungee jumps.",
      highlights: ["160m freefall", "Spectacular gorge views", "Professional safety"],
      image:"/images/adventure/bhotekoshibungeejump.jpg",
      difficulty: "Extreme",
      elevation: "1,600m"
    },
    {
      id: 7,
      title: "Upper Mustang Trek",
      description: "Explore the forbidden kingdom with its unique Tibetan culture and lunar landscapes.",
      highlights: ["Lo Manthang", "Ancient monasteries", "Cave dwellings"],
      image:"/images/adventure/uppermustang.jpg",
      difficulty: "Moderate",
      elevation: "3,840m"
    },
    {
      id: 8,
      title: "Trishuli River Rafting",
      description: "Navigate thrilling rapids through scenic gorges on Nepal's most popular rafting river.",
      highlights: ["Class III-IV rapids", "Riverside camping", "Jungle scenery"],
      difficulty: "Moderate",
      image:"/images/adventure/trishuli.jpg",
      elevation: "415m"
    },
     {
      id: 8,
      title: "Pokhara Hot air Ballon ",
      description: "Navigate thrilling rapids through scenic gorges on Nepal's most popular rafting river.",
      highlights: ["Class III-IV rapids", "", "Mountain scenery"],
      difficulty: "Moderate",
      image:"/images/adventure/hotairballon.jpg",
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 mb-4">
            NEPAL ADVENTURES
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
           Experience the Himalayas like never before with our expertly crafted expeditions. From trekking to paragliding, we offer the ultimate adventure tours in Nepal.
          </p>
        </div>

        {/* Featured tour */}
        

        {/* All adventures grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            <span className="border-b-4 border-blue-600 pb-2">HIMALAYAN ADVENTURES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-xs font-bold px-3 py-1 rounded-full text-white">
                    {tour.difficulty}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{tour.title}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                      onClick={() => setActiveTour(activeTour === index ? null : index)}
                    >
                      {activeTour === index ? "Show Less" : "Details"}
                    </button>
                  </div>
                  
                  {activeTour === index && (
                    <motion.div 
                      className="mt-4 p-4 bg-blue-50 rounded-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <h4 className="font-bold mb-2 text-blue-700">HIGHLIGHTS:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        {tour.highlights.map((hl, i) => (
                          <li key={i} className="mb-1">{hl}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NepalAdventures;