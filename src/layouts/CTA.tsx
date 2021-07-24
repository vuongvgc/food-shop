const CTA: React.FC = () => {
  return (
    <div className="container-fluid cta__box">
      <img className="cta__banner" src="./img/banner.png" alt="banner" />
      <div className="cta__content">
        <h2>Are you ready to order with the best deals?</h2>
        <button>
          <a href="/">
            Proceed to order
            <img src="./img/icon/next.png" alt="next" />
          </a>
        </button>
      </div>
    </div>
  );
};
export default CTA;
