import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);

export const UseCartContext = () => useContext( CartContext );
export const CartContextProvider = ({children}) => {

    const [productsCart,setProductsCart]=useState([])
    const [flgRender,setFlgRender]=useState(false)

    const addProductCart = ( product ) => {
        let productoExistente= productsCart.find((productIn)=> productIn.id == product.id );
        if( productoExistente ) {
            productoExistente.cantidad += product.cantidad;
            (flgRender)?setFlgRender( false ):setFlgRender( true );
        } else {
            setProductsCart([
                ...productsCart,product
            ])
        }
    }
    const vaciarCarrito = () => {
        setProductsCart([]);
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
    const retornarCantidadArticulos = () =>  productsCart.reduce( (cantidad,product) => cantidad+=product.cantidad, 0 );
    return (
        <CartContext.Provider value={{productsCart, addProductCart, vaciarCarrito, totalPrice, deleteProduct, retornarCantidadArticulos}}>
            {children}
        </CartContext.Provider>
    )
}