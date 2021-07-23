import RestaurantItem from "../components/RestaurantItem";
import { restaurantList } from "../assets/restaurantList";
const FeaturedRestaurant: React.FC = () => {
  const restaurantListTop = restaurantList.slice(0, 4);
  const restaurantListBottom = restaurantList.slice(4, 8);
  return (
    <div className="restaurant__box">
      <h3 className="header-secondary">Featured Restaurant</h3>
      <div className="row restaurant-top__box">
        {restaurantListTop.map((item) => {
          return (
            <div className="col-1-of-4" key={item.id + item.name}>
              <RestaurantItem restaurant={item} />
            </div>
          );
        })}
      </div>
      <div className="row restaurant-bottom__box">
        {restaurantListBottom.map((item) => {
          return (
            <div className="col-1-of-4" key={item.id + item.name}>
              <RestaurantItem restaurant={item} />
            </div>
          );
        })}
      </div>
      <div className="restaurant-button">
        <button className="row">
          View All <img src="./img/icon/next.png" alt="next" />
        </button>
      </div>
    </div>
  );
};
export default FeaturedRestaurant;
