"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function BookingPage({ params }: { params: { id: string } }) {
  const [adults, setAdults] = useState(1)
  const [seniors, setSeniors] = useState(0)
  const [children, setChildren] = useState(0)

  const adultPrice = 4508
  const seniorPrice = 4317
  const childPrice = 4029

  const totalPrice = adults * adultPrice + seniors * seniorPrice + children * childPrice

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#b2b2b2]/20">
        <div className="flex items-center gap-4">
          <Link
            href={`/destination/${params.id}`}
            className="flex items-center gap-2 hover:text-[#b2b2b2] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="h-6 w-px bg-[#b2b2b2]/20" />
          <h1 className="text-xl font-semibold">Complete Your Booking</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Booking Details */}
          <div className="space-y-8">
            {/* Cancellation Policy */}
            <div className="bg-[#b2b2b2]/10 rounded-lg p-6">
              <p className="text-[#b2b2b2] mb-4">You can cancel for free until Sep 11, 2025, 9:00am local time.</p>
            </div>

            {/* Guests Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold">Guests</h2>
                <span className="text-sm text-yellow-400 flex items-center gap-1">⭐ Likely to sell out</span>
              </div>

              <div className="space-y-6">
                <p className="text-[#b2b2b2] text-sm">
                  • Children aged 0-5 can enter for free. Simply show your ID at the venue and enter.
                </p>

                {/* Adult */}
                <div className="flex items-center justify-between py-4 border-b border-[#b2b2b2]/20">
                  <div>
                    <h3 className="font-semibold">Adult</h3>
                    <p className="text-sm text-[#b2b2b2]">13 to 61 yrs</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 border-[#b2b2b2]/30 bg-transparent hover:bg-[#b2b2b2]/10"
                        onClick={() => setAdults(Math.max(0, adults - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{adults}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 border-[#b2b2b2]/30 bg-transparent hover:bg-[#b2b2b2]/10"
                        onClick={() => setAdults(adults + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-right min-w-[80px]">
                      <span className="font-semibold">₹{adultPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Senior */}
                <div className="flex items-center justify-between py-4 border-b border-[#b2b2b2]/20">
                  <div>
                    <h3 className="font-semibold">Senior</h3>
                    <p className="text-sm text-[#b2b2b2]">62 yrs and above</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 border-[#b2b2b2]/30 bg-transparent hover:bg-[#b2b2b2]/10"
                        onClick={() => setSeniors(Math.max(0, seniors - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{seniors}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 border-[#b2b2b2]/30 bg-transparent hover:bg-[#b2b2b2]/10"
                        onClick={() => setSeniors(seniors + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-right min-w-[80px]">
                      <span className="font-semibold">₹{seniorPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Child */}
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-semibold">Child</h3>
                    <p className="text-sm text-[#b2b2b2]">6 to 12 yrs</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 border-[#b2b2b2]/30 bg-transparent hover:bg-[#b2b2b2]/10"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{children}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 border-[#b2b2b2]/30 bg-transparent hover:bg-[#b2b2b2]/10"
                        onClick={() => setChildren(children + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-right min-w-[80px]">
                      <span className="font-semibold">₹{childPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Ticket */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm relative">
              {/* Ticket Container with Glassmorphism */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-teal-400/20 border border-white/30 rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Image Section */}
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url('/holy-cottage-main-view.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 to-purple-600/40 backdrop-blur-[1px]"></div>

                  {/* Experience Title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-4xl font-bold mb-2 text-shadow-lg">Holy Cottage</div>
                    <div className="text-lg opacity-90">+ EXPERIENCE +</div>
                  </div>
                </div>

                {/* Guest Details Section */}
                <div className="p-6 backdrop-blur-md bg-white/25 border-t border-white/20">
                  <div className="text-white/80 text-sm mb-2">Guest Name</div>
                  <div className="text-white text-xl font-semibold mb-6">John Traveler</div>

                  {/* Booking Details Grid */}
                  <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                      <div className="text-white/80 text-xs mb-1">Check-in</div>
                      <div className="text-white font-bold text-lg">30</div>
                      <div className="text-white/80 text-xs">Dec</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-xs mb-1">Duration</div>
                      <div className="text-white font-bold text-lg">3</div>
                      <div className="text-white/80 text-xs">Days</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-xs mb-1">Guests</div>
                      <div className="text-white font-bold text-lg">{adults + seniors + children}</div>
                      <div className="text-white/80 text-xs">Total</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-white/80 text-xs mb-1">Adults</div>
                      <div className="text-white font-bold">{adults}</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-xs mb-1">Check-out</div>
                      <div className="text-white font-bold">02/01</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-xs mb-1">Booking ID</div>
                      <div className="text-white font-bold">HC205</div>
                    </div>
                  </div>
                </div>

                {/* Dotted Separator */}
                <div className="relative">
                  <div className="border-t border-dashed border-white/40"></div>
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-[#000000] rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute -right-4 top-0 w-8 h-8 bg-[#000000] rounded-full transform -translate-y-1/2"></div>
                </div>

                {/* Bottom Section */}
                <div className="p-6 backdrop-blur-md bg-white/20 flex justify-between items-center">
                  <div className="text-white">
                    <div className="text-xs text-white/80 mb-1">Guest Name</div>
                    <div className="font-semibold mb-3">John Traveler</div>
                    <div className="text-xs space-y-1">
                      <div>
                        <span className="text-white/80">Booking</span> HC205
                      </div>
                      <div>
                        <span className="text-white/80">Total</span> ₹{totalPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/40 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                        <div className="text-black text-xs font-mono font-bold">QR</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm & Pay Button */}
              <div className="mt-8">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl text-lg shadow-lg">
                  🔒 Confirm & Pay ₹{totalPrice.toLocaleString()}
                </Button>
                <p className="text-center text-[#b2b2b2] text-sm mt-4">
                  You'll pay ${(totalPrice * 0.012).toFixed(2)} USD
                </p>
                <p className="text-center text-xs text-[#b2b2b2] mt-2">
                  By continuing, you agree to the General Terms, Privacy Policy, and Cancellation Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
