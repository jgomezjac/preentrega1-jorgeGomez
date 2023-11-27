import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SelectColor } from '../SelectColor/SelectColor';
import { UseCartContext } from '../../contexts/CartContext/CartContext';
export const ItemDetail = ( {product}) => {

    const [cantidad,setCantidad] = useState(0);
    const [add,setAdd] = useState(false)
    const [colorSeleccionado,setColorSeleccionado]= useState('defecto');

    const {addProductCart} = UseCartContext()
    

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
        addProductCart({...product, cantidad});
    }

    const coloresJson= [];
    if( product.colors ) {
        for( let ncolor=0; ncolor< product.colors.length; ncolor++) {
            let arrDataColor = product.colors[ncolor].split("|");
            coloresJson.push( {'id':arrDataColor[0], 'image':arrDataColor[1]}) 
        }
    }

    return (
        <Container className='mt-2'>
            <Row>
                <Col>
                    { colorSeleccionado=='defecto' ? <img className='img-fluid' src={`/assets/products/${product.image}`} /> 
                    : <img className='img-fluid' src={`/assets/products/${ coloresJson.find( color=> color.id==colorSeleccionado).image }`} /> }
                </Col>
                <Col className='mt-5'>
                    <label><b>Nombre : </b></label>
                    <p>{product.name}</p>

                    <label><b>Descripcion : </b></label>
                    <p>{product.description}</p>

                    <label><b>Precio : </b></label>
                    <p>{product.price}</p>

                    <label><b>Color : </b></label>
                    { product.colors ? <p><SelectColor optionSelected={handleColorSeleccionado} colores={coloresJson}/></p> : <><p>Unico color</p></> }

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