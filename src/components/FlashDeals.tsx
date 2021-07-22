import FlashDealItem from "./FlashDealItem";
const FlashDeals: React.FC = () => {
  return (
    <div className="row flash-deals__box">
      <div className="col-1-of-4">
        <FlashDealItem />
      </div>
      <div className="col-1-of-4">
        <FlashDealItem />
      </div>
      <div className="col-1-of-4">
        <FlashDealItem />
      </div>
      <div className="col-1-of-4">
        <FlashDealItem />
      </div>
    </div>
  );
};
export default FlashDeals;
