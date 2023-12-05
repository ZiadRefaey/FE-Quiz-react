import SwitchButton from "./SwitchButton";
// import iconSunLight from "./assets/icon-sun-light.svg";
// import iconMoonLight from "./assets/icon-moon-light.svg";
import iconSunDark from "./assets/icon-sun-dark.svg";
import iconMoonDark from "./assets/icon-moon-dark.svg";
export default function Navbar() {
  return (
    <header className="w-full py-4 relative z-10">
      <div className="flex items-center justify-between">
        <div className="w-5"></div>
        <div className="flex gap-2 justify-between items-center">
          <img src={iconSunDark} className="w-[0.875rem] h-[0.875rem]" />
          <SwitchButton />
          <img src={iconMoonDark} className="w-[0.75rem] h-[0.75rem]" />
        </div>
      </div>
    </header>
  );
}
