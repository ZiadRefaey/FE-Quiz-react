export default function SwitchButton() {
  return (
    <label className="switch w-8 h-5 md:w-12 md:h-7">
      <input type="checkbox" />
      <span className="slider round before:w-3 before:h-3 md:before:w-5 md:before:h-5"></span>
    </label>
  );
}
