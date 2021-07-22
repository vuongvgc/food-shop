import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MealsCarousel from "../components/MealsCarousel";

const PopularMeals: React.FC = () => {
  return (
    <div className="meals-carousel__box">
      <h2 className="header-secondary">Popular items</h2>
      <MealsCarousel />
    </div>
  );
};
export default PopularMeals;
