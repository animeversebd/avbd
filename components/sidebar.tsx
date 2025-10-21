import { Bell, Bookmark, Search, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-6 gap-8">
      {/* Logo */}
      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-accent-foreground" />
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-6">
        <button className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors" aria-label="Bookmarks">
          <Bookmark className="w-6 h-6 text-sidebar-foreground" />
        </button>
        <button className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors" aria-label="Search">
          <Search className="w-6 h-6 text-sidebar-foreground" />
        </button>
        <button className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors" aria-label="Notifications">
          <Bell className="w-6 h-6 text-sidebar-foreground" />
        </button>
      </nav>

      {/* Bottom Icons */}
      <div className="mt-auto flex flex-col gap-6">
        <button className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors" aria-label="Settings">
          <Settings className="w-6 h-6 text-sidebar-foreground" />
        </button>
      </div>
    </aside>
  )
}
