
export default function FoodCard({name,bgImage}) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-cover h-50 rounded-lg"
      ></div>
      <p className="mt-1 font-roboto font-semibold">{name}</p>
    </div>
  );
}
