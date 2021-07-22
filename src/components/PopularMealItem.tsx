interface popularMeal {
  meal: {
    title: string;
    image: string;
    location: string;
    price: number;
  };
}
const PopularMealItem: React.FC<popularMeal> = ({ meal }) => {
  const { title, image, location, price } = meal;
  return (
    <div className="popular-meal__item">
      <img className="popular-meal__image" src={image} alt={title} />
      <h3 className="header-tertiary">{title}</h3>
      <div className="row popular-meal__name ">
        <img src="./img/icon/location-orange.png" alt="location" />
        <p>{location}</p>
      </div>
      <p className="popular-meal__price">${price}</p>
      <button className="popular-meal__button">
        <a href="/">Order Now</a>
      </button>
    </div>
  );
};
export default PopularMealItem;
