import FeatureFoodItem from "../components/FeatureFoodItem";
const FeaturesFood: React.FC = () => {
  return (
    <div className="container-fluid feature-food__box">
      <div className="feature-food__content">
        <div className="col-1-of-3">
          <FeatureFoodItem
            feature="Daily Discounts"
            image="./img/icon/daily-discound.png"
          />
        </div>
        <div className="col-1-of-3">
          <FeatureFoodItem
            feature="Live Tracing"
            image="./img/icon/location-big.png"
          />
        </div>
        <div className="col-1-of-3">
          <FeatureFoodItem
            feature="Quick Delivery"
            image="./img/icon/time-1.png"
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturesFood;
