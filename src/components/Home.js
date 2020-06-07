import React from "react";
import BlackTshirt from "../images/Black_Tshirt.jpg";
import GreenTshirt from "../images/Green_Tshirt.jpg";
import MaroonTshirt from "../images/Maroon_tshirt.jpg";
import RedTshirt from "../images/Red_tshirt.jpg";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const Home = (props) => {
  console.log(props);
  console.log("hiiprops");
  return (
    <div className="container">
      <div className="image">
        <img src={BlackTshirt} alt="yo" />
        <h3>Black Tshirt</h3>
        <h3>$12,00</h3>
        <a onClick={() => props.addBasket('BlackTshirt')} className="addToCart cart1" href="#">
          Add to cart
        </a>
      </div>
      <div className="image">
        <img src={GreenTshirt} alt="yo" />
        <h3>Green Tshirt</h3>
        <h3>$15,00</h3>
        <a onClick={() => props.addBasket('GreenTshirt')} className="addToCart cart2" href="#">
          Add to cart
        </a>
      </div>
      <div className="image">
        <img src={MaroonTshirt} alt="yo" />
        <h3>Maroon Tshirt</h3>
        <h3>$25,00</h3>
        <a onClick={() => props.addBasket('MaroonTshirt')} className="addToCart cart3" href="#">
          Add to cart
        </a>
      </div>
      <div className="image">
        <img src={RedTshirt} alt="yo" />
        <h3>Red Tshirt</h3>
        <h3>$20,00</h3>
        <a onClick={() => props.addBasket('RedTshirt')} className="addToCart cart4" href="#">
          Add to cart
        </a>
      </div>
    </div>
  );
};
export default connect(null, { addBasket })(Home);
