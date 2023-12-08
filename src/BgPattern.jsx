import React from "react";
import bgPatternMobileLight from "./assets/pattern-background-mobile-light.svg";
import bgPatternMobileDark from "./assets/pattern-background-mobile-dark.svg";
import bgPatternTabletLight from "./assets/pattern-background-tablet-light.svg";
import bgPatternTabletDark from "./assets/pattern-background-tablet-dark.svg";
import bgPatternDesktopLight from "./assets/pattern-background-desktop-light.svg";
import bgPatternDesktopDark from "./assets/pattern-background-desktop-dark.svg";

export default function bgPattern({ darkTheme }) {
  let bgPattern;
  if (!darkTheme) bgPattern = bgPatternDesktopLight;
  if (darkTheme) bgPattern = bgPatternDesktopDark;

  return (
    <img
      src={bgPattern}
      className="absolute right-0 -bottom-0 w-full h-full z-5"
    />
  );
}
