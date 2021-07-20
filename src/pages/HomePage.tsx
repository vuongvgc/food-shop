import TopNav from "../components/TopNav";
import Header from "../layouts/Header";
import FlashDeals from "../components/FlashDeals";
import HowDoesItWork from "../components/HowDoesItWork";
import PopularMeals from "../components/PopularMeals";
import FeaturedRestaurant from "../components/FeaturedRestaurant";
import SearchFood from "../components/SearchFood";
import FeaturesFood from "../components/FeaturesFood";
import AppDownload from "../components/AppDownload";
import DetailsFood from "../components/DetailsFood";
import CTA from "../components/CTA";
import Footer from "../layouts/Footer";
const HomePage: React.FC = () => {
  return (
    <div className="container">
      <header>
        <TopNav />
        <Header />
      </header>
      <section>
        <FlashDeals />
      </section>
      <section>
        <HowDoesItWork />
      </section>
      <section>
        <PopularMeals />
      </section>
      <section>
        <FeaturedRestaurant />
      </section>
      <section>
        <SearchFood />
        <FeaturesFood />
        <AppDownload />
      </section>
      <section>
        <DetailsFood />
      </section>
      <footer>
        <CTA />
        <Footer />
      </footer>
    </div>
  );
};
export default HomePage;
