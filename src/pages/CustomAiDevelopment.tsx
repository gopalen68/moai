import { Link } from 'react-router-dom'
import { ScrollToHash } from '@/lib/utils';
import { Target, Users, Lightbulb, Globe, ArrowRight, CloudUpload, LockIcon, RefreshCw, Fingerprint, PlayIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import heroBg from '@/assets/hero-bg.jpg'

const features = [
    {
        icon: Target,
        title: 'Bespoke Solutions',
        description: 'We design AI systems tailored to your unique business challenges—ensuring every solution is built with your goals in mind.'
    },
    {
        icon: Globe,
        title: 'Integration Support',
        description: 'Seamlessly integrate AI into your existing tools, workflows, and platforms with minimal disruption and maximum value.'
    },
    {
        icon: Lightbulb,
        title: 'Ongoing Optimization',
        description: 'Our AI solutions evolve over time—continuously learning, adapting, and improving as your business grows.'
    },
    {
        icon: Users,
        title: 'Collaborative Development',
        description: 'We work hand-in-hand with your team to co-create AI that feels natural, intuitive, and perfectly aligned with your vision.'
    }
]

const usecases = [
    {
        name: 'Industry-Specific AI',
        description:
            'Develop custom models for finance, healthcare, retail, manufacturing, and more—tailored to domain-specific needs.',
        icon: LockIcon,
    },
    {
        name: 'Workflow Automation',
        description:
            'Create AI-powered workflows that automate repetitive tasks, approvals, and data handling unique to your operations.',
        icon: CloudUpload,
    },
    {
        name: 'Intelligent Integrations',
        description:
            'Embed AI into your existing platforms—CRM, ERP, or customer portals—for smarter, context-aware performance.',
        icon: RefreshCw,
    },
    {
        name: 'Long-Term Evolution',
        description:
            'Ensure your AI solution remains future-proof with continuous updates, performance monitoring, and optimization.',
        icon: Fingerprint,
    },
]

export default function CustomAIDevelopment() {
    return (
        <div className="min-h-screen">
            <ScrollToHash />
            <section id="home" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBg})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/10 rounded-full blur-xl float"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl float" style={{ animationDelay: '-2s' }}></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl float" style={{ animationDelay: '-4s' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <div className="fade-in">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                            <span className="">Custom AI Development</span>
                        </h1>

                        <p className="text-md sm:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Tailored AI solutions designed specifically for your unique challenges and business requirements—built to deliver measurable impact.
                        </p>
                    </div>
                </div>

                {/* Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
            </section>

            <section id="about" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 slide-up">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Key <span className="gradient-text">Features</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
                    </div>

                    <div className="grid gap-16 items-center">
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
                                            <h4 className="text-base/7 font-semibold text-foreground">{feature.title}</h4>
                                        </div>
                                        <p className="text-base/4 text-foreground/65 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto">
                        <div className="text-center mb-16 slide-up">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                How <span className="gradient-text">It Works</span>
                            </h2>
                            <p className="mt-6 text-xl/8 text-foreground/65">
                                We create AI that’s as unique as your business—tailored, integrated, and continuously optimized for results.
                            </p>
                            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
                        </div>
                        <div className="mx-auto max-w-4xl">
                            <div className="text-base/7 text-foreground/65">
                                <ul role="list" className="mt-8 space-y-8 text-center text-foreground/65">
                                    <li className="flex flex-col gap-x-3 space-y-2">
                                        <span>
                                            <strong className="font-semibold text-lg text-foreground">Step 1: Design Bespoke Solutions</strong>
                                        </span>
                                        <p className="text-md text-foreground/65 leading-relaxed">
                                            We begin by understanding your goals and challenges, then design AI tailored to your exact needs.
                                        </p>
                                    </li>
                                    <li className="flex flex-col gap-x-3 space-y-2">
                                        <span>
                                            <strong className="font-semibold text-lg text-foreground">Step 2: Integrate Seamlessly</strong>
                                        </span>
                                        <p className="text-md text-foreground/65 leading-relaxed">
                                            Our team ensures smooth integration with your existing systems and workflows for maximum efficiency.
                                        </p>
                                    </li>
                                    <li className="flex flex-col gap-x-3 space-y-2">
                                        <span>
                                            <strong className="font-semibold text-lg text-foreground">Step 3: Optimize Continuously</strong>
                                        </span>
                                        <p className="text-md text-foreground/65 leading-relaxed">
                                            We don’t stop at deployment—your AI evolves with ongoing monitoring, fine-tuning, and enhancements.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 slide-up">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Use <span className="gradient-text">Cases</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {usecases.map((usecase) => (
                                <div key={usecase.name} className="relative pl-16">
                                    <dt className="text-lg font-semibold text-foreground">
                                        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                                            <usecase.icon aria-hidden="true" className="size-6 text-primary" />
                                        </div>
                                        {usecase.name}
                                    </dt>
                                    <dd className="mt-2 text-md text-foreground/65">{usecase.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="max-w-5xl mx-auto  text-center mt-16 slide-up" style={{ animationDelay: '0.8s' }}>
                    <Card className=" p-8 shadow-medium">
                        <h3 className="text-xl font-semibold mb-4">Ready to Build Your Custom AI?</h3>
                        <p className="text-foreground/65 mb-6">
                            Let’s create AI solutions that are uniquely yours—crafted to solve your toughest challenges.
                        </p>
                        <Link to="/#contact">
                            <Button size="lg" className="shadow-medium text-white">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </Card>
                </div>
            </section>

        </div>
    );
}
