"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Users, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DestinationPage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showCalendar, setShowCalendar] = useState(false)

  // Calendar generation
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  
  const generateCalendar = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const calendarDays = generateCalendar(currentMonth, currentYear)
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#b2b2b2]/20">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 hover:text-[#b2b2b2] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="h-6 w-px bg-[#b2b2b2]/20" />
          <h1 className="text-xl font-semibold">Holy Cottage</h1>
          </div>
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

            {/* Date Selection & Booking Section - Now Horizontal */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left side - Date Selection */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold">Select Date</h3>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">Choose your preferred date</h4>
                      <p className="text-sm text-[#b2b2b2]">Available dates for this experience</p>
                    </div>
                    <Button
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                    >
                      {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
                    </Button>
                  </div>

                  {/* Calendar - Shown inline when opened */}
                  {showCalendar && (
                    <div className="mt-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 max-w-sm">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-semibold text-white">
                          {monthNames[currentMonth]} {currentYear}
                        </h4>
                      </div>
                      
                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                          <div key={day} className="text-center text-xs text-[#b2b2b2] py-2 font-medium">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              if (day) {
                                setSelectedDate(new Date(currentYear, currentMonth, day))
                                setShowCalendar(false)
                              }
                            }}
                            disabled={!day || day < today.getDate()}
                            className={`
                              h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200
                              ${!day 
                                ? 'invisible' 
                                : day < today.getDate()
                                ? 'text-[#b2b2b2]/30 cursor-not-allowed'
                                : selectedDate && selectedDate.getDate() === day
                                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                                : 'text-white hover:bg-white/10 hover:scale-105'
                              }
                            `}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side - Selected Date and Booking */}
                <div className="flex-1 lg:max-w-sm">
                  {/* Selected Date Display */}
                  {selectedDate && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-red-400" />
                        <div>
                          <p className="text-white font-semibold">
                            Selected: {selectedDate.toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                          <p className="text-sm text-[#b2b2b2]">Experience duration: 7 days</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#b2b2b2]">Price per day</span>
                        <span className="font-semibold">$50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#b2b2b2]">Total (7 days)</span>
                        <span className="font-bold text-xl text-[#ff0000]">$350</span>
                      </div>
                    </div>

                    <Button className="w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white py-3" disabled={!selectedDate}>
                      <Link href={`/booking/${params.id}`} className="w-full h-full flex items-center justify-center">
                        {selectedDate ? 'Book Now' : 'Select a Date First'}
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

          {/* Sidebar - Now only contains Map */}
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
          </div>
        </div>
      </div>
    </div>
  )
}