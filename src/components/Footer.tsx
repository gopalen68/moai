import { Link } from 'react-router-dom'

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
  ],
  Solutions: [
    { name: 'Enterprise Automation', href: '/solutions/enterprise-automation' },
    { name: 'Consumer AI Solutions', href: '/solutions/consumer-ai-solutions' },
    { name: 'Intelligent Platforms', href: '/solutions/intelligent-platforms' },
    { name: 'Custom AI Development', href: '/solutions/custom-ai-development' }
  ],
  Resources: [
    { name: 'Blog', href: '/blogs' },
    { name: 'Support', href: '/support' }
  ]
}

export default function Footer() {

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
              © {new Date().getFullYear()} MoAi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}