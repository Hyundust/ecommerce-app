import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'

function Header() {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  const {itemCount } = useContext(CartContext)
  return (
    <header className='bg-gray-400 h-10 flex'>
      <div className='ml-2 mt-1'>
        <Link to={'/'}>
          <AiOutlineHome className='text-3xl'/>
        </Link>
      </div>

  <div onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer absolute top-0 right-0 mr-6 mt-1">
    <BsBag className='text-3xl' />
    <div className='bg-red-500 absolute top-0 right-0 mr-4 mt-4 rounded-full flex w-[15px] h-[18px] justify-center text-sm'>
      {itemCount}
    </div>
  </div>
</header>

    
    

  )
}

export default Header