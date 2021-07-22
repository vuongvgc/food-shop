interface flashDeal {
  meal: {
    name: string;
    image: string;
    discount: number;
    expired: number;
  };
}
const FlashDealItem: React.FC<flashDeal> = ({ meal }) => {
  const { name, image, discount, expired } = meal;
  return (
    <div className="flash-deal__item">
      <div className="flash-deal__image">
        <img src={image} alt={name} />
        <div className="row flash-deal__discount">
          <h3>{discount}</h3>
          <div>
            <p className="discount-unit">%</p>
            <p className="discount-status">Off</p>
          </div>
        </div>
      </div>
      <div className="flash-deal__text">
        <h3>{name}</h3>
        <p>{expired} Days Remaining</p>
      </div>
    </div>
  );
};
export default FlashDealItem;
