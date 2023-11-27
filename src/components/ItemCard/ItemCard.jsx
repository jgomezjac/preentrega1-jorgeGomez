import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export const ItemCard = ( {product} ) => {
    
    return (
        <Card style={{ float:'left', width: '16rem' }}>
            <Card.Img variant="top" src={`/assets/products/${product.image}`} />
            <Card.Body>
                <Card.Title>{`${product.name}`}</Card.Title>
                <Card.Text>
                {`${product.description}`}
                </Card.Text>
                <Link to={`/detail/${product.id}`} className='btn btn-primary'>Detalle</Link>
            </Card.Body>
        </Card>
    )
    
}