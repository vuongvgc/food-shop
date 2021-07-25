import NavListFooter from "../components/NavListFooter";
const Footer: React.FC = () => {
  return (
    <div className="container-fluid footer__box">
      <div className="container">
        <div className="footer-nav__top">
          <h3 className="header-tertiary">Our top cities</h3>
          <div className="row footer-nav__row">
            <div className="footer-nav__col">
              <NavListFooter
                nav={[
                  "San Francisco",
                  "Miami",
                  "San Diego",
                  "East Bay",
                  "Long Beach",
                ]}
              />
            </div>
            <div className="footer-nav__col">
              <NavListFooter
                nav={[
                  "Los Angeles",
                  "Washington DC",
                  "Seattle",
                  "Portland",
                  "Nashville",
                ]}
              />
            </div>
            <div className="footer-nav__col">
              <NavListFooter
                nav={[
                  "New York City",
                  "Orange County",
                  "Atlanta",
                  "Charlotte",
                  "Denver",
                ]}
              />
            </div>
            <div className="footer-nav__col">
              <NavListFooter
                nav={[
                  "Chicago",
                  "Phoenix",
                  "Las Vegas",
                  "Sacramento",
                  "Oklahoma City",
                ]}
              />
            </div>
            <div className="footer-nav__col">
              <NavListFooter
                nav={[
                  "Columbus",
                  "New Mexico",
                  "Albuquerque",
                  "Sacramento",
                  "New Orleans",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="row footer-nav__bottom">
          <div className="col-2-of-3">
            <div className="row footer-nav__row">
              <div className="footer-nav__col">
                <h3 className="header-tertiary">Company</h3>
                <NavListFooter nav={["About us", "Team", "Careers", "Blog"]} />
              </div>
              <div className="footer-nav__col">
                <h3 className="header-tertiary">Contact</h3>
                <NavListFooter
                  nav={["Help & Support", "Partner with us ", "Ride with us"]}
                />
              </div>
              <div className="footer-nav__col">
                <h3 className="header-tertiary">Legal</h3>
                <NavListFooter
                  nav={[
                    "Terms & Conditions",
                    "Refund & Cancellation",
                    "Privacy Policy",
                    "Cookie Policy",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-1-of-3 footer-nav__bottom-right">
            <div>
              <div>
                <h3>Follow Us</h3>
                <div className="row footer-nav__bottom-social">
                  <img src="./img/icon/instagram.png" alt="instagram" />
                  <img src="./img/icon/facebook.png" alt="facebook" />
                  <img src="./img/icon/twitter.png" alt="twitter" />
                </div>
                <p className="footer-nav__bottom-text">
                  Receive exclusive offers in your mailbox
                </p>
                <div>
                  <form className="row footer-nav__bottom-form">
                    <div className="row footer-nav__bottom-input">
                      <img src="./img/icon/envelope.png" alt="envelope" />
                      <input placeholder="Enter Your email" />
                    </div>
                    <button className="footer-nav__bottom-button">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-nav__copyright">
          <p>
            All rights Reserved
            <img src="./img/icon/copyright.png" alt="copyright" />{" "}
            <span> copyright Your Company, 2021</span>
          </p>
          <p>
            Made with  by <span>Themewagon</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
