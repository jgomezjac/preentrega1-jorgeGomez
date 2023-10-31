import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
import { mTaskReturnProducts } from '../../utils/mTaskReturnProducts';
import { Item } from '../Item/Ittem';
import ModalLoading from '../ModalLoading/ModalLoading';
import { useParams } from 'react-router-dom';


function ItemListContainer ({ greeting }) {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading]= useState(true);
    const { cid } = useParams();

    useEffect(()=>{
        console.log( cid );
        if( cid ) {
            mTaskReturnProducts()
            .then( resultado => setProducts( resultado.filter(product=>product.category==cid) ) )
            .catch( error => console.log(error))
            .finally(()=> setLoading(false))
        } else {
            mTaskReturnProducts()
            .then( resultado => setProducts( resultado ) )
            .catch( error => console.log(error))
            .finally(()=> setLoading(false))
        }
    }, [cid])

    console.log( products );
    return (
        <Container className='mt-2'>
           
                {loading ? <ModalLoading mensaje='Cargando contenido de productos'/>
                :
                products.map( product => 
                    <Item key={product.id} product={product}/>
                )}
           
        </Container>
    )
}
export default ItemListContainer