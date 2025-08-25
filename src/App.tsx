import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import RootLayout from "./layouts/RootLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EnterpriseAutomation from "./pages/enterprise";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const queryClient = new QueryClient();

const App = () => {
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
          <BrowserRouter>
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="/solutions/enterprise-automation" element={<EnterpriseAutomation />} />
                <Route path="/solutions/consumer-ai-solutions" element={<EnterpriseAutomation />} />
                <Route path="/solutions/intelligent-platforms" element={<EnterpriseAutomation />} />
                <Route path="/solutions/custom-ai-development" element={<EnterpriseAutomation />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
