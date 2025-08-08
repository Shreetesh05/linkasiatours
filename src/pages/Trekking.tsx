// src/components/Trekking.tsx
import { Phone, Mail } from 'lucide-react';
import React, { useState } from 'react';

type Difficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';

type ItineraryItem = {
  day: number;
  title: string;
  description: string;
  altitude: string;
  trekkingTime: string;
};

type TrekPackage = {
  id: number;
  name: string;
  duration: string;
  difficulty: Difficulty;
  price: string;
  highlight: string;
  description: string;
  bestSeason: string;
  maxAltitude: string;
  image: string;
  itinerary: ItineraryItem[];
  colorClass: string;
};

const Trekking: React.FC = () => {
  const [activeTrek, setActiveTrek] = useState<number>(1);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const trekPackages: TrekPackage[] = [
    {
      id: 1,
      name: "Everest Base Camp Trek",
      duration: "14 Days",
      difficulty: "Challenging",
      price: "",
      highlight: "Walk in the footsteps of legends",
      description: "Experience the world's most iconic trek through the heart of the Khumbu region, culminating at the base of the world's highest peak.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "5,545m (Kala Patthar)",
      // FIXED: Corrected image URL
      image: "/images/everesttrek.jpeg",
      colorClass: "from-blue-600 to-cyan-500",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Fly to Lukla, trek to Phakding", description: "Scenic mountain flight to Lukla (2,840m), trek to Phakding through Sherpa villages", altitude: "2,652m", trekkingTime: "3-4 hours" },
        { day: 3, title: "Namche Bazaar", description: "Trek to Namche Bazaar, the gateway to Everest, with first views of Everest", altitude: "3,440m", trekkingTime: "5-6 hours" },
        { day: 4, title: "Acclimatization Day", description: "Hike to Everest View Hotel for panoramic views, explore Namche market", altitude: "3,440m", trekkingTime: "3-4 hours" },
        { day: 5, title: "Tengboche Monastery", description: "Trek to Tengboche, visit the famous monastery with views of Ama Dablam", altitude: "3,860m", trekkingTime: "5-6 hours" },
        { day: 6, title: "Dingboche", description: "Continue through rhododendron forests to Dingboche village", altitude: "4,410m", trekkingTime: "5-6 hours" },
        { day: 7, title: "Acclimatization Hike", description: "Hike to Nagarjun Hill for panoramic mountain views", altitude: "5,100m", trekkingTime: "4-5 hours" },
        { day: 8, title: "Lobuche", description: "Trek to Lobuche with views of Khumbu Glacier", altitude: "4,940m", trekkingTime: "5-6 hours" },
        { day: 9, title: "Gorak Shep to Everest Base Camp", description: "Trek to Gorak Shep, then to Everest Base Camp", altitude: "5,364m", trekkingTime: "7-8 hours" },
        { day: 10, title: "Kala Patthar and descent", description: "Sunrise hike to Kala Patthar (5,545m), then descend to Pheriche", altitude: "5,545m", trekkingTime: "7-8 hours" },
      ]
    },
    {
      id: 2,
      name: "Annapurna Circuit Trek",
      duration: "17 Days",
      difficulty: "Challenging",
      price: "",
      highlight: "Thorong La Pass (5,416m)",
      description: "Classic Himalayan trek circling the Annapurna Massif, crossing high mountain passes, and experiencing diverse cultures from Hindu villages to Tibetan-influenced highlands.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "5,416m (Thorong La Pass)",
      image: "images/annapurna.jpg",
      colorClass: "from-blue-500 to-indigo-600",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Drive to Besisahar & Bhulbhule", description: "Scenic drive through foothills to trek starting point", altitude: "840m", trekkingTime: "7-8 hours drive" },
        { day: 3, title: "Trek to Jagat", description: "Follow Marsyangdi River through subtropical forests and rice terraces", altitude: "1,300m", trekkingTime: "5-6 hours" },
        { day: 4, title: "Trek to Dharapani", description: "Enter Manang district, passing waterfalls and suspension bridges", altitude: "1,960m", trekkingTime: "6-7 hours" },
        { day: 5, title: "Trek to Chame", description: "First views of Annapurna II and Lamjung Himal", altitude: "2,710m", trekkingTime: "5-6 hours" },
        { day: 6, title: "Trek to Pisang", description: "Enter alpine zone with dramatic valley views", altitude: "3,300m", trekkingTime: "5-6 hours" },
        { day: 7, title: "Trek to Manang", description: "High route via Ghyaru village with panoramic Himalayan views", altitude: "3,540m", trekkingTime: "6-7 hours" },
        { day: 8, title: "Acclimatization in Manang", description: "Explore Gangapurna Lake, ice cave, and practice altitude adjustment", altitude: "3,540m", trekkingTime: "3-4 hours" },
        { day: 9, title: "Trek to Yak Kharka", description: "Gradual ascent through juniper forests", altitude: "4,110m", trekkingTime: "4-5 hours" },
        { day: 10, title: "Trek to Thorong Phedi", description: "Base camp preparation for pass crossing", altitude: "4,450m", trekkingTime: "3-4 hours" },
        { day: 11, title: "Cross Thorong La Pass", description: "Early start to summit pass (5,416m), descend to Muktinath", altitude: "5,416m / 3,800m", trekkingTime: "8-10 hours" },
        { day: 12, title: "Trek to Marpha", description: "Descend through Kali Gandaki Valley to apple capital", altitude: "2,670m", trekkingTime: "5-6 hours" },
        { day: 13, title: "Trek to Ghasa", description: "Enter subtropical zone with waterfalls and cliffside trails", altitude: "2,010m", trekkingTime: "5-6 hours" },
        { day: 14, title: "Trek to Tatopani", description: "Relax in natural hot springs", altitude: "1,190m", trekkingTime: "5-6 hours" },
        { day: 15, title: "Trek to Ghorepani", description: "Steep climb through rhododendron forests", altitude: "2,860m", trekkingTime: "7-8 hours" },
        { day: 16, title: "Poon Hill Sunrise & Drive to Pokhara", description: "Morning hike to Poon Hill (3,210m), descend to Nayapul, drive to Pokhara", altitude: "1,400m", trekkingTime: "3-4 hours trek + 2hr drive" },
        { day: 17, title: "Fly to Kathmandu", description: "Scenic flight return to Kathmandu", altitude: "1,400m", trekkingTime: "N/A" }
      ]
    },
    {
      id: 3,
      name: "Langtang Valley Trek",
      duration: "10 Days",
      difficulty: "Moderate",
      price: "",
      highlight: "Himalayan hidden gem",
      description: "Explore the beautiful Langtang valley just north of Kathmandu, known as the 'valley of glaciers' with rich Tamang culture.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "5,000m (Tserko Ri)",
      // FIXED: Corrected image URL
      image: "/images/langtang.jpg",
      colorClass: "from-amber-500 to-orange-600",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Drive to Syabrubesi", description: "Scenic drive through hills and terraced fields to Syabrubesi", altitude: "1,550m", trekkingTime: "7-8 hours drive" },
        { day: 3, title: "Trek to Lama Hotel", description: "Trek along Langtang Khola through forests to Lama Hotel", altitude: "2,470m", trekkingTime: "5-6 hours" },
        { day: 4, title: "Langtang Village", description: "Continue trek to Langtang village with improving mountain views", altitude: "3,430m", trekkingTime: "5-6 hours" },
        { day: 5, title: "Kyanjin Gompa", description: "Short trek to Kyanjin Gompa with visit to ancient monastery", altitude: "3,870m", trekkingTime: "3-4 hours" },
        { day: 6, title: "Acclimatization Day", description: "Explore the area with optional hikes to Kyanjin Ri or Langshisha Kharka", altitude: "3,870m", trekkingTime: "4-5 hours" },
        { day: 7, title: "Tserko Ri Summit", description: "Early morning hike to Tserko Ri (5,000m) for panoramic mountain views", altitude: "5,000m", trekkingTime: "7-8 hours" },
        { day: 8, title: "Return to Lama Hotel", description: "Descend through rhododendron forests back to Lama Hotel", altitude: "2,470m", trekkingTime: "6-7 hours" },
        { day: 9, title: "Trek to Syabrubesi", description: "Final descent to Syabrubesi along the Langtang River", altitude: "1,550m", trekkingTime: "5-6 hours" },
        { day: 10, title: "Drive to Kathmandu", description: "Scenic drive back to Kathmandu with farewell dinner", altitude: "1,400m", trekkingTime: "7-8 hours drive" },
      ]
    },
    {
      id: 4,
      name: "Manaslu Circuit Trek",
      duration: "16 Days",
      difficulty: "Strenuous",
      price: "",
      highlight: "Forbidden kingdom adventure",
      description: "Traverse around the world's eighth highest mountain through remote trails, Tibetan-influenced villages, and over the challenging Larkya La pass.",
      bestSeason: "Mar-May, Sep-Nov",
      maxAltitude: "5,106m (Larkya La)",
      image: "images/manaslu.webp",
      colorClass: "from-violet-600 to-purple-700",
      itinerary: [
        { day: 1, title: "Arrival in Kathmandu", description: "Arrival at Tribhuvan International Airport, transfer to hotel, and trek briefing", altitude: "1,400m", trekkingTime: "N/A" },
        { day: 2, title: "Drive to Soti Khola", description: "Scenic drive through the Nepalese countryside to Soti Khola", altitude: "710m", trekkingTime: "8-9 hours drive" },
        { day: 3, title: "Trek to Machha Khola", description: "Trek along the Budhi Gandaki river through subtropical forests", altitude: "930m", trekkingTime: "6-7 hours" },
        { day: 4, title: "Jagat", description: "Trek through terraced fields and Gurung villages to Jagat", altitude: "1,410m", trekkingTime: "6-7 hours" },
        { day: 5, title: "Deng", description: "Enter the Manaslu Conservation Area, trek to Deng village", altitude: "1,860m", trekkingTime: "6-7 hours" },
        { day: 6, title: "Namrung", description: "Trek through pine forests with improving mountain views to Namrung", altitude: "2,630m", trekkingTime: "6-7 hours" },
        { day: 7, title: "Lho Gaon", description: "Trek to Lho village with spectacular views of Manaslu", altitude: "3,180m", trekkingTime: "4-5 hours" },
        { day: 8, title: "Samagaon", description: "Trek to Samagaon, the main village in the region", altitude: "3,530m", trekkingTime: "3-4 hours" },
        { day: 9, title: "Acclimatization Day", description: "Hike to Manaslu Base Camp or Birendra Tal (glacial lake)", altitude: "4,400m", trekkingTime: "5-6 hours" },
        { day: 10, title: "Samdo", description: "Trek to Tibetan border village of Samdo", altitude: "3,860m", trekkingTime: "4-5 hours" },
        { day: 11, title: "Dharamsala", description: "Trek to Dharamsala, the last stop before Larkya La pass", altitude: "4,460m", trekkingTime: "4-5 hours" },
        { day: 12, title: "Larkya La Pass to Bimthang", description: "Cross Larkya La pass (5,106m), descend to Bimthang", altitude: "5,106m / 3,720m", trekkingTime: "8-9 hours" },
        { day: 13, title: "Trek to Tilije", description: "Descend through rhododendron forests to Tilije village", altitude: "2,300m", trekkingTime: "5-6 hours" },
        { day: 14, title: "Dharapani to Besishahar", description: "Trek to Dharapani, drive to Besishahar", altitude: "760m", trekkingTime: "3-4 hours trek + 3hr drive" },
        { day: 15, title: "Drive to Kathmandu", description: "Scenic drive back to Kathmandu through the Himalayan foothills", altitude: "1,400m", trekkingTime: "6-7 hours drive" },
        { day: 16, title: "Departure", description: "Transfer to airport for departure", altitude: "N/A", trekkingTime: "N/A" },
      ]
    }
  ];

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const activePackage = trekPackages.find(trek => trek.id === activeTrek) || trekPackages[0];

  // FIXED: Added type for active border classes
  type ActiveBorderClasses = {
    [key: number]: string;
  };

  const activeBorderClasses: ActiveBorderClasses = {
    1: 'border-blue-600 ring-blue-200',
    2: 'border-blue-500 ring-blue-200',
    3: 'border-amber-500 ring-amber-200',
    4: 'border-violet-600 ring-violet-200'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 pt-52">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 mb-4">
            Himalayan Trekking Adventures
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the world's most spectacular trails with our expertly crafted trekking packages
          </p>
        </div>

        {/* Trek Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trekPackages.map((trek) => (
            <div 
              key={trek.id}
              onClick={() => setActiveTrek(trek.id)}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 border-2 ${
                activeTrek === trek.id 
                  ? `${activeBorderClasses[trek.id]} shadow-xl ring-4` 
                  : 'border-gray-100'
              }`}
            >
              <div className={`h-2 ${trek.colorClass.replace('from', 'bg-gradient-to-r from')}`}></div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">{trek.name}</h3>
                  <span className={`text-lg font-bold ${trek.colorClass.replace('from', 'bg-gradient-to-r from')} bg-clip-text text-transparent`}>
                    {trek.price}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-600 mr-3">{trek.duration}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    trek.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    trek.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    trek.difficulty === 'Challenging' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {trek.difficulty}
                  </span>
                </div>
                <p className="mt-3 text-gray-600 text-sm italic">{trek.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Trek Display */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          {/* Fixed Header Section - Now using actual image */}
          <div className="relative w-full">
  <div className="relative w-full h-[500px] md:h-[600px]">
    <img 
      src={activePackage.image} 
      alt={activePackage.name} 
      className="w-full h-full "
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
    <div className="absolute inset-0 z-10 flex items-end p-6 md:p-8">
      <div className="text-white">
        <h2 className="text-3xl md:text-4xl font-bold">{activePackage.name}</h2>
        <p className="text-xl mt-2 max-w-2xl">{activePackage.highlight}</p>
      </div>
    </div>
  </div>
</div>

          
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trek Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {activePackage.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Duration</div>
                    <div className="font-bold text-lg">{activePackage.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Difficulty</div>
                    <div className="font-bold text-lg">{activePackage.difficulty}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Max Altitude</div>
                    <div className="font-bold text-lg">{activePackage.maxAltitude}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-gray-500 text-sm">Best Season</div>
                    <div className="font-bold text-lg">{activePackage.bestSeason}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Itinerary</h3>
                <div className="space-y-3">
                  {activePackage.itinerary.map((day) => (
                    <div 
                      key={day.day} 
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div 
                        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                        onClick={() => toggleDay(day.day)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <span className="font-bold text-blue-700">D{day.day}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{day.title}</div>
                            <div className="text-sm text-gray-600">{day.altitude} • {day.trekkingTime}</div>
                          </div>
                        </div>
                        <svg 
                          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${expandedDay === day.day ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {expandedDay === day.day && (
                        <div className="p-4 bg-white animate-fadeIn">
                          <p className="text-gray-700">{day.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="sticky top-6 space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          placeholder="+977-9841234567"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Address</label>
                        <input
                          type="text"
                          placeholder="Kathmandu, Nepal"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <button className="w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 transform transition hover:scale-[1.02] mt-4">
                        Submit Details
                      </button>

                      <div className="text-center text-sm text-gray-500 mt-4">
                        <p>We’ll contact you shortly after submission.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Professional trekking guide</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">All necessary permits</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Teahouse accommodations</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Three meals per day</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">First aid kit and oxygen</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Airport transfers</span>
                      </li>
                    </ul>
                  </div>
                   <div className="border-t border-b border-dashed border-gray-300 py-6 px-4 text-center space-y-4">
      <div className="bg-gray-100 py-2 rounded">
        <h3 className="text-lg font-semibold text-gray-900">Got a Question?</h3>
      </div>

      <p className="text-gray-700 text-sm">
        Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.
      </p>
      <ul className="space-y-3">
        <li className='font-bold text-blue-900'>
          <span>Nepal Office</span>
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
            <Phone size={18} />
            <span>+977-01-5912660</span>
          </div>
        </li>
        <li className='font-bold text-blue-900'>
          <span>Korea Office </span>
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
            <Phone size={18} />
            <span>+82-010-5877-5512</span>
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
        <Mail size={18} />
        <span>infolinkasiatours@gmail.com</span>
      </div>
    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-sm border border-blue-100">
            <div className="text-blue-600 text-3xl mb-3">⛰️</div>
            <h3 className="font-bold text-xl mb-3">Why Trek with Us?</h3>
            <p className="text-gray-700">
              With over 15 years of experience, we provide the safest and most memorable trekking experiences in Nepal. 
              Our guides are certified by the Nepal Mountaineering Association and trained in wilderness first aid.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-sm border border-green-100">
            <div className="text-green-600 text-3xl mb-3">🌱</div>
            <h3 className="font-bold text-xl mb-3">Sustainable Trekking</h3>
            <p className="text-gray-700">
              We're committed to eco-friendly practices: carrying out all waste, using solar power where possible, 
              and supporting local communities. A portion of every trek fee goes to trail maintenance and local schools.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 shadow-sm border border-purple-100">
            <div className="text-purple-600 text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-xl mb-3">Safety First</h3>
            <p className="text-gray-700">
              Your safety is our priority. All treks include comprehensive insurance, satellite communication devices, 
              portable oxygen, and guides trained in altitude sickness recognition and emergency evacuation procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trekking;