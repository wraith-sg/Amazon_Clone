import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Product.css'

export const Product = ({id, title, image, price, rating}) => {
  const [dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <medium>₹</medium>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
