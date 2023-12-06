export default function SelectChoice({ children, content }) {
  return (
    <div>
      <div className="group flex items-center justify-start bg-white p-3 gap-4 md:gap-8 md:p-3 rounded-xl cursor-pointer border-4 border-white hover:border-purple transition-all duration-150 md:text-custom-28 custom-shadow">
        {children}
        <p className="font-medium text-custom-18 md:text-custom-28 text-darkNavy">
          {content}
        </p>
      </div>
    </div>
  );
}
