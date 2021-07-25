interface contentProps {
  name: string;
  description: string;
  link: string;
}
const DetailFoodItemContent: React.FC<contentProps> = ({
  name,
  description,
  link,
}) => {
  return (
    <div className="detail-food__content">
      <div className="detail-food__text">
        <h2 className="header-secondary">
          <span>Best deals </span>
          {name}
        </h2>
        <p>{description}</p>
      </div>
      <div className="detail-food__button">
        <button>
          <a href={link}>
            Proceed to order
            <img src="./img/icon/next.png" alt="next" />
          </a>
        </button>
      </div>
    </div>
  );
};
export default DetailFoodItemContent;
