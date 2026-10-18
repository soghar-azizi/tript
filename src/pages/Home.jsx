import HeroSection from "../components/home/hero/HeroSection";
import { Facilities } from "../components/home/Facilities";
import { TopSights } from "../components/home/destinations/TopSights";
import { TrendingDestinations } from "../components/home/destinations/TrendingDestinations";
import TravelDeals from "../components/home/deals/TravelDeals";
import TopThingsToDo from "../components/home/destinations/TopThingsToDo";
import ExploreInMotion from "../components/home/explore/ExploreInMotion";
import { GuestFavoriteRooms } from "../components/home/deals/GuestFavoriteRooms";
import { WeekendDeals } from "../components/home/deals/WeekendDeals";
import { Testimonials } from "../components/home/testimonials/Testimonials";
import { Footer } from "../components/layout/footer/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Facilities />
      <TrendingDestinations />
      <WeekendDeals />
      <TravelDeals />
      <TopSights />
      <TopThingsToDo />
      <ExploreInMotion />
      <GuestFavoriteRooms />
      <Testimonials />
      <Footer />
    </>
  );
}
