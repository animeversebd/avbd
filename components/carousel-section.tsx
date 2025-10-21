"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimeCard } from "./anime-card"

interface CarouselItem {
  id: number
  title: string
  year: number
  type: string
  image: string
}

interface CarouselSectionProps {
  title: string
  items: CarouselItem[]
}

export function CarouselSection({ title, items }: CarouselSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="px-8 py-8 border-b border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        )}
      </div>

      <div className="relative">
        <div ref={scrollContainerRef} onScroll={checkScroll} className="flex gap-4 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <AnimeCard key={item.id} item={item} />
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
        )}
      </div>
    </section>
  )
}
