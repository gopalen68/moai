import { Linkedin, Github, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import imgCgo from '@/assets/img_cgo_en.png'
import imgCto from '@/assets/img_cto_en.png'
import { useTranslation } from 'react-i18next'

export default function Team() {
  const { t } = useTranslation('team')

  const founders = [
    {
      key: 'sendilen',
      initials: 'S',
      photoUrl: imgCgo
    },
    {
      key: 'gopalen',
      initials: 'G',
      photoUrl: imgCto,
    }
  ]

  return (
    <section id="team" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t('title')} <span className="gradient-text">{t('title2')}</span>
          </h2>
          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => {
            const name = t(`founders.${founder.key}.name`);
            const role = t(`founders.${founder.key}.role`);
            const bio = t(`founders.${founder.key}.bio`);
            const expertise = t(`founders.${founder.key}.expertise`, { returnObjects: true }) as string[];

            return (
              <Card
                key={founder.key}
                className="slide-up shadow-soft hover:shadow-large transition-all duration-300 group"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                      <AvatarImage src={founder.photoUrl} alt={name} className="rounded-full object-cover object-center transition-transform duration-300 group-hover:scale-110" />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-white">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-bold mb-2">{name}</h3>
                    <p className="text-primary font-medium mb-4">{role}</p>
                  </div>

                  <p className="text-foreground/65 leading-relaxed mb-6">
                    {bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">{t('expertiseHeading')}</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div> */}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}