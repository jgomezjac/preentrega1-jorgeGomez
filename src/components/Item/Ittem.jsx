import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export const Item = ( {product} ) => {
    console.log( product );
    return (
        <Card style={{ float:'left', width: '16rem' }}>
            <Card.Img variant="top" src={`/assets/products/${product.imagen}`} />
            <Card.Body>
                <Card.Title>{`${product.nombre}`}</Card.Title>
                <Card.Text>
                {`${product.descripcion}`}
                </Card.Text>
                <Link to={`/detail/${product.id}`} className='btn btn-primary'>Detalle</Link>
            </Card.Body>
        </Card>
    )
}