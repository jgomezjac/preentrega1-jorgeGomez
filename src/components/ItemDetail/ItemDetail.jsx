import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
export const ItemDetail = ( {product}) => {

    const [cantidad,setCantidad] = useState(0);
    const handleAgregar=() => {
        setCantidad(cantidad+1);
    }
    const handleQuitar=() => {
        if( cantidad > 1) {
            setCantidad(cantidad-1);
        }
    }
    const mostrarCantidad=() => {
        console.log(`Cantidad seleccionada : ${cantidad}`);
    }

    return (
        <Container className='mt-2'>
            <Row>
                <Col>
                    <img className='img-fluid' src={`/assets/products/${product.imagen}`} />
                </Col>
                <Col className='mt-5'>
                    <label><b>Nombre : </b></label>
                    <p>{product.nombre}</p>

                    <label><b>Descripcion : </b></label>
                    <p>{product.descripcion}</p>

                    <label><b>Precio : </b></label>
                    <p>{product.precio}</p>

                    <label><b>Cantidad seleccionada : </b></label>
                    <p>{cantidad}</p>

                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={handleAgregar} class="btn btn-secondary">+</button>
                    <button type="button" onClick={handleQuitar} class="btn btn-secondary">-</button>
                    <button type="button" onClick={mostrarCantidad}  class="btn btn-success">Agregar al carrito</button>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}