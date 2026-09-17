
import DealSwiper from "../Ui/DealSwiper";
import { slidesData } from "../components/data/UserInfo";

const componentData = slidesData;

export function DealSwiperHouses() {
  return <DealSwiper  data={componentData} />;
}