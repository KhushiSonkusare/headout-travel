import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function DestinationPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#b2b2b2]/20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 hover:text-[#b2b2b2] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="h-6 w-px bg-[#b2b2b2]/20" />
          <h1 className="text-xl font-semibold">Holy Cottage</h1>
        </div>
        <div className="text-xl font-bold text-[#ff0000]">$50/day</div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/holy-cottage-main-view.jpg"
                alt="Holy Cottage main view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="relative h-44 lg:h-[184px] rounded-lg overflow-hidden">
              <img
                src="/holy-cottage-interior.jpg"
                alt="Holy Cottage interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-44 lg:h-[184px] rounded-lg overflow-hidden">
              <img src="/holy-cottage-deck.jpg" alt="Holy Cottage deck" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-8 border-b border-[#b2b2b2]/20">
          <button className="pb-4 border-b-2 border-[#ff0000] text-[#ff0000] font-medium">Overview</button>
          <button className="pb-4 text-[#b2b2b2] hover:text-white transition-colors">Details</button>
          <button className="pb-4 text-[#b2b2b2] hover:text-white transition-colors">Reviews</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <p className="text-[#b2b2b2] leading-relaxed mb-6">
                Experience a blend of the breathtaking countryside & beach views. A light layout clean for a light
                layout clean for everything. Light layout clean for a light layout clean for everything. Light layout
                clean for a light layout clean for everything. Light layout clean for a light layout clean for
                everything. Light layout clean for a light layout clean for everything. Light layout clean for a light
                layout clean for everything & more.
              </p>
            </div>

            {/* Tour Guides */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tour Guides</h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#b2b2b2] rounded-full overflow-hidden">
                    <img src="/guide-arthur.jpg" alt="Arthur Haywood" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">Arthur Haywood</p>
                    <p className="text-sm text-[#b2b2b2]">5.0 (30 reviews)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#b2b2b2] rounded-full overflow-hidden">
                    <img src="/guide-floyd.jpg" alt="Floyd Miles" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">Floyd Miles</p>
                    <p className="text-sm text-[#b2b2b2]">4.8 (45 reviews)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Places */}
            <div>
              <h3 className="text-xl font-bold mb-4">Nearby Places</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-[#b2b2b2]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🏫</span>
                  </div>
                  <span className="text-sm text-center">School</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-[#b2b2b2]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🏥</span>
                  </div>
                  <span className="text-sm text-center">Hospital</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-[#b2b2b2]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🚌</span>
                  </div>
                  <span className="text-sm text-center">Bus Stand</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-[#b2b2b2]/10 rounded-lg">
                  <div className="w-8 h-8 bg-[#ff0000] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🏪</span>
                  </div>
                  <span className="text-sm text-center">Market</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map Location */}
            <div className="bg-[#b2b2b2]/10 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Map Location
              </h3>
              <div className="relative h-48 bg-[#b2b2b2]/20 rounded-lg overflow-hidden mb-4">
                <img src="/map-location.jpg" alt="Map location" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-[#ff0000] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#b2b2b2]">
                <MapPin className="w-4 h-4 inline mr-1" />
                Flores 900, 00 miles, New York, USA
              </p>
            </div>

            {/* Booking Section */}
            <div className="bg-[#b2b2b2]/10 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#b2b2b2]" />
                  <span className="text-sm">20 December</span>
                </div>
                <span className="text-[#b2b2b2]">-</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#b2b2b2]" />
                  <span className="text-sm">27 December</span>
                </div>
              </div>

              <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white py-3 mb-4">
                <Link href={`/booking/${params.id}`} className="w-full h-full flex items-center justify-center">
                  Book Now
                </Link>
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-[#b2b2b2]">
                <Users className="w-4 h-4" />
                <span>2 guests maximum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
