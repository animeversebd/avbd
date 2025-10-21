"use client"

import Link from "next/link"

interface AnimeCardProps {
  item: {
    id: number
    title: string
    year: number
    type: string
    image: string
  }
}

export function AnimeCard({ item }: AnimeCardProps) {
  return (
    <Link href={`/anime/${item.id}`}>
      <div className="flex-shrink-0 w-40 group cursor-pointer">
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
    </Link>
  )
}
