import { Target, Users, Lightbulb, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Target,
    title: 'Purposeful Design',
    description: 'Every solution is crafted with intention, focusing on real-world impact and user needs.'
  },
  {
    icon: Users,
    title: 'Adaptable Systems',
    description: 'Our AI grows with you, learning and evolving to meet changing requirements.'
  },
  {
    icon: Lightbulb,
    title: 'Smart Innovation',
    description: 'Cutting-edge technology that simplifies complexity and enhances daily experiences.'
  },
  {
    icon: Globe,
    title: 'Global Vision',
    description: 'Island-born innovation with a global perspective, bringing clarity to worldwide challenges.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">MoAi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Our Story</h3>
            <div className="prose prose-lg text-foreground/65 space-y-4 text-justify">
              <p>
                MoAi is a Mauritius-born technology company founded by Sendilen and Gopalen, 
                with a bold vision to transform how artificial intelligence integrates into 
                daily life and business. We develop AI-powered systems and automation tools 
                that are not only smart, but deeply adaptable to changing environments.
              </p>
              <p>
                Inspired by the simplicity and resilience of island life, and backed by a 
                passion for purposeful design, MoAi builds technology that grows with you - 
                intuitive, scalable, and future-ready. Whether through enterprise automation, 
                consumer solutions, or intelligent platforms, MoAi exists to turn complexity 
                into clarity.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="slide-up shadow-soft hover:shadow-medium transition-shadow duration-300"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}