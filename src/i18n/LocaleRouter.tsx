import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SUPPORTED = ['en', 'fr'] as const;
type Lng = (typeof SUPPORTED)[number];

/**
 * Reads /:lng from the URL, keeps i18n in sync, and
 * redirects legacy ?lang=fr to subpath /fr.
 */
export default function LocaleRouter() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const { pathname, search, hash } = useLocation();

    const urlLng: Lng = pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';

    // 1) If a ?lang=.. exists, redirect to subpath and drop the query param
    useEffect(() => {
        const sp = new URLSearchParams(search);
        const qLang = sp.get('lang') as Lng | null;
        if (qLang && SUPPORTED.includes(qLang)) {
            sp.delete('lang');
            const cleanSearch = sp.toString();
            const pathNoLng = stripLeadingLng(pathname); // handle cases where already /fr
            const target = localePath(qLang, pathNoLng) + (cleanSearch ? `?${cleanSearch}` : '') + hash;
            navigate(target, { replace: true });
        }
    }, [pathname, search, hash, navigate]);

    // 2) Keep i18n in sync with the URL
    useEffect(() => {
        if (i18n.language !== urlLng) {
            i18n.changeLanguage(urlLng);
            document.documentElement.lang = urlLng; // keep <html lang="..."> correct
        }
    }, [urlLng, i18n]);

    return <Outlet />;
}

/** Build a localized path. en => no prefix, fr => /fr + path */
export function localePath(lng: Lng, path: string) {
    const safe = path.startsWith('/') ? path : `/${path}`;
    if (lng === 'en') return safe === '//' ? '/' : safe;
    return safe === '/' ? '/fr' : `/fr${safe}`;
}

/** Remove a leading /fr segment if present. */
export function stripLeadingLng(pathname: string) {
    if (pathname === '/fr' || pathname === '/fr/') return '/';
    if (pathname.startsWith('/fr/')) return pathname.slice(3);
    return pathname;
}

/** Toggle locale for current path, preserving search + hash */
export function switchLocaleUrl(currentPath: string, search: string, hash: string, targetLng: Lng) {
    const pathNoLng = stripLeadingLng(currentPath);
    return localePath(targetLng, pathNoLng) + (search || '') + (hash || '');
}
