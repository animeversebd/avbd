"use client"
import { X } from "lucide-react"

interface YoutubePlayerProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export function YoutubePlayer({ isOpen, onClose, videoId }: YoutubePlayerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Anime Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
