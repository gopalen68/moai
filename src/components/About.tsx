import { Target, Users, Lightbulb, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'


export default function About() {
  const { t } = useTranslation('about')

  const features = [
    {
      icon: Target,
      title: t('features.purposefulDesign.title'),
      description: t('features.purposefulDesign.description')
    },
    {
      icon: Users,
      title: t('features.adaptableSystems.title'),
      description: t('features.adaptableSystems.description')
    },
    {
      icon: Lightbulb,
      title: t('features.smartInnovation.title'),
      description: t('features.smartInnovation.description')
    },
    {
      icon: Globe,
      title: t('features.globalVision.title'),
      description: t('features.globalVision.description')
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t('title')} <span className="gradient-text">{t('title2')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">{t('ourStory')}</h3>
            <div className="prose prose-lg text-foreground/65 space-y-4 text-justify">
              <p>
                {t('paragraph1')}
              </p>
              <p>
                {t('paragraph2')}
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