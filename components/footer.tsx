export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold green-gradient-text mb-4">ANIME VERSE BD</h3>
            <p className="text-muted-foreground text-sm">
              Your ultimate destination for anime streaming and discovery.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Trending
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">© 2025 ANIME VERSE BD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
