import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getNumbers } from '../actions/getAction'
import { Link } from 'react-router-dom';


function Nav(props){
    useEffect(() =>{
      getNumbers();
    }, [])

    return(
        <header>
        <nav>
          <h2> T-Shirt Shop <ion-icon name="man-outline"></ion-icon> </h2>
          <ul>
            <li><Link to="/"><ion-icon name="home"></ion-icon>Home</Link></li>

            <li><Link to="/about"><ion-icon name="document"></ion-icon>About</Link></li>

            <li className="cart"><Link to="/cart">
            <ion-icon name="cart"></ion-icon>Cart<span>{props.basketProps.basketNumbers}</span>
            </Link></li>
          </ul>
        </nav>
      </header>
    )
}
const mapStateToProps = state=> ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Nav);

