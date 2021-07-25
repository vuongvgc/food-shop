interface FeatureProps {
  feature: string;
  image: string;
}
const FeatureFoodItem: React.FC<FeatureProps> = ({ feature, image }) => {
  return (
    <div className="row feature-food-item__box">
      <div>
        <img src={image} alt={feature} />
      </div>
      <div>
        <h3>{feature}</h3>
      </div>
    </div>
  );
};
export default FeatureFoodItem;
