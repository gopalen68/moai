import { Linkedin, Github, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const founders = [
  {
    name: 'Sendilen',
    role: 'Co-Founder & CEO',
    bio: 'Visionary leader with a passion for transformative AI solutions. Focused on building technology that bridges the gap between complex AI capabilities and real-world applications.',
    initials: 'S',
    expertise: ['AI Strategy', 'Product Vision', 'Business Development']
  },
  {
    name: 'Gopalen',
    role: 'Co-Founder & CTO',
    bio: 'Technical architect driving MoAI\'s innovative AI systems. Expert in building scalable, adaptable technologies that evolve with user needs and business requirements.',
    initials: 'G',
    expertise: ['AI Architecture', 'Workflow Automation', 'System Design']
  }
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
            The visionary minds behind MoAI, bringing together expertise in AI innovation and strategic business development.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={founder.name}
              className="slide-up shadow-soft hover:shadow-large transition-all duration-300 group"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                    <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-white">
                      {founder.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                </div>

                <p className="text-foreground/65 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Expertise</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {founder.expertise.map((skill) => (
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
          ))}
        </div>

        {/* <div className="text-center mt-16 slide-up" style={{ animationDelay: '0.6s' }}>
          <Card className="inline-block p-8 shadow-medium max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">Join Our Journey</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals who share our vision of 
              transforming the world through innovative AI solutions.
            </p>
            <Button variant="outline" className="mr-4">
              View Careers
            </Button>
            <Button>
              Partner With Us
            </Button>
          </Card>
        </div> */}
      </div>
    </section>
  )
}