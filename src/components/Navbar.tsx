import { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { localePath, switchLocaleUrl } from '@/i18n/LocaleRouter'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import logo from '@/assets/moai_logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation('navbar')
  const { pathname, search, hash } = useLocation()
  const params = useParams()
  const navigate = useNavigate()

  const lng = (params.lng as 'en' | 'fr') || 'en';

  const navigation = [
    { name: t('home.title'), to: localePath(lng, t('home.url')) },
    { name: t('about.title'), to: localePath(lng, t('about.url')) },
    { name: t('solutions.title'), to: localePath(lng, t('solutions.url')) },
    { name: t('team.title'), to: localePath(lng, t('team.url')) },
    // { name: t('contact.title'), to: localePath(lng, t('contact.url')) },
  ]

  const switchLang = (targetLng: 'en' | 'fr') => {
    if (i18n.language !== targetLng) i18n.changeLanguage(targetLng);
    const targetUrl = switchLocaleUrl(pathname, search, hash, targetLng);
    navigate(targetUrl, { replace: true });
  };

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
            <Link to="/" className="-m-1.5 p-1.5" aria-label='MoAi'>
              <span className="sr-only">MoAi</span>
              <img src={logo} alt="MoAi" width="168" height="48" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-5">
            {/* Language toggle */}
            <div className="flex items-center gap-2">
              <Button variant={i18n.resolvedLanguage === 'en' ? 'default' : 'outline'} size="sm" onClick={() => switchLang('en')}>
                EN
              </Button>
              <Button variant={i18n.resolvedLanguage === 'fr' ? 'default' : 'outline'} size="sm" onClick={() => switchLang('fr')}>
                FR
              </Button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link to={localePath(lng, t('getStarted.url'))}>
                <Button className="shadow-medium text-white">
                  {/* Get Started */}
                  {t('getStarted.title')}
                </Button>
              </Link>
            </div>
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
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="px-4 pt-4">
                    <Link
                      to={localePath(lng, '/#contact')}
                      onClick={() => setIsOpen(false)}
                      className="w-full shadow-medium"
                    >
                      Get Started
                    </Link>
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