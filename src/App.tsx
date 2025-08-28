import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import { createChat } from "@n8n/chat";
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import RootLayout from "@/layouts/RootLayout";
import LocaleRouter from "@/i18n/LocaleRouter";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EnterpriseAutomation from "./pages/EnterpriseAutomation";
import ConsumerAISolutions from "./pages/ConsumerAiSolutions";
import IntelligentPlatforms from "./pages/IntelligentPlatforms";
import CustomAIDevelopment from "./pages/CustomAiDevelopment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import "@n8n/chat/style.css";

const queryClient = new QueryClient();

const App = () => {

  function HtmlLangUpdater() {
    const { i18n } = useTranslation();
    useEffect(() => {
      document.documentElement.lang = i18n.language.startsWith('fr') ? 'fr' : 'en';
    }, [i18n.language]);
    return null;
  }

  useEffect(() => {
    createChat({
      webhookUrl: 'https://ecommercemu.app.n8n.cloud/webhook/499666c3-d807-4bb7-8195-43932f64a91f/chat',
      target: '#custom-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        "Hi there!",
        "My name is MoAi. How can i assist you today?"
      ]
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HelmetProvider>
            <HtmlLangUpdater />
            <BrowserRouter>
              <Routes>
                <Route element={<RootLayout />}>

                  {/* English root without prefix */}
                  <Route element={<LocaleRouter />}>
                    <Route path="/" element={<Index />} />
                    <Route path="solutions/enterprise-automation" element={<EnterpriseAutomation />} />
                    <Route path="solutions/consumer-ai-solutions" element={<ConsumerAISolutions />} />
                    <Route path="solutions/intelligent-platforms" element={<IntelligentPlatforms />} />
                    <Route path="solutions/custom-ai-development" element={<CustomAIDevelopment />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="terms-of-service" element={<TermsAndConditions />} />
                    <Route path="cookie-policy" element={<CookiePolicy />} />
                    <Route path="blogs" element={<Blog />} />
                    <Route path="support" element={<Support />} />
                  </Route>

                  {/* French (and future langs) under /:lng */}
                  <Route path="fr/*" element={<LocaleRouter />}>
                    <Route index element={<Index />} />
                    <Route path="solutions/automatisation-entreprise" element={<EnterpriseAutomation />} />
                    <Route path="solutions/solutions-ia-consommateur" element={<ConsumerAISolutions />} />
                    <Route path="solutions/plateformes-intelligentes" element={<IntelligentPlatforms />} />
                    <Route path="solutions/developpement-ia-customise" element={<CustomAIDevelopment />} />
                    <Route path="politique-de-confidentialite" element={<PrivacyPolicy />} />
                    <Route path="conditions-d-utilisation" element={<TermsAndConditions />} />
                    <Route path="politique-de-cookies" element={<CookiePolicy />} />
                    <Route path="blogs" element={<Blog />} />
                    <Route path="support" element={<Support />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </HelmetProvider>

          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
