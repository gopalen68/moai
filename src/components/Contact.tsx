import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@moai.mu',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+230 XXX XXXX',
    description: 'Mon-Fri from 8am to 5pm'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Mauritius',
    description: 'Island innovation hub'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    })
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start a conversation about your vision.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="slide-up shadow-soft hover:shadow-medium transition-shadow duration-300"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 slide-up shadow-soft" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Why Choose MoAi?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Expert AI consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Tailored solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Ongoing support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Proven results
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="slide-up shadow-medium" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full shadow-medium group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}