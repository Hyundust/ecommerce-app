import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, category, price, image } = product;
  const { rate, count } = product.rating;

  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, id);
    setShowNotification(true);

    // Hide the notification after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="border border-[#a13838] max-w-md rounded-md overflow-hidden shadow-md relative group">
      <img className="h-48 pt-4 pb-2 mx-auto " src={image} alt="Product Image" />
      <div className="p-4">
        <p3 className="text-gray-900 text-sm mb-2">{category}</p3>
        <h3 className="text-gray-900 font-medium text-lg mb-2">{title}</h3>
        <div className="text-gray-900 font-medium text-lg mb-2">{price}$</div>
        <div className="flex items-center mb-2">
          <div className="text-yellow-400 flex items-center">{rate}</div>
          <div className="text-gray-600 ml-2 flex items-center">{count} votes</div>
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-20s bg-black absolute inset-0 z-10"></div>
      <div className="flex justify-center items-center absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handleAddToCart}
          className="bg-white text-black py-2 px-4 border border-black rounded-md mx-2"
        >
          Add to Cart
        </button>

        <Link to={`/product/${id}`}>
          <button className="bg-white text-black py-2 px-4 border border-black rounded-md mx-2">More</button>
        </Link>
      </div>
      {showNotification && (
        <div className="absolute inset-x-0 top-0 bg-green-500 text-white p-2 text-center">
          Successfully added to cart
        </div>
      )}
    </div>
  );
};

export default Product;
