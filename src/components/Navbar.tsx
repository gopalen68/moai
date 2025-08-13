import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import logo from '@/assets/moai_logo.png'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Solutions', href: '#solutions' },
  // { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MoAi</span>
              <img src={logo} alt="" width="158" height="48" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('#contact')} className="shadow-medium">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="px-4 pt-4">
                    <Button
                      onClick={() => scrollToSection('#contact')}
                      className="w-full shadow-medium"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}