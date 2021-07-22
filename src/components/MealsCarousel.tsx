import Slider from "react-slick";
import PopularMealItem from "./PopularMealItem";
import { popularMealList } from "../assets/popularMealList";
const MealsCarousel: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {popularMealList.map((meal) => {
          return (
            <div key={meal.id + meal.title}>
              <PopularMealItem meal={meal} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default MealsCarousel;
