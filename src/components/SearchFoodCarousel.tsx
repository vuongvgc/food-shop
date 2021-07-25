import { useTypedSelector } from "../hook/useTypedSelector";
import Slider from "react-slick";
import FoodItem from "./FoodItem";
const SearchFoodCarousel: React.FC = () => {
  const { loading, categories, error } = useTypedSelector(
    (state) => state.categoriesMeal
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      {loading && !error && <div>Loading</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <Slider {...settings}>
          {categories?.map((item: any) => {
            const { strCategory, strCategoryThumb } = item;
            const food = { name: strCategory, image: strCategoryThumb };
            return (
              <div key={food.name}>
                <FoodItem food={food} />
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};
export default SearchFoodCarousel;
