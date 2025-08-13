import { Heart } from 'lucide-react'
import logo from '@/assets/moai_logo.png'

const footerLinks = {
  Company: [
    { name: 'About Us', href: '#about' },
    // { name: 'Our Team', href: '#team' },
    // { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' }
  ],
  Solutions: [
    { name: 'Enterprise AI', href: '#solutions' },
    { name: 'Consumer Apps', href: '#solutions' },
    { name: 'Custom Development', href: '#solutions' },
    { name: 'Consulting', href: '#' }
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Support', href: '#' }
  ]
}

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-foreground">MoAi</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming daily life and business with adaptable AI-powered systems that grow with you.
            </p>
            {/* <p className="text-sm text-muted-foreground/80">
              Made with <Heart className="inline h-4 w-4 text-red-400" /> in Mauritius
            </p> */}
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} MoAi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </button>
              {/* <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}