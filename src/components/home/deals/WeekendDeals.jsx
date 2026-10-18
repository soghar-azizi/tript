import DealSwiper from "./DealSwiper";
import { weekendDeals } from "../../../data/mockData";

export function WeekendDeals() {
  return (
    <div className="bg-medium-grey py-10">
      <div className="w-[90%] mx-auto">
        <DealSwiper data={weekendDeals} title={"Deals For Weekend"} />
      </div>
    </div>
  );
}

