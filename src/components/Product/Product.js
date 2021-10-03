import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { deleteFromDb } from '../../utilities/fakedb';
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, star, shipping, category, stock, features} = props.product
    // const [addToCart, setAddToCart] = useState('')

    return (
        <div className='product-container'>
            <div style={{width: '218px', marginRight: '10px'}}><img src={img} alt="" /></div>
            <div>
                <h2>{name}</h2>
                <h6>by: {seller}</h6>
                <div className='details-container'>
                    <div>
                        <h4>${price}</h4>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                        {/* <button onClick={() => props.deleteFromDb(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> remove from cart</button> */}
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>
                            <h4>Features</h4>
                            <ul>
                                {
                                features.map(feature => <li key={feature.description}>{feature.description}: {feature.value}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Product;