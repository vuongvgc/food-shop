import { useActions } from "../hook/useActions";
import { useEffect } from "react";
import SearchFoodCarousel from "../components/SearchFoodCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SearchFood: React.FC = () => {
  const { getCategoriesMeal } = useActions();
  useEffect(() => {
    getCategoriesMeal();
  });
  return (
    <div className="search-food__box">
      <div className="container row search-food__title">
        <div className="search-food">
          <h2 className="header-secondary ">Search by Food</h2>
        </div>
        <div className="row search-food__button">
          <div className="row search-food__text">
            <p>View All</p>
            <img src="./img/icon/view-all.png" alt="next" />
          </div>
          <div className="row">
            <div className="button-cycle">
              <img src="./img/icon/pre.png" alt="pre" />
            </div>
            <div className="button-cycle">
              <img src="./img/icon/next-search-food.png" alt="next" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SearchFoodCarousel />
      </div>
    </div>
  );
};
export default SearchFood;
