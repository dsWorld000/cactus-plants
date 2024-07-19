import { createContext, useState } from "react";
import {cactus_item_list} from "../assets/assets"


export const StoreContext = createContext()

const StoreContextProvider = ({children}) =>{

    const [cartItems, setCartItems] = useState({})

    const addToCart =(itemId)=> {
        if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
      }

      const removeToCart =(itemId)=> {
        if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
      }

    const contextValue = {
     cactus_item_list,
     cartItems,
     setCartItems,
     addToCart,
     removeToCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
           {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;