

import React,{createContext,useState} from 'react'

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const [isOpen,setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  
  return <SidebarContext.Provider value={{isOpen,setIsOpen,handleClick}}>{children}</SidebarContext.Provider>;
}

export default SidebarProvider;