"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Minus, Plus, MapPin, Calendar, Clock, Users } from "lucide-react"
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

          {/* Right Side - Redesigned Booking Ticket */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
              {/* Ticket Container */}
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Main Ticket */}
                <div className="bg-gradient-to-br from-gray-100 to-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
                  {/* Top Border Pattern */}
                  <div className="h-4 bg-gradient-to-r from-red-500 to-red-600"></div>
                  
                  {/* Ticket Header */}
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs text-gray-500 uppercase tracking-wider">Experience Ticket</h3>
                        <h2 className="text-2xl font-bold mt-1">HOLY COTTAGE</h2>
                        <p className="text-sm text-gray-600 mt-1">Premium Stay Experience</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Ticket No.</div>
                        <div className="font-mono text-sm font-bold">HC-2025-{Math.floor(Math.random() * 9000) + 1000}</div>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Details Grid */}
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-xs text-gray-500">Check-in</div>
                          <div className="font-semibold">Dec 30, 2025</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-xs text-gray-500">Check-out</div>
                          <div className="font-semibold">Jan 02, 2026</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-xs text-gray-500">Guests</div>
                          <div className="font-semibold">{adults + seniors + children} People</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-xs text-gray-500">Location</div>
                          <div className="font-semibold text-sm">Flores, NY</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Perforated Line */}
                  <div className="relative px-6">
                    <div className="border-t-2 border-dashed border-gray-300"></div>
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute -right-3 top-0 w-6 h-6 bg-black rounded-full transform -translate-y-1/2"></div>
                  </div>

                  {/* Guest Details Section */}
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Guest Name</div>
                        <div className="font-bold text-lg mt-1">John Traveler</div>
                        <div className="mt-3 space-y-1">
                          <div className="text-sm">
                            <span className="text-gray-500">Adults:</span> {adults} × ₹{adultPrice.toLocaleString()}
                          </div>
                          {seniors > 0 && (
                            <div className="text-sm">
                              <span className="text-gray-500">Seniors:</span> {seniors} × ₹{seniorPrice.toLocaleString()}
                            </div>
                          )}
                          {children > 0 && (
                            <div className="text-sm">
                              <span className="text-gray-500">Children:</span> {children} × ₹{childPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Total Amount</div>
                        <div className="text-3xl font-bold text-red-600 mt-1">
                          ₹{totalPrice.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ≈ ${(totalPrice * 0.012).toFixed(2)} USD
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Barcode Section */}
                  <div className="bg-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="h-12 bg-white rounded flex items-center justify-center p-2">
                          {/* Barcode Lines */}
                          <div className="flex gap-[2px] h-full items-center">
                            {Array.from({ length: 30 }).map((_, i) => (
                              <div
                                key={i}
                                className="bg-black"
                                style={{
                                  height: i % 3 === 0 ? '100%' : i % 2 === 0 ? '80%' : '60%',
                                  width: i % 4 === 0 ? '3px' : '1px'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 w-16 h-16 bg-white rounded-lg p-1 flex items-center justify-center">
                        {/* QR Code */}
                        <div className="w-full h-full bg-black rounded-sm flex items-center justify-center p-1">
                          <div className="grid grid-cols-3 gap-[1px]">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-3 h-3 ${
                                  [0, 2, 4, 6, 8].includes(i) ? 'bg-white' : 'bg-black'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-white text-xs mt-2 font-mono">
                      HC2025{Math.floor(Math.random() * 900000) + 100000}
                    </div>
                  </div>

                  {/* Bottom Border */}
                  <div className="h-4 bg-gradient-to-r from-red-500 to-red-600"></div>
                </div>

                {/* Ticket Shadow Effect */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-black/10 rounded-lg -z-10 blur-xl"></div>
              </div>

              {/* Terms and Conditions */}
              <div className="mt-8 p-4 bg-gray-900/20 rounded-lg text-xs text-gray-400">
                <p className="mb-2">Terms & Conditions:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Valid only for the dates mentioned above</li>
                  <li>Non-transferable and non-refundable after check-in</li>
                  <li>Guest must carry valid ID proof</li>
                  <li>Subject to availability and weather conditions</li>
                </ul>
              </div>

              {/* Confirm & Pay Button */}
              <div className="mt-6">
                <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white font-semibold py-4 rounded-xl text-lg shadow-lg transition-all hover:shadow-red-500/20 hover:shadow-2xl">
                  <span className="flex items-center justify-center gap-2">
                    <span>🔒</span>
                    <span>Confirm & Pay ₹{totalPrice.toLocaleString()}</span>
                  </span>
                </Button>
                <div className="mt-4 text-center">
                  <p className="text-[#b2b2b2] text-sm">
                    Secure payment • Instant confirmation
                  </p>
                  <p className="text-xs text-[#b2b2b2]/60 mt-2">
                    By continuing, you agree to the General Terms, Privacy Policy, and Cancellation Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}