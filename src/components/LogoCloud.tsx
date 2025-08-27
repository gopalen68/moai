import { useState } from 'react'
import wooLogo from '@/assets/woo_logo_color.png'
import odooLogo from '@/assets/odoo_logo_white.png'
import adobeLogo from '@/assets/adobe_logo_red.png'
import pythonLogo from '@/assets/python_logo_color.png'
import workflowLogo from '@/assets/workflow_logo_color.png'

export default function LogoCloud() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
    }

    return (
        <section id="solutions" className="py-10 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 slide-up">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        Our <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
                        Trusted by the world’s most innovative teams
                    </p>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            alt="Odoo"
                            src={odooLogo}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                        />

                        <img
                            alt="Adobe Commerce"
                            src={adobeLogo}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                        />

                        <img
                            alt="WooCommerce"
                            src={wooLogo}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                        />

                        <img
                            alt="Workflow Automation"
                            src={workflowLogo}
                            width={158}
                            height={48}
                            className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
                        />

                        <img
                            alt="Python"
                            src={pythonLogo}
                            width={158}
                            height={48}
                            className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}