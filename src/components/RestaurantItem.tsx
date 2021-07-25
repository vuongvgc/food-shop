interface restaurant {
  restaurant: {
    name: string;
    logo: string;
    image: string;
    isOpen: boolean;
    discount: number;
    delivery: string;
    review: number;
  };
}
const RestaurantItem: React.FC<restaurant> = ({ restaurant }) => {
  const { name, logo, image, isOpen, discount, delivery, review } = restaurant;
  return (
    <div className="restaurant-item__box">
      <div className="restaurant-item__image">
        <img src={image} alt={name} />
        <div className="row restaurant-item__tag">
          <p className="item__discount">
            <img src="./img/icon/tag.png" alt="tag" />
            {discount}% off
          </p>
          <p className="item__time">
            <img src="./img/icon/time.png" alt="time" />
            {delivery}
          </p>
        </div>
      </div>
      <div className="row restaurant-item__infor">
        <div className="restaurant-item__logo">
          <img src={logo} alt="food world logo" />
        </div>
        <div className="restaurant-item__text">
          <h3 className="header-tertiary">{name}</h3>
          <p>
            <img src="./img/icon/start.png" alt="start" />
            {review}
          </p>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "restaurant-item__status restaurant-open"
            : "restaurant-item__status restaurant-close"
        }
      >
        <p>Opens {isOpen ? "Now" : "Tomorrow"}</p>
      </div>
    </div>
  );
};
export default RestaurantItem;
