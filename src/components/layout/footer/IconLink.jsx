export function IconLink({ icon, className }) {
  return (
    <a
      className={`${className} flex justify-center items-center p-2.5  w-[90%] h-[90%]`}
    >
      {icon}
    </a>
  );
}
