"use client"

import { Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check if we're on a detail page
  const isDetailPage = pathname.startsWith("/anime/")

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Back Button on Detail Page */}
        {isDetailPage && (
          <button
            onClick={() => router.push("/")}
            className="mr-2 md:mr-4 p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
        )}

        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 md:gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <div
            className={`rounded-lg flex items-center justify-center flex-shrink-0 ${isDetailPage ? "w-10 h-10" : "w-12 h-12"}`}
          >
            <Image
              src="/logo.png"
              alt="Anime Verse BD"
              width={isDetailPage ? 40 : 48}
              height={isDetailPage ? 40 : 48}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={`font-bold text-white drop-shadow-md ${isDetailPage ? "text-sm md:text-base" : "text-sm md:text-base"}`}
          >
            ANIME VERSE BD
          </span>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted text-foreground placeholder-muted-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle search"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-4 border-t border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted text-foreground placeholder-muted-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      )}
    </header>
  )
}
