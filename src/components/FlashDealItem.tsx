const FlashDealItem: React.FC = () => {
  return (
    <div className="flash-deal__item">
      <div className="flash-deal__image">
        <img src="./img/food-flash-deals-1.png" alt="Greys Vage" />
        <div className="row flash-deal__discount">
          <h3>15</h3>
          <div>
            <p className="discount-unit">%</p>
            <p className="discount-status">Off</p>
          </div>
        </div>
      </div>
      <div className="flash-deal__text">
        <h3>Greys Vage</h3>
        <p>6 Days Remaining</p>
      </div>
    </div>
  );
};
export default FlashDealItem;
