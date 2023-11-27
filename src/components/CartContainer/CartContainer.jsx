import { Col, Container, Row } from "react-bootstrap"
import { UseCartContext } from "../../contexts/CartContext/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { FormContainer } from "../FormContainer/FormContainer";
import { Link } from "react-router-dom";

export const CartContainer = () => {
    const {productsCart,vaciarCarrito,totalPrice} = UseCartContext()
    const [idCompra, setIdCompra] = useState(0);

    const handleOrder = ( formData ) => {
        if( productsCart.length==0 ) {
            alert('Error. No hay productos para comprar');
            return false;
        }

        const order = {
            buyer: formData,
            items : productsCart.map( 
                product=> (
                    { id: product.id, cantidad: product.cantidad, price:product.price } )
                ),
            total : totalPrice()
        }
        const dbFirestore       = getFirestore();
        const queryCollection   = collection( dbFirestore, 'orders');
        addDoc( queryCollection, order )
        .then( ({id})=> setIdCompra(id),vaciarCarrito() )
        .catch( err => console.log(err))
    }

    return <>    
        <Container className='mt-2'>
            {idCompra ? <>
                    <h2>Numero de compra : {idCompra}</h2>
                    <Link className='btn btn-success' to='/'>Volver</Link>
                </> :
                <>
                <Row>
                    <Col><h1>Contenido del carrito</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <table className='table table-striped table-bordered'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Producto</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {productsCart.map( product => <CartItem key={product.id} product={product}></CartItem>)}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan='4'></th>
                                    <th className="text-end">$ {totalPrice()}</th>
                                </tr>
                            </tfoot>
                        </table>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </Col>
                    <Col className='col-sm-4'>
                        <FormContainer handleOrder={handleOrder}/>
                    </Col>
                </Row>
                </>
            }
        </Container>
    </>
}