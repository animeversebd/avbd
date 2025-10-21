"use client"
import { X } from "lucide-react"

interface TelegramModalProps {
  isOpen: boolean
  onClose: () => void
  animeTitle: string
}

export function TelegramModal({ isOpen, onClose, animeTitle }: TelegramModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-muted rounded-lg transition-colors">
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="text-center">
          <div className="text-5xl mb-4">📺</div>
          <h2 className="text-2xl font-bold text-foreground mb-4">আপনি কি এই এনিমে দেখতে চান?</h2>
          <p className="text-muted-foreground mb-6">
            আপনি যদি এই এনিমে টি দেখতে চান, আমাদের টেলিগ্রাম চ্যানেল থেকে সরাসরি দেখতে পারেন। দেখতে হলে "Watch Now" তে ক্লিক করুন।
          </p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors font-semibold"
            >
              বন্ধ করুন
            </button>
            <a
              href="https://t.me/animeverseBD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
