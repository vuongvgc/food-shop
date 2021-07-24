interface foodProps {
  image: string;
  name: string;
}
const DetailFoodItemImage: React.FC<foodProps> = ({ image, name }) => {
  return (
    <div className="detail-food__image">
      <img src={image} alt={name} />
    </div>
  );
};

export default DetailFoodItemImage;
