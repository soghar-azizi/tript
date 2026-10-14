export default function CloseBtn({onClick,className}) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <i class="fa-solid fa-xmark"></i>
    </button>
  );
}
