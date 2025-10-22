"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface SlideshowItem {
  id: number
  title: string
  year: number
  type: string
  image: string
}

interface HeroSlideshowProps {
  items: SlideshowItem[]
}

export function HeroSlideshow({ items }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [items.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  if (items.length === 0) return null

  const currentItem = items[currentIndex]

  return (
    <section className="relative h-96 bg-gradient-to-r from-black/80 to-transparent overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${currentItem.image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 max-w-2xl">
        <div className="mb-4 text-sm text-muted-foreground">
          {currentItem.year} • {currentItem.type}
        </div>

        <h1 className="text-5xl font-bold text-foreground mb-4">{currentItem.title}</h1>

        <p className="text-foreground/80 line-clamp-3 mb-6 max-w-lg">
          Discover this amazing anime series. Watch now to experience the adventure!
        </p>

        <Link href={`/anime/${currentItem.id}`}>
          <button className="w-fit px-6 py-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors">
            See More
          </button>
        </Link>
      </div>

      <Link href={`/anime/${currentItem.id}`} className="absolute inset-0 cursor-pointer" />

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-accent w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
