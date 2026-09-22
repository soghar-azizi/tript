
export default function FooterColumns({title,links}) {
  return (
    <div>
      <ul className="font-roboto text-white">
        <h3 className="text-sky-blue">{title}</h3>
        {links.map(link=><li key={link}><a href="">{link}</a></li>)}
      </ul>
    </div>
  );
}
