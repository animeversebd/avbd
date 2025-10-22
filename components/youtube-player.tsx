"use client"

import { X } from "lucide-react"
import { useEffect, useRef } from "react"

interface YoutubePlayerProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export function YoutubePlayer({ isOpen, onClose, videoId }: YoutubePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isOpen && iframeRef.current) {
      const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&controls=1&fs=1&rel=0&playsinline=1`
      iframeRef.current.src = src
    }
  }, [isOpen, videoId])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 hover:bg-white/20 rounded-lg transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
          <iframe
            ref={iframeRef}
            className="absolute inset-0 w-full h-full"
            title="Anime Trailer"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
