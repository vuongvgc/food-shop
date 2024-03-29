const TopNav: React.FC = () => {
  return (
    <nav className="row nav-bar__box">
      <div className="col-1-of-4 ">
        <div className="logo_box">
          <img src="./img/logo.png" alt="Logo food Wagon" />
        </div>
      </div>
      <div className="col-2-of-4 nav-bar__location">
        <p>
          Deliver to:
          <span>
            <img
              className="icon-small"
              src="./img/icon/location-orange.png"
              alt="location"
            />
          </span>
          <span>Current Location</span> Mohammadpur Bus Stand, Dhaka
        </p>
      </div>
      <div className="col-1-of-4 row nav-bar__button">
        <div>
          <p className="nav-search row">
            <img
              className="icon-small"
              src="./img/icon/search.png"
              alt="search"
            />
            Search Food
          </p>
        </div>
        <div>
          <button className="button-login">
            <a className="row" href="/">
              <img
                className="icon-small"
                src="./img/icon/user.png"
                alt="search"
              />
              Login
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default TopNav;
