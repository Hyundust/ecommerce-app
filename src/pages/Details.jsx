import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from '../contexts/CartContext'

const Details= ()=>{
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const {addToCart}= useContext(CartContext);
  


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, []);


  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full mx-4 my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">{product.title}</h1>
          <div className="flex justify-center mb-4">
            <img src={product.image} alt={product.title} className="max-h-64 w-full object-contain" />
          </div>
          <p className="text-gray-700 text-base mb-2">{product.description}</p>
          <p className="text-gray-900 font-bold text-xl mb-4">${product.price}</p>
          <button onClick={()=>addToCart(product,id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
