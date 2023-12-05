export default function SelectChoice({ children, content }) {
  return (
    <div>
      <div className="group flex items-center justify-start bg-white p-3 gap-4 rounded-xl cursor-pointer border-4 border-white hover:border-purple transition-all duration-150">
        {children}
        <p className="font-medium text-custom-18 text-darkNavy">{content}</p>
      </div>
    </div>
  );
}
