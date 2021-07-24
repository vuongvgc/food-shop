import FeatureFoodItem from "../components/FeatureFoodItem";
const FeaturesFood: React.FC = () => {
  return (
    <div className="container-fluid feature-food__box">
      <div className="feature-food__content">
        <div className="col-1-of-3">
          <FeatureFoodItem />
        </div>
        <div className="col-1-of-3">
          <FeatureFoodItem />
        </div>
        <div className="col-1-of-3">
          <FeatureFoodItem />
        </div>
      </div>
    </div>
  );
};
export default FeaturesFood;
