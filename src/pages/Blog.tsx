import { ScrollToHash } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Blog() {
    const { t } = useTranslation('comingsoon')
    return (
        <div className="min-h-screen">
            <ScrollToHash />
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/10 rounded-full blur-xl float"></div>
                    <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl float" style={{ animationDelay: '-2s' }}></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl float" style={{ animationDelay: '-4s' }}></div>
                </div>
                <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-10 pb-24 text-center sm:py-16 md:py-20">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        {t('blogs.badge')}
                    </span>

                    <h1 className="max-w-4xl text-4xl text-center font-bold tracking-tight sm:text-4xl md:text-5xl">
                        {t('blogs.title')} <span className="bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">{t('blogs.title2')}</span> {t('blogs.title3')}
                    </h1>

                    <p className="mt-4 max-w-2xl text-balance text-white/80">
                        {t('blogs.subtitle')}
                    </p>
                </section>

                {/* Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
            </section>
        </div>
    );
}