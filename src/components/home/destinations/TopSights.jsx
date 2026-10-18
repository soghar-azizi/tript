
import { topSights } from "../../../data/mockData";
import TopSightCard from "./TopSightCard";

export function TopSights() {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <h1 className="font-roboto font-semibold md:text-[40px]">
          Top Sights to See
        </h1>
        <div className="my-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-4">
            {topSights.slice(0, 2).map((data, index) => (
              <TopSightCard
                key={data.id}
                name={data.name}
                bgImage={data.image}
                flag={data.flag}
                className={
                  index === 0 ? "sm:col-span-2 md:col-span-1" : "sm:col-span-1"
                }
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-4">
            {topSights.slice(2).map((data, index) => (
              <TopSightCard
                key={data.id}
                name={data.name}
                bgImage={data.image}
                flag={data.flag}
                className={
                  index === 0
                    ? "sm:col-span-3 md:col-span-1"
                    : index === 1
                      ? "sm:col-span-1"
                      : "sm:col-span-2 md:col-span-1"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
