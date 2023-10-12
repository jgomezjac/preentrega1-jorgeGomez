import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ProductListContainer = ({ greeting }) => {

    return (
        <>
        <Container className='mt-2'>
            <Row>
                <Col><h4>{greeting}</h4></Col>
            </Row>
        </Container>
        </>
    )
}
export default ProductListContainer