import { Facebook, Instagram, Linkedin, MessageCircle, Send, Twitter } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://www.facebook.com/share/17Ff3LE3Nk/",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageCircle,
      label: "TikTok",
      url: "https://www.tiktok.com/@mvies.vrse.bd?lang=en-GB&is_from_webapp=1&sender_device=mobile&sender_web_id=7563568007496173063",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/moviesverse.bd?igsh=MTZmdXcyMWRudTIwaA==",
      color: "hover:text-pink-600",
    },
    {
      icon: Send,
      label: "Telegram",
      url: "https://t.me/addlist/WwqxvGD_N0JhOTA1",
      color: "hover:text-blue-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/01624909046",
      color: "hover:text-green-500",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "#",
      color: "hover:text-blue-700",
    },
  ]

  return (
    <div className="flex gap-4 flex-wrap">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`p-3 rounded-lg bg-muted hover:bg-accent transition-all duration-300 ${social.color}`}
            title={social.label}
          >
            <Icon className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}
