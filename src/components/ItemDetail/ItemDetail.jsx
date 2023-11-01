import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SelectColor } from '../SelectColor/SelectColor';
export const ItemDetail = ( {product}) => {

    const [cantidad,setCantidad] = useState(0);
    const [add,setAdd] = useState(false)
    const [colorSeleccionado,setColorSeleccionado]= useState('defecto');

    const handleAgregar=() => {
        setCantidad(cantidad+1);
    }
    const handleColorSeleccionado=( colorSeleccionado ) => {
        setColorSeleccionado( colorSeleccionado );
    }

    const handleQuitar=() => {
        if( cantidad > 1) {
            setCantidad(cantidad-1);
        }
    }
    const mostrarCantidad=() => {
        setAdd( true )
        console.log(`Cantidad seleccionada : ${cantidad}`);
    }

    return (
        <Container className='mt-2'>
            <Row>
                <Col>
                    { colorSeleccionado=='defecto' ? <img className='img-fluid' src={`/assets/products/${product.imagen}`} /> 
                    : <img className='img-fluid' src={`/assets/products/${ product.colores.find( color=> color.id==colorSeleccionado).imagen }`} /> }
                </Col>
                <Col className='mt-5'>
                    <label><b>Nombre : </b></label>
                    <p>{product.nombre}</p>

                    <label><b>Descripcion : </b></label>
                    <p>{product.descripcion}</p>

                    <label><b>Precio : </b></label>
                    <p>{product.precio}</p>

                    <label><b>Color : </b></label>
                    { product.colores ? <p><SelectColor optionSelected={handleColorSeleccionado} colores={product.colores}/></p> : <><p>Unico color</p></> }

                    <label><b>Cantidad seleccionada : </b></label>
                    <p>{cantidad}</p>

                    {add ? 
                        <div className="btn-group" role="group" aria-label="">
                            <Link to='/' className='btn btn-outline-secondary'>Seguir comprando</Link>
                            <Link to='/cart' className='btn btn-outline-secondary'>Ir al carrito</Link>
                        </div>
                    :
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" onClick={handleAgregar} className="btn btn-secondary">+</button>
                        <button type="button" onClick={handleQuitar} className="btn btn-secondary">-</button>
                        <button type="button" onClick={mostrarCantidad}  className="btn btn-success">Agregar al carrito</button>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}