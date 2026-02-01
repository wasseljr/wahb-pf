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
          { label: 'Home', href: '#top' },
          { label: 'About', href: '#education' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
      />
      <ThemeToggle />

      {/* Main Content */}
      <PortfolioContent />

      {/* Contact Section - FlowingMenu */}
      <div id="contact">
        <FlowingMenu
          items={[
            { link: 'https://www.linkedin.com/in/wahb-menasria-3b9573274/', text: 'LinkedIn', image: '/linkedin.svg' },
            { link: 'https://www.instagram.com/menasria22/', text: 'Instagram', image: '/Instagram.svg' },
            { link: 'tel:+213782131668', text: 'Phone', image: '/Call.svg' },
            { link: 'mailto:menasriawahb@gmail.com', text: 'Email', image: '/Message.svg' }
          ]}
        />
      </div>
    </>
  );
}

