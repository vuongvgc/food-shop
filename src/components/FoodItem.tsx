interface FoodProps {
  food: {
    name: string;
    image: string;
  };
}
const FoodItem: React.FC<FoodProps> = ({ food }) => {
  const { name, image } = food;
  return (
    <div className="food-item__box">
      <div className="food-item__img">
        <img src={image} alt={name} />
      </div>
      <h3 className="header-tertiary">{name}</h3>
    </div>
  );
};
export default FoodItem;
