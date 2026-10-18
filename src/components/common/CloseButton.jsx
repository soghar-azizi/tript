export default function CloseButton({onClick,className}) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <i className="fa-solid fa-xmark"></i>
    </button>
  );
}
