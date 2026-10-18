
export function SearchField({
  items,
  type = "text",
  className = "",
  onClick,

}) {

  return (
    <div
      className={`text-base font-roboto font-medium text-wrap ${className}`}
      onClick={onClick}
    >
      <label className="text-black">{items[0]}</label>

      <div className="flex gap-1 text-gray-500">
        {items.slice(1).map((text, index) => (
          <input
            key={index}
            required
            placeholder={text}
            className="border border-gray-300 rounded-xl md:border-0 p-2 outline-0 w-full"
            type={type}
          />
        ))}
      </div>
    </div>
  );
}
