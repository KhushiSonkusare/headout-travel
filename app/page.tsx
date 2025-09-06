import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, Star, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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

        {/* Experience Cards */}
        <div className="flex justify-center items-center gap-4 mb-20 overflow-hidden">
          <div className="relative w-48 h-64 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <img
              src="/dark-volcanic-landscape-with-red-lava.jpg"
              alt="Volcanic experience"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 text-left">
              <p className="text-sm font-medium">Selected process from</p>
              <p className="text-sm font-medium">the last month</p>
            </div>
          </div>

          <div className="relative w-48 h-64 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <img
              src="/otherworldly-golden-marble-texture.jpg"
              alt="Otherworldly places"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 text-left">
              <p className="text-sm font-medium">Otherworldly places</p>
              <p className="text-sm font-medium">located on Earth</p>
            </div>
          </div>

          <div className="relative w-48 h-64 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <img
              src="/abstract-blue-and-gold-soundwaves-visualization.jpg"
              alt="Sound waves"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-4 left-4 text-left">
              <p className="text-sm font-medium">Visualizing distorted</p>
              <p className="text-sm font-medium">sound waves</p>
            </div>
          </div>

          <div className="relative w-48 h-64 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <img
              src="/purple-pink-abstract-marble-texture.jpg"
              alt="Abstract texture"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
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
        <h2 className="text-4xl font-bold text-center mb-16">Explore Top Countries</h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm group-hover:bg-red-500 group-hover:text-white transition-colors">
                  1
                </div>
                <span className="text-sm font-medium text-white group-hover:opacity-100">Japan</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:bg-red-500 transition-colors">
                  2
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">Indonesia</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:bg-red-500 transition-colors">
                  3
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">Thailand</span>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src="/nusa-penida-indonesia-tropical-island-aerial-view.jpg"
              alt="Nusa Penida"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            <div className="absolute left-24 top-1/2 transform -translate-y-1/2 text-left">
              <h3 className="text-4xl font-bold mb-4">Nusa Penida</h3>
              <p className="text-lg text-[#b2b2b2] mb-6 max-w-md">
                Nusa Penida is the largest and most scenic of the three Nusa Islands, famous for its picturesque beaches
                that look like cliff formations and lagoons.
              </p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">DISCOVER</Button>
            </div>

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Kelingking Beach</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-1/3">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Broken Beach</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-1/4">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Angel's Billabong</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-8 top-8 space-y-4">
              <div className="w-32 h-24 rounded-lg overflow-hidden">
                <img
                  src="/kelingking-beach-nusa-penida-cliff.jpg"
                  alt="Kelingking Beach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-24 rounded-lg overflow-hidden">
                <img
                  src="/crystal-bay-nusa-penida-turquoise-water.jpg"
                  alt="Crystal Bay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
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
