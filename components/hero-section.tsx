import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-96 bg-gradient-to-r from-black/80 to-transparent overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=400&width=1200&query=anime solo leveling hero)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 max-w-2xl">
        <div className="mb-4 text-sm text-muted-foreground">Winter 2024 • 12 Episodes</div>

        <h1 className="text-5xl font-bold text-foreground mb-4">Solo Leveling</h1>

        <p className="text-foreground/80 line-clamp-3 mb-6 max-w-lg">
          They say whatever doesn't kill you makes you stronger, but that's not the case for the world's weakest hunter
          being James. After being brutally slaughtered by monsters in a high-ranking dungeon, James came back with the
          system...
        </p>

        <Button className="w-fit bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">See More</Button>
      </div>
    </section>
  )
}
