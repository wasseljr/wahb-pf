import Antigravity from "@/components/Antigravity";
import PillNav from "@/components/PillNav";
import ThemeToggle from "./theme-toggle";
import TopHeader from "@/components/TopHeader";
import PortfolioContent from "@/components/PortfolioContent";
import FlowingMenu from "@/components/FlowingMenu";
export default function Home() {
  return (
    <>
      {/* Background Layer - Fixed */}
      <div className="fixed inset-0 -z-10">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Header Elements */}
      <TopHeader />
      <PillNav
        logo="/Face.svg"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Projects', href: '/projects' },
          { label: 'Contact', href: '/contact' }
        ]}
      />
      <ThemeToggle />

      {/* Main Content */}
      <PortfolioContent />
      <FlowingMenu

        items={[
          { link: 'https://linkedin.com/in/yourprofile', text: 'LinkedIn', image: '/linkedin-icon.svg' },
          { link: 'https://instagram.com/yourprofile', text: 'Instagram', image: '/instagram-icon.svg' },
          { link: 'tel:+1234567890', text: 'Phone', image: '/phone-icon.svg' },
          { link: 'mailto:your.email@example.com', text: 'Email', image: '/email-icon.svg' }
        ]}
      />
    </>
  );
}

