import DetailFoodItemContent from "../components/DetailFoodItemContent";
import DetailFoodItemImage from "../components/DetailFoodItemImage";
const DetailsFood: React.FC = () => {
  return (
    <div className="detail-food__box">
      <div className="row detail-food__item ">
        <div className="col-1-of-3">
          <DetailFoodItemContent
            name="Crispy Sandwiches"
            description="Enjoy the large size of sandwiches. Complete 
            perfect slice of sandwiches."
            link="/"
          />
        </div>
        <div className="col-2-of-3">
          <DetailFoodItemImage
            image="./img/scispy-sandswich.png"
            name="scispy-sandswich"
          />
        </div>
      </div>
      <div className="row detail-food__item ">
        <div className="col-2-of-3">
          <DetailFoodItemImage image="./img/chicken.png" name="Fried Chicken" />
        </div>
        <div className="col-1-of-3">
          <DetailFoodItemContent
            name="Fried Chicken"
            description="Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out 
            best deals for fried chicken."
            link="/"
          />
        </div>
      </div>
      <div className="row detail-food__item ">
        <div className="col-1-of-3">
          <DetailFoodItemContent
            name="Pizza?"
            description="Pair up with a friend and enjoy the 
            hot and crispy pizza pops. Try it 
            with the best deals."
            link="/"
          />
        </div>
        <div className="col-2-of-3">
          <DetailFoodItemImage image="./img/pizza-large.png" name="Pizza?" />
        </div>
      </div>
    </div>
  );
};
export default DetailsFood;
