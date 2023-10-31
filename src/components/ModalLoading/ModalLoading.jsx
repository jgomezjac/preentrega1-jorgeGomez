import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function ModalLoading( props ) {
    const message= props.mensaje
    return (
    <Modal
        show={true}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
                <FontAwesomeIcon icon={faCoffee} className='me-2' />
                Procesando
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {message}
        </Modal.Body>

      </Modal>
      
    )
}
export default ModalLoading;   