
export function DateButton({ date, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        whitespace-nowrap
        px-3 py-1.5
        rounded-full border
        text-xs transition
        ${
          active
            ? "bg-primary text-white border-primary"
            : "bg-white text-gray-500 border-light-grey hover:bg-gray-100"
        }
      `}
    >
      {date}
    </button>
  );
}