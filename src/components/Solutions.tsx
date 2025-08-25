import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Smartphone, Network, Code } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Automation',
    description: 'Streamline business processes with intelligent automation that adapts to your workflow patterns and scales with your organization.',
    features: ['Process Optimization', 'Workflow Intelligence', 'Scalable Architecture'],
    url: '/solutions/enterprise-automation'
  },
  {
    icon: Smartphone,
    title: 'Consumer AI Solutions',
    description: 'Intuitive AI-powered applications that enhance daily life experiences with personalized, context-aware functionality.',
    features: ['Personal Assistants', 'Smart Recommendations', 'Adaptive Interfaces'],
    url: '/solutions/consumer-ai-solutions'
  },
  {
    icon: Network,
    title: 'Intelligent Platforms',
    description: 'Comprehensive AI ecosystems that connect multiple touchpoints and provide unified, intelligent experiences.',
    features: ['Data Integration', 'Cross-Platform Sync', 'Unified Analytics'],
    url: '/solutions/intelligent-platforms'
  },
  {
    icon: Code,
    title: 'Custom AI Development',
    description: 'Tailored AI solutions designed specifically for your unique challenges and business requirements.',
    features: ['Bespoke Solutions', 'Integration Support', 'Ongoing Optimization'],
    url: '/solutions/custom-ai-development'
  }
]

export default function Solutions() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform how you work, live, and innovate.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="slide-up shadow-soft hover:shadow-large transition-all duration-300 group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/65 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-foreground/65">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={solution.url}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </Link>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 slide-up" style={{ animationDelay: '0.8s' }}>
          <Card className="inline-block p-8 shadow-medium">
            <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-foreground/65 mb-6">
              Let's discuss how MoAi can create the perfect AI solution for your needs.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="shadow-medium">
                Schedule a Consultation
              </Button>
            </Link>

          </Card>
        </div>
      </div>
    </section>
  )
}