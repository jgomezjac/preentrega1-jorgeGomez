import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);

export const UseCartContext = () => useContext( CartContext );
export const CartContextProvider = ({children}) => {

    const [productsCart,setProductsCart]=useState([])
    const addProductCart = ( product ) => {
        let newProductsCart = [];
        for( let n=0; n< productsCart.length; n++) {
            if( productsCart[n].id!=product.id ) newProductsCart.push( productsCart[n] );
        }
        setProductsCart([
            ...newProductsCart,product
        ])
    }
    const vaciarCarrito = () => {
        let conf= confirm("Esta seguro/a?")
        if(conf) setProductsCart([]);
    }
    const deleteProduct = ( product2Del ) => {
        const newProductsCart = [];
        for( let n=0; n< productsCart.length; n++) {
            if( productsCart[n].id==product2Del.id ) continue;
            newProductsCart.push( productsCart[n] );
        }
        setProductsCart(  newProductsCart  );
    }

    const totalPrice = () => productsCart.reduce( (total,product) => total=total+(product.price*product.cantidad), 0 );
    return (
        <CartContext.Provider value={{productsCart, addProductCart, vaciarCarrito, totalPrice, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}