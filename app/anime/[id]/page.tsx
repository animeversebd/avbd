"use client"

import { useState } from "react"
import type { PageProps } from "@/types/pageProps" // Assuming PageProps is declared in a types file
import { animeDatabase } from "@/data/animeDatabase" // Assuming animeDatabase is declared in a data file
import Header from "@/components/Header" // Assuming Header is a component
import Footer from "@/components/Footer" // Assuming Footer is a component
import Play from "@/components/icons/Play" // Assuming Play is an icon component
import Send from "@/components/icons/Send" // Assuming Send is an icon component
import SocialLinks from "@/components/SocialLinks" // Assuming SocialLinks is a component
import CarouselSection from "@/components/CarouselSection" // Assuming CarouselSection is a component
import YoutubePlayer from "@/components/YoutubePlayer" // Assuming YoutubePlayer is a component
import TelegramModal from "@/components/TelegramModal" // Assuming TelegramModal is a component

export default function AnimeDetailPage({ params }: PageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showTrailer, setShowTrailer] = useState(false)
  const [showTelegram, setShowTelegram] = useState(false)

  const animeId = Number.parseInt(params.id)
  const anime = animeDatabase.find((a) => a.id === animeId)

  if (!anime) {
    return (
      <div className="min-h-screen bg-background">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="flex items-center justify-center py-20">
          <p className="text-foreground text-xl">Anime not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  // Get related anime by genre
  const relatedAnime = animeDatabase.filter((a) => a.id !== anime.id && a.genre.some((g) => anime.genre.includes(g)))

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Hero Section with Blurred Background */}
      <div
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(${anime.image})`,
          filter: "blur(8px)",
          opacity: 0.3,
        }}
      />

      {/* Content Section */}
      <div className="relative -mt-48 md:-mt-80 px-4 md:px-8 pb-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Poster Image */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <img
              src={anime.image || "/placeholder.svg"}
              alt={anime.title}
              className="w-full md:w-48 h-auto md:h-72 rounded-lg object-cover shadow-2xl"
            />
          </div>

          {/* Details */}
          <div className="flex-1 pt-0 md:pt-20">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">{anime.title}</h1>

            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-6 text-muted-foreground text-sm md:text-base">
              <span>{anime.year}</span>
              <span>•</span>
              <span>{anime.type}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="text-yellow-500">⭐</span>
                {anime.imdb}/10 IMDB
              </span>
            </div>

            <div className="flex gap-2 mb-6 flex-wrap">
              {anime.genre.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1 bg-muted text-foreground rounded-full text-xs md:text-sm font-medium"
                >
                  {g}
                </span>
              ))}
            </div>

            <p className="text-foreground/80 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
              {anime.description}
            </p>

            <div className="flex flex-col gap-2 md:gap-4 mb-8 text-sm md:text-base">
              <span className="text-muted-foreground">
                <strong className="text-foreground">Episodes:</strong> {anime.episodes}
              </span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Status:</strong> {anime.status}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8">
              <button
                onClick={() => setShowTrailer(true)}
                className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors text-sm md:text-base"
              >
                <Play className="w-4 md:w-5 h-4 md:h-5" />
                Watch Trailer
              </button>

              <button
                onClick={() => setShowTelegram(true)}
                className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors text-sm md:text-base"
              >
                <Send className="w-4 md:w-5 h-4 md:h-5" />
                Watch on Telegram
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-foreground font-semibold mb-4 text-sm md:text-base">Follow Us</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Related Anime Section */}
      {relatedAnime.length > 0 && (
        <div className="px-4 md:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Related Anime</h2>
          <CarouselSection
            title=""
            items={relatedAnime.map((a) => ({
              id: a.id,
              title: a.title,
              year: a.year,
              type: a.type,
              image: a.image,
            }))}
          />
        </div>
      )}

      {/* Modals */}
      <YoutubePlayer isOpen={showTrailer} onClose={() => setShowTrailer(false)} videoId={anime.youtubeTrailerId} />

      <TelegramModal
        isOpen={showTelegram}
        onClose={() => setShowTelegram(false)}
        animeTitle={anime.title}
        telegramLink={anime.telegramLink}
      />

      <Footer />
    </div>
  )
}
