import MainContent from "./MainContent";
import Navbar from "./navbar";
import bgPatternMobileLight from "./assets/pattern-background-mobile-light.svg";
// import bgPatternMobileDark from './assets/pattern-background-mobile-dark'
// import bgPatternTabletLight from './assets/pattern-background-tablet-light'
// import bgPatternTabletDark from './assets/pattern-background-tablet-dark'
// import bgPatternDesktopLight from './assets/pattern-background-desktop-light'
// import bgPatternDesktopDark from './assets/pattern-background-desktop-dark'
export default function HomePage() {
  return (
    <div className="h-[100vh] bg-lightGray relative px-6">
      <img
        src={bgPatternMobileLight}
        className="absolute right-0 -bottom-0 w-full h-full z-5"
      />
      <Navbar />
      <MainContent />
    </div>
  );
}
