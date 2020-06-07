import React, {Fragment} from 'react';
import { connect } from "react-redux";
import { productQuantity, clearProduct } from '../actions/productQuantity';

import BlackTshirt from "../images/Black_Tshirt.jpg";
import GreenTshirt from "../images/Green_Tshirt.jpg";
import MaroonTshirt from "../images/Maroon_tshirt.jpg";
import RedTshirt from "../images/Red_tshirt.jpg";

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps)

    let productsInCart =[];

    Object.keys(basketProps.products).forEach(function( item ){
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        };
        
    })
// const productImages = [BlackTshirt,GreenTshirt ,MaroonTshirt, RedTshirt  ]
    const productImages= (product) => {
        if( product.tagName ==='blackTshirt'){
            return BlackTshirt;
          }
        else if( product.tagName ==='greenTshirt'){
            return GreenTshirt;
        }
        else if( product.tagName ==='maroonTshirt'){
            return MaroonTshirt;
        }
        else if( product.tagName ==='redTshirt'){
            return RedTshirt;
        }
    }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is ");
        console.log(product);
        return(
            <Fragment key={index}>
                <div onClick={() => clearProduct(product.tagName)} className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages(product)} alt='yo'/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00 </div>
            </Fragment>
        )
    })



    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title"> PRODUCT</h5>
                <h5 className="price sm-hide"> PRICE</h5>
                <h5 className="quantity"> QUANTITY</h5>
                <h5 className="total"> Total</h5>
            </div>
            <div className="products">
                { productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
            </div>
        </div> 
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps,{ productQuantity, clearProduct })(Cart);

