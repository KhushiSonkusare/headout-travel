"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, Star, MapPin } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [activeCountry, setActiveCountry] = useState(0);
  const [cardRotation, setCardRotation] = useState(0);

  const countries = [
    {
      name: "Japan",
      image: "/japan-mount-fuji-cherry-blossoms.jpg",
      description: "Discover the land of the rising sun with its ancient temples, modern cities, and breathtaking natural beauty.",
      buttonColor: "bg-red-500 hover:bg-red-600",
      buttonText: "EXPLORE JAPAN",
      sideImages: [
        { src: "/seoul-south-korea-traditional-palace-architecture.jpg", alt: "Tokyo" },
        { src: "/kelingking-beach-nusa-penida-cliff.jpg", alt: "Kyoto" },
        { src: "/crystal-bay-nusa-penida-turquoise-water.jpg", alt: "Osaka" }
      ]
    },
    {
      name: "Indonesia", 
      image: "/nusa-penida-indonesia-tropical-island-aerial-view.jpg",
      description: "Explore thousands of islands with pristine beaches, volcanic landscapes, and rich cultural heritage.",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
      buttonText: "EXPLORE INDONESIA",
      sideImages: [
        { src: "/kelingking-beach-nusa-penida-cliff.jpg", alt: "Bali" },
        { src: "/crystal-bay-nusa-penida-turquoise-water.jpg", alt: "Java" },
        { src: "/thailand-phi-phi-islands-tropical-beach.jpg", alt: "Sumatra" }
      ]
    },
    {
      name: "Thailand",
      image: "/thailand-phi-phi-islands-tropical-beach.jpg", 
      description: "Experience the perfect blend of tropical paradise, ancient temples, and vibrant street culture.",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      buttonText: "EXPLORE THAILAND",
      sideImages: [
        { src: "/seoul-south-korea-traditional-palace-architecture.jpg", alt: "Bangkok" },
        { src: "/kelingking-beach-nusa-penida-cliff.jpg", alt: "Chiang Mai" },
        { src: "/crystal-bay-nusa-penida-turquoise-water.jpg", alt: "Phuket" }
      ]
    }
  ];

  const cards = [
    {
      src: "/dark-volcanic-landscape-with-red-lava.jpg",
      title: "Selected process from",
      subtitle: "the last month"
    },
    {
      src: "/otherworldly-golden-marble-texture.jpg",
      title: "Otherworldly places",
      subtitle: "located on Earth"
    },
    {
      src: "/abstract-blue-and-gold-soundwaves-visualization.jpg",
      title: "Visualizing distorted",
      subtitle: "sound waves"
    },
    {
      src: "/purple-pink-abstract-marble-texture.jpg",
      title: "Abstract textures",
      subtitle: "and patterns"
    },
    {
      src: "/japan-mount-fuji-cherry-blossoms.jpg",
      title: "Cherry blossoms",
      subtitle: "in Japan"
    }
  ];

  // Infinite auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCardRotation(prev => (prev + 1) % cards.length);
    }, 2500); // Rotate every 2.5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#ffffff] rounded flex items-center justify-center">
            <span className="text-[#000000] font-bold text-sm">H</span>
          </div>
          <span className="text-xl font-semibold">headout</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-[#b2b2b2] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#b2b2b2] transition-colors">
            Events
          </a>
          <a href="#" className="hover:text-[#b2b2b2] transition-colors">
            About
          </a>
          <a href="#" className="hover:text-[#b2b2b2] transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Ready to Head Out?</h1>
        <p className="text-xl text-[#b2b2b2] mb-16 max-w-2xl mx-auto">
          Find and book your perfect experience in under 30 seconds
        </p>

        {/* Search Bar */}
        <div className="mb-20 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, experiences, or activities..."
                className="w-full px-6 py-4 pl-14 pr-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-all duration-300 backdrop-blur-sm">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* 3D Experience Cards with Infinite Rotation */}
        <div className="relative mb-20 h-[500px] flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Card Container with 3D Perspective */}
                <div className="relative w-full h-full flex justify-center items-center" style={{ transformStyle: 'preserve-3d' }}>
                  {cards.map((card, index) => {
                    // Calculate the position based on rotation
                    const rotatedIndex = (index - cardRotation + cards.length) % cards.length;
                    
                    // Position configurations for 5 cards
                    const positions = [
                      { 
                        x: -500, 
                        y: 40, 
                        z: -300, 
                        rotateX: -5,
                        rotateY: 45,
                        rotateZ: -2,
                        scale: 0.8,
                        opacity: 0.7
                      }, // Far left
                      { 
                        x: -285, 
                        y: 20, 
                        z: -150, 
                        rotateX: -3,
                        rotateY: 25,
                        rotateZ: -1,
                        scale: 0.85,
                        opacity: 0.85
                      }, // Left
                      { 
                        x: 0, 
                        y: 0, 
                        z: 100, 
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        scale: 1,
                        opacity: 1
                      }, // Center - straight forward
                      { 
                        x: 285, 
                        y: 20, 
                        z: -150, 
                        rotateX: -3,
                        rotateY: -25,
                        rotateZ: 1,
                        scale: 0.85,
                        opacity: 0.85
                      }, // Right
                      { 
                        x: 500, 
                        y: 40, 
                        z: -300, 
                        rotateX: -5,
                        rotateY: -45,
                        rotateZ: 2,
                        scale: 0.8,
                        opacity: 0.7
                      }  // Far right
                    ];
                    
                    const pos = positions[rotatedIndex];
                    const zIndex = rotatedIndex === 2 ? 10 : rotatedIndex === 1 || rotatedIndex === 3 ? 5 : 1;
                    
                    return (
                      <div
                        key={index}
                        className="absolute transition-all duration-1000 ease-in-out"
                        style={{
                          transform: `
                            translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) 
                            rotateX(${pos.rotateX}deg) 
                            rotateY(${pos.rotateY}deg) 
                            rotateZ(${pos.rotateZ}deg) 
                            scale(${pos.scale})
                          `,
                          zIndex: zIndex,
                          opacity: pos.opacity,
                          transformStyle: 'preserve-3d',
                          transformOrigin: 'center center'
                        }}
                      >
                        <div 
                          className="relative w-[300px] h-[420px] rounded-[24px] overflow-hidden shadow-2xl"
                          style={{
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden'
                          }}
                        >
                          <img
                            src={card.src}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="absolute bottom-6 left-6 text-left">
                            <p className="text-base font-semibold text-white mb-1">{card.title}</p>
                            <p className="text-base font-medium text-white/90">{card.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-12 px-6 py-16 max-w-6xl mx-auto">
        <div className="text-left">
          <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center mb-4">
            <Check className="w-6 h-6 text-[#000000]" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Only the finest</h3>
          <p className="text-[#b2b2b2] leading-relaxed">
            At headout, you only find the best. We do the hard work so you don't have to.
          </p>
        </div>

        <div className="text-left">
          <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-[#000000]" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Greed is good</h3>
          <p className="text-[#b2b2b2] leading-relaxed">
            With quality, you also get lowest prices, last-minute availability and 24x7 support.
          </p>
        </div>

        <div className="text-left">
          <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-[#000000]" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Experience every flavour</h3>
          <p className="text-[#b2b2b2] leading-relaxed">
            Offbeat or mainstream, a tour or a show, a game or a museum - we have 'em all.
          </p>
        </div>
      </section>

      {/* Explore Countries Section */}
      <section className="py-20 px-6">
        <h2 className="text-6xl font-bold text-center mb-20">Explore Top Countries</h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Line Navigation */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
            <div className="flex flex-col items-center space-y-8">
              {/* Vertical Line */}
              <div className="w-1 h-32 bg-white/30 rounded-full"></div>
              
              {/* Navigation Circles */}
              <div className="flex flex-col space-y-6">
                {countries.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveCountry(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg cursor-pointer hover:scale-110 transition-all duration-300 ${
                      activeCountry === index
                        ? 'bg-white text-black'
                        : 'bg-white/30 text-white'
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              
              {/* Vertical Line */}
              <div className="w-1 h-32 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="ml-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src={countries[activeCountry].image}
                alt={countries[activeCountry].name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-left">
                <h3 className="text-6xl font-bold mb-6 text-white transition-all duration-500">
                  {countries[activeCountry].name}
                </h3>
                <p className="text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed transition-all duration-500">
                  {countries[activeCountry].description}
                </p>
                <Button className={`${countries[activeCountry].buttonColor} text-white px-12 py-4 text-lg font-semibold transition-all duration-500`}>
                  {countries[activeCountry].buttonText}
                </Button>
              </div>

              {/* Three Side Images */}
              <div className="absolute right-8 top-8 space-y-4">
                {countries[activeCountry].sideImages.map((sideImage, index) => (
                  <div key={index} className="w-40 h-32 rounded-lg overflow-hidden shadow-2xl transition-all duration-500">
                    <img
                      src={sideImage.src}
                      alt={sideImage.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20 px-6">
        <div className="text-center mb-16">
          <p className="text-[#b2b2b2] mb-2">and the best for you</p>
          <h2 className="text-4xl font-bold">Explore Top Destinations</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <Link key={i} href={`/destination/${i}`} className="relative group cursor-pointer">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="/seoul-south-korea-traditional-palace-architecture.jpg"
                  alt="Seoul"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-4 left-4 text-left">
                  <h3 className="text-xl font-bold mb-1">Explore our Seoul</h3>
                  <p className="text-sm text-[#b2b2b2] mb-2">
                    Immerse yourself in Seoul's vibrant culture with 275 live experiences
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 border-t border-[#b2b2b2]/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Subscribe to get tips and tactics to grow the way you want.</h2>
          </div>

          <div className="flex gap-2">
            <Input placeholder="Your email address" className="flex-1 bg-[#ffffff] text-[#000000] border-none" />
            <Button className="bg-[#ff0000] hover:bg-[#ff0000]/90 px-6">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#b2b2b2]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <div className="space-y-2 text-[#b2b2b2]">
                <p>Blog</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <div className="space-y-2 text-[#b2b2b2]">
                <p>Tours</p>
                <p>Discover</p>
                <p>Events</p>
                <p>Board meetings</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-[#b2b2b2]/20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#ffffff] rounded-full flex items-center justify-center">
                <span className="text-[#000000] font-bold text-xs">G</span>
              </div>
              <span className="text-sm text-[#b2b2b2]">© Gunmook, Inc.</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#b2b2b2]/20 rounded-full flex items-center justify-center">
                <span className="text-sm">T</span>
              </div>
              <div className="w-8 h-8 bg-[#b2b2b2]/20 rounded-full flex items-center justify-center">
                <span className="text-sm">Y</span>
              </div>
              <div className="w-8 h-8 bg-[#b2b2b2]/20 rounded-full flex items-center justify-center">
                <span className="text-sm">I</span>
              </div>
              <div className="w-8 h-8 bg-[#b2b2b2]/20 rounded-full flex items-center justify-center">
                <span className="text-sm">F</span>
              </div>
              <div className="w-8 h-8 bg-[#b2b2b2]/20 rounded-full flex items-center justify-center">
                <span className="text-sm">P</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}