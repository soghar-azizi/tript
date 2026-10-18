
export function CategoryTab({ icon, name, onClick, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={`flex hover:text-black shrink-0 whitespace-nowrap cursor-pointer gap-1 items-center justify-left md:justify-center font-medium text-lg ${className}`}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
}