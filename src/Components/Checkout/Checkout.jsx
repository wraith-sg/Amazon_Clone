import React from 'react'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Header from '../Header/Header';
import './Checkout.css'
import Subtotal from './Subtotal/Subtotal';

export const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout__title">Shopping Cart</h2>
          </div>
          {basket.map((item) => (
            <CheckoutProduct 
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}
