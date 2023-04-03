import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { CartContext } from '../contexts/CartContext';


const CartItem = ({ item }) => {
  const { id, title, image, count, price } = item;
  const {addToCart,removeCart,decreaseCount} = useContext(CartContext)


  return (
    <div className="flex items-center py-2 px-4 border-b border-gray-300">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-16 w-16 object-contain mr-4"
        />
      </Link>
      <div className="flex flex-col">
        <Link to={`/product/${id}`}>
          <div className="text-lg font-medium">{title}</div>
        </Link>
        <div className="text-sm text-gray-500">ID: {id}</div>
        <div className="flex items-center">
          <button onClick ={()=>decreaseCount(id)}  className="mr-2">
            <AiOutlineMinusCircle size={20} />
          </button>
          <div className="text-sm text-gray-500">Count: {count}</div>
          <button onClick = {()=>addToCart(item,id)} className="ml-2">
            <AiOutlinePlusCircle size={20} />
          </button>
          <button  onClick ={()=>removeCart(id)}  className="absolute left-3 ">
            <FiTrash2 size={20}  />
          </button>
        </div>
        <div className="text-sm font-medium">
          <div>Price: ${price}</div>
          <div>Total: ${(price * count).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
