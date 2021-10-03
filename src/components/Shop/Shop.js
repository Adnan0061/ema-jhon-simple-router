import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [ cart, setCart ] = useCart(products)
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setFilteredProducts(data)
        });
    },[])

    const handleAddToCart = (product) => {
        let newCart = []
        const exist = cart.find(pd => pd.key === product.key)
        if(exist){
            product.quantity ++;
            const rest = cart.filter(pd => pd.key !== product.key)
            newCart = [ ...rest, product ]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDb(product.key);
    }
    const handleSearch = (event) =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredProducts(matchedProducts)
        console.log(matchedProducts.length)
    }
    // const removeFromCart = () => {

    // } 

    return (
        <div>
            <div style={{backgroundColor: '#222222', lineHeight: '40px', padding: '5px', textAlign: 'center'}}>
                <input type="text" style={{lineHeight: '10px', padding: '5px', width: '50%'}} placeholder='Search Products' onChange={handleSearch}/>
            </div>
            <div className='shop-container'>
                <div></div>
                <div className="products-container">
                    {
                    filteredProducts.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="cart-container" style={{position: 'relative', marginLeft: '10px'}}>
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='button'>Review your order</button>
                        </Link>
                    </Cart>
                </div>  
            </div>
        </div>
    );
};

export default Shop;