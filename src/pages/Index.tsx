import { ScrollToHash } from '@/lib/utils'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Solutions from '@/components/Solutions'
import Team from '@/components/Team'
import ChatAI from '@/components/ChatAI'



const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollToHash />
      <Hero />
      <About />
      <Solutions />
      <Team />
      <ChatAI />
    </div>
  );
};

export default Index;