import FlashDealItem from "./FlashDealItem";
import { flashDealList } from "../assets/flashDealList";
const FlashDeals: React.FC = () => {
  console.log(flashDealList);
  return (
    <div className="row flash-deals__box">
      {flashDealList.map((meal) => {
        return (
          <div className="col-1-of-4" key={meal.id + meal.name}>
            <FlashDealItem meal={meal} />
          </div>
        );
      })}
    </div>
  );
};
export default FlashDeals;
