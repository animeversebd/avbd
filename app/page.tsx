"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { CarouselSection } from "@/components/carousel-section"
import { Footer } from "@/components/footer"
import { animeDatabase } from "@/lib/anime-data"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const allItems = animeDatabase.map((anime) => ({
    id: anime.id,
    title: anime.title,
    year: anime.year,
    type: anime.type,
    image: anime.image,
  }))

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null
    return allItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  const slideshowItems = allItems.filter((item) => [105, 106, 108, 111, 112].includes(item.id))

  const newThisWeek = allItems.filter((item) => item.year >= 2024).slice(0, 15)
  const trendingNow = allItems.filter((item) => item.type === "TV Show").slice(0, 15)
  const mostPopular = allItems.filter((item) => item.type === "Movie").slice(0, 15)
  const actionAnime = allItems.filter((item) => item.id > 40 && item.id <= 60).slice(0, 15)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="flex-1">
        {!searchQuery.trim() ? (
          <>
            <HeroSlideshow items={slideshowItems} />
            <CarouselSection title="New this week" items={newThisWeek} />
            <CarouselSection title="Trending Now" items={trendingNow} />
            <CarouselSection title="Most Popular" items={mostPopular} />
            <CarouselSection title="Action Anime" items={actionAnime} />
          </>
        ) : (
          <section className="px-8 py-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Search Results for "{searchQuery}"</h2>
            {filteredItems && filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="flex-shrink-0 group cursor-pointer">
                    <div className="relative h-56 rounded-lg overflow-hidden bg-muted mb-3">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{item.year}</span>
                        <span>•</span>
                        <span>{item.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">No results found for "{searchQuery}"</p>
            )}
          </section>
        )}
      </div>
      <Footer />
    </div>
  )
}
