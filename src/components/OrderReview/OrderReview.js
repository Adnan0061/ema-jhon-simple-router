import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [ products ] = useProducts()
    const [ cart, setCart ] = useCart(products)
    const history = useHistory()
    const handleRemove = (id) => {
        const newCart = cart.filter( product => product.key !== id)
        setCart(newCart)
        deleteFromDb(id)
    }
    const handlePlaceOrder =() => {
        history.push('/placeorder')
        setCart([])
        clearTheCart()
    }
    return (
        <div>
            <div className='shop-container'>
                <div></div>
                <div className="products-container">
                {
                    cart.map(product => <ReviewItem product={product} key={product.key} handleRemove={handleRemove}></ReviewItem>)
                }                    
                </div>
                <div className="cart-container" style={{position: 'relative', marginLeft: '10px'}}>
                    <Cart cart={cart}>

                            <button className='button' onClick={handlePlaceOrder}>Place Order</button>

                    </Cart>
                </div>  
            </div>
        </div>
    );
};

export default OrderReview;