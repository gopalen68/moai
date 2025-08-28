import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { stripLeadingLng, localePath } from '@/i18n/LocaleRouter';

const SITE = import.meta.env.VITE_SITE_URL || 'https://www.moai.mu';

export default function SeoI18n() {
    const { pathname, search, hash } = useLocation();
    const params = useParams();
    const lng = (params.lng as 'en' | 'fr') || 'en';

    // path without locale prefix
    const pathNoLng = stripLeadingLng(pathname);

    // Canonical = current language’s subpath
    const canonical = SITE + localePath(lng, pathNoLng) + search + hash;

    // Alternates
    const altEn = SITE + localePath('en', pathNoLng) + search + hash;
    const altFr = SITE + localePath('fr', pathNoLng) + search + hash;

    const ogLocale = lng === 'fr' ? 'fr_FR' : 'en_US';
    const ogAlt = lng === 'fr' ? 'en_US' : 'fr_FR';

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
            <link rel="alternate" hrefLang="en" href={altEn} />
            <link rel="alternate" hrefLang="fr" href={altFr} />
            <link rel="alternate" hrefLang="x-default" href={altEn} />
            <meta property="og:locale" content={ogLocale} />
            <meta property="og:locale:alternate" content={ogAlt} />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'MoAi',
                    url: SITE,
                    availableLanguage: ['en', 'fr'],
                })}
            </script>
        </Helmet>
    );
}

