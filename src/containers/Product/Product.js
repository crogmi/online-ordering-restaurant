import React from 'react';
import products from '../../products.json';
import OrderForm from '../../components/OrderForm/OrderForm'

//Import images
import CoffeeImg from '../../ProductImages/coffee.jpg';
import LatteImg from '../../ProductImages/latte.jpg';
import EspressoImg from '../../ProductImages/espresso.jpg';
import ColdbrewImg from '../../ProductImages/cold-brew.jpg';
import './Product.css';

const Product = (props) => {
    let {_id} = props.match.params;
    const product = products.find(product => product.id === _id);
    let {name, price, description, imageIndex} = product;

    const images = [LatteImg, CoffeeImg, ColdbrewImg, EspressoImg];
    
    return (
        <div className='product-page'>
            <h1>{name}</h1>
            <img src={images[imageIndex]} alt=''/>
            <h3>${price}</h3>
            <h3>{description}</h3>
            <OrderForm product={product}
                       image={images[imageIndex]} />
        </div>
    );
};

export default Product