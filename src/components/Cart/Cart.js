import React from 'react';

const Cart = (props) => {
    
    let totalQuantity = 0;
    let initialTotal = 0;
    let totalShipping = 0;
    for (const product of props.cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        else{
        totalQuantity += product.quantity;
        initialTotal += (product.price*product.quantity)
        totalShipping += product.shipping*product.quantity;

        }
    }
    const tax = initialTotal*.15;
    const totalPrice = initialTotal + totalShipping + tax;
    return (
        <div style={{position: 'sticky', top: '0'}}>
            <div>
                <h3>Order Summary</h3>
                <h4>Item Ordered: {totalQuantity}</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Price:</td>
                            <td>{parseFloat(initialTotal).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td>{parseFloat(totalShipping).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>{parseFloat(initialTotal + totalShipping).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td>{parseFloat(tax).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td style={{color: '#b12704', fontSize: '20px', fontWeight: '600'}}>Order Total:</td>
                            <td style={{color: '#b12704', fontSize: '20px', fontWeight: '600'}}>{parseFloat(totalPrice).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;