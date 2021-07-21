const Header: React.FC = () => {
  return (
    <div className="container row ">
      <div className="col-2-of-3 header-left__box">
        <div className="header-left__content">
          <div className="header-left__top">
            <h1 className="header-primary">Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
          </div>
          <div className="header-left__bottom">
            <div className="row">
              <div className="row header-delivery">
                <img
                  className="icon-small"
                  src="./img/icon/motor.png"
                  alt="Delivery"
                />
                <p>Delivery</p>
              </div>
              <div className="row header-pickup">
                <img
                  className="icon-small"
                  src="./img/icon/lock.png"
                  alt="Pickup"
                />
                <p>Pickup</p>
              </div>
            </div>
            <div className="row header-form__box">
              <form className="row header-input">
                <img src="./img/icon/location.png" alt="Location" />
                <input placeholder="Enter your email" />
              </form>
              <button className="col-1-of-4 header-button">
                <a className="row" href="/">
                  <div>
                    <img
                      className="icon-small"
                      src="./img/icon/search-white.png"
                      alt="Find Food"
                    />
                  </div>
                  <p>Find Food</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-right__box">
        <div className="header-image">
          <img src="./img/food-hero.png" alt="food-hero" />
        </div>
      </div>
    </div>
  );
};
export default Header;
