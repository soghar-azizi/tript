export default function TravelDealCard({ title, description }) {
  return (
    <div className="rounded-lg border-2 border-primary p-2 flex flex-col justify-center items-center my-3  gap-2  h-50">
      <h4 className="font-roboto font-semibold text-black md:text-[20px]">
        {title}
      </h4>
      <p className="font-roboto font-normal md:[16px]">{description}</p>
    </div>
  );
}
