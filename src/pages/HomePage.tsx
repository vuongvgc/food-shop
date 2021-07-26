import TopNav from "../components/TopNav";
import Header from "../layouts/Header";
import FlashDeals from "../layouts/FlashDeals";
import HowDoesItWork from "../layouts/HowDoesItWork";
import PopularMeals from "../layouts/PopularMeals";
import FeaturedRestaurant from "../layouts/FeaturedRestaurant";
import SearchFood from "../layouts/SearchFood";
import FeaturesFood from "../layouts/FeaturesFood";
// import AppDownload from "../layouts/AppDownload";
import DetailsFood from "../layouts/DetailsFood";
import CTA from "../layouts/CTA";
import Footer from "../layouts/Footer";
const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <div className="container">
          <TopNav />
        </div>
        <div className="container-fluid header-hero__box">
          <Header />
        </div>
      </header>
      <section className="container">
        <FlashDeals />
      </section>
      <section className="container-fluid">
        <HowDoesItWork />
      </section>
      <section className="container-fluid">
        <PopularMeals />
      </section>
      <section className="container">
        <FeaturedRestaurant />
      </section>
      <section>
        <SearchFood />
        <FeaturesFood />
        {/* <AppDownload /> */}
      </section>
      <section className="container">
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
