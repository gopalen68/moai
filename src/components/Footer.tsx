import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation('footer')

  const footerLinks = {
    [t('sections.company.title')]: [
      { name: t('sections.company.links.about.title'), href: t('sections.company.links.about.url') },
      { name: t('sections.company.links.contact.title'), href: t('sections.company.links.contact.url') }
    ],
    [t('sections.solutions.title')]: [
      { name: t('sections.solutions.links.enterpriseAutomation.title'), href: t('sections.solutions.links.enterpriseAutomation.url') },
      { name: t('sections.solutions.links.consumerAISolutions.title'), href: t('sections.solutions.links.consumerAISolutions.url') },
      { name: t('sections.solutions.links.intelligentPlatforms.title'), href: t('sections.solutions.links.intelligentPlatforms.url') },
      { name: t('sections.solutions.links.customAIDevelopment.title'), href: t('sections.solutions.links.customAIDevelopment.url') }
    ],
    [t('sections.resources.title')]: [
      { name: t('sections.resources.links.blog.title'), href: t('sections.resources.links.blog.url') },
      { name: t('sections.resources.links.support.title'), href: t('sections.resources.links.support.url') }
    ]
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t('brand.title')}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('brand.tagline')}
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} {t('legal.copyright')}
            </p>
            <div className="flex space-x-6">
              <Link to={t('legal.privacy.url')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('legal.privacy.title')}
              </Link>
              <Link to={t('legal.terms.url')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('legal.terms.title')}
              </Link>
              <Link to={t('legal.cookies.url')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('legal.cookies.title')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}