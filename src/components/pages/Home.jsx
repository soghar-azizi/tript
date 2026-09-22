// =======================================imges=======================================
import HeroSection from "../../Ui/HeroSection";
import { Facilties } from "../../Ui/Facilties";
import { TopSight } from "../../Ui/TopSights";
import { TrendingSection } from "../../Ui/TrendingSection";
import TravelDeals from "../../Ui/TravelDeals";
import TopThingsToDo from "../../Ui/TopThingsToDo";
import ExploreTripo from "../../Ui/ExploreTripo";
import { GuestsFavoritRooms } from "../../Ui/GuestsFavoritRooms";
import { DealSwiperHouses } from "../../Ui/DealSwiperHouses";
import { HotelIdeas } from "../../Ui/HotelIdeas";
import { Footer } from "../../Ui/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Facilties />
      <TrendingSection />
      <DealSwiperHouses />
      <TravelDeals />
      <TopSight />
      <TopThingsToDo />
      <ExploreTripo />
      <GuestsFavoritRooms />
      <HotelIdeas />
      <Footer />
    </>
  );
}
