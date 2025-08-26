import { Link } from 'react-router-dom'
import { ScrollToHash } from '@/lib/utils';
import { Target, Users, Lightbulb, Globe, ArrowRight, CloudUpload, LockIcon, RefreshCw, Fingerprint, PlayIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import heroBg from '@/assets/hero-bg.jpg'

const features = [
    {
        icon: Target,
        title: 'Data Integration',
        description: 'Seamlessly unify data from multiple sources into one ecosystem—ensuring consistency, accuracy, and accessibility across your business.'
    },
    {
        icon: Globe,
        title: 'Cross-Platform Sync',
        description: 'Enable real-time synchronization across devices, applications, and systems for a truly connected digital experience.'
    },
    {
        icon: Lightbulb,
        title: 'Unified Analytics',
        description: 'Gain a single, intelligent view of your operations with analytics that aggregate and interpret data across all platforms.'
    },
    {
        icon: Users,
        title: 'Scalable Ecosystem',
        description: 'Build an adaptable AI ecosystem that grows with your needs and supports both current and future technologies.'
    }
]

const usecases = [
    {
        name: 'Enterprise Data Hub',
        description:
            'Integrate data silos into a central hub that provides a unified source of truth for business decisions.',
        icon: LockIcon,
    },
    {
        name: 'Omnichannel Experience',
        description:
            'Deliver consistent user experiences across mobile, web, and connected devices with cross-platform AI synchronization.',
        icon: CloudUpload,
    },
    {
        name: 'Business Intelligence',
        description:
            'Leverage unified analytics to monitor KPIs, predict trends, and make data-driven strategic decisions.',
        icon: RefreshCw,
    },
    {
        name: 'Collaboration & Productivity',
        description:
            'Connect teams and tools within a single intelligent platform, improving communication, efficiency, and outcomes.',
        icon: Fingerprint,
    },
]

export default function IntelligentPlatforms() {
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
                            <span className="">Intelligent Platforms</span>
                        </h1>

                        <p className="text-md sm:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive AI ecosystems that connect multiple touchpoints and deliver
                            unified, intelligent experiences across every channel.
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
                                Intelligent Platforms unify data, applications, and insights into a single ecosystem that works seamlessly across your organization.
                            </p>
                            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
                        </div>
                        <div className="mx-auto max-w-4xl">
                            <div className="text-base/7 text-foreground/65">
                                <ul role="list" className="mt-8 space-y-8 text-center text-foreground/65">
                                    <li className="flex flex-col gap-x-3 space-y-2">
                                        <span>
                                            <strong className="font-semibold text-lg text-foreground">Step 1: Connect & Integrate</strong>
                                        </span>
                                        <p className="text-md text-foreground/65 leading-relaxed">
                                            Bring together data from multiple sources, systems, and applications into one cohesive ecosystem.
                                        </p>
                                    </li>
                                    <li className="flex flex-col gap-x-3 space-y-2">
                                        <span>
                                            <strong className="font-semibold text-lg text-foreground">Step 2: Sync Across Platforms</strong>
                                        </span>
                                        <p className="text-md text-foreground/65 leading-relaxed">
                                            Enable real-time collaboration and synchronization across platforms, ensuring a connected digital environment.
                                        </p>
                                    </li>
                                    <li className="flex flex-col gap-x-3 space-y-2">
                                        <span>
                                            <strong className="font-semibold text-lg text-foreground">Step 3: Analyze & Unify</strong>
                                        </span>
                                        <p className="text-md text-foreground/65 leading-relaxed">
                                            Leverage unified analytics to interpret data, uncover insights, and create intelligent, actionable strategies.
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
                        <h3 className="text-xl font-semibold mb-4">Ready to Build a Smarter Ecosystem?</h3>
                        <p className="text-foreground/65 mb-6">
                            Let's explore how MoAi can design intelligent platforms that unify and power your business.
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
