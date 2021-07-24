const AppDownload: React.FC = () => {
  return (
    <div className="container-fluid app-restaurant__box">
      <div className="row app-restaurant__content">
        <div className="app-restaurant__image">
          <div className="col-1-of-2 app-restaurant__image-1">
            <img src="./img/iphone1.png" alt="iphone" />
          </div>
          <div className="app-restaurant__image-2">
            <img src="./img/iphone.png" alt="iphone" />
          </div>
        </div>
        <div className="col-1-of-2 app-restaurant__text">
          <div>
            <h2>Install the app</h2>
            <p>
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </p>
            <div className="row">
              <div>
                <img src="./img/icon/appstore.png" alt="app store" />
              </div>
              <div>
                <img src="./img/icon/googleplay.png" alt="googleplay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppDownload;
