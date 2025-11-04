import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { Container, Overlay, Footer } from './styles';

type ModalProps = {
    danger?: boolean
}

export default function Modal({ danger = false }: ModalProps) {
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <Overlay>
            <Container $danger={danger}>
                <h1>Título modal</h1>
                <p>Corpo da modal</p>
                <Footer>
                    <button type='button' className='cancel-button'>
                        Cancelar
                    </button>
                    <Button type='button' $danger={danger}>
                        Deletar
                    </Button>
                </Footer>
            </Container>
        </Overlay>,
        modalRoot
    );
}
