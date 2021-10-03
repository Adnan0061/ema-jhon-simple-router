import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    const { name, img, price, quantity, seller } = props.product
    // console.log(props.product)
    return (
<div className='product-container'>
        <div style={{width: '218px', marginRight: '10px'}}><img src={img} alt="" /></div>
            <div>
                <h2>{name}</h2>
                <h6>by: {seller}</h6>
                <div className='details-container'>
                    <div>
                        <h4 style={{color: 'brown'}}>${price}</h4>
                        <h2>Quantity: {quantity}</h2>
                        <button onClick={() => props.handleRemove(props.product.key)}><FontAwesomeIcon icon={faShoppingCart} />Remove</button>
                        {/* <button onClick={() => props.deleteFromDb(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> remove from cart</button> */}
                    </div>
                    <div>
                        <div>
                            <h4>Features</h4>
                            <ul>
                                {
                                // features.map(feature => <li key={feature.description}>{feature.description}: {feature.value}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;