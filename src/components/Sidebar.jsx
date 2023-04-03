import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowForward} from "react-icons/io"
import {FiTrash2} from "react-icons/fi"
import CartItem from './CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {isOpen,handleClick} = useContext(SidebarContext);
  const {cart,clearCart,itemCount,total} = useContext(CartContext)

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[20vw] transition-all duration-500 z-20 px-4 lg:px-[35px]`}
      style={{ overflowY: "auto" }}
    >
      <div>
        <div onClick={() => handleClick()} className="absolute top-0 right-0 mr-6 mt-1">
          <IoMdArrowForward className="cursor-pointer text-3xl" />
        </div>

        <div className="flex justify-between items-center border-b-2 py-4">
          <div className="uppercase text-sm font-semibold">Shopping Bag ({itemCount})</div>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p className="text-2xl mb-2">Your cart is empty</p>
            <p className="text-lg">Start shopping now and add some items to your cart!</p>
          </div>
        ) : (
          <div className="flex-grow flex flex-col justify-between">
            <div className="flex-grow flex flex-col">
              {cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => clearCart()}
                className="bg-gray-200 text-gray-800 rounded-lg px-2 py-1 font-medium hover:bg-gray-300"
              >
                Clear All
              </button>
              <div className="flex font-semibold text-lg justify-between">
                Total: {total.toFixed(2)}$
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-4 bg-black text-white rounded-lg px-6 py-2 font-medium hover:bg-gray-900 text-center"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
