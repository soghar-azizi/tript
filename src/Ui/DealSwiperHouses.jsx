import DealSwiper from "../Ui/DealSwiper";
import { slidesData } from "../components/data/UserInfo";

const componentData = slidesData;

export function DealSwiperHouses() {
  return (
    <div className="bg-medium-grey py-10">
      <div className="w-[90%] mx-auto">
        <DealSwiper data={componentData} title={"Deals For Weakend"} />
      </div>
    </div>
  );
}

