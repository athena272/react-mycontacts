import { Link } from 'react-router-dom';
import { Container, InputSearchContainer, Header, ListContainer, Card } from './styles';
import arrow from '/assets/images/icons/arrow.svg';
import editIcon from '/assets/images/icons/edit-icon.svg';
import deletIcon from '/assets/images/icons/delet-icon.svg';
import Modal from '../../components/Modal';

export default function Home() {
    return (
        <Container>
            <Modal danger />
            <InputSearchContainer>
                <input type="text" placeholder='Pesquisar contato' />
            </InputSearchContainer>
            <Header>
                <strong>3 contatos</strong>
                <Link to={'/new'}>
                    Novo contato
                </Link>
            </Header>
            <ListContainer>
                <header>
                    <button type='button'>
                        <span>Nome</span>
                        <img src={arrow} alt='Arrow' />
                    </button>
                </header>
                <Card>
                    <div className='info'>
                        <div className='contact-name'>
                            <strong>Mateus Silva</strong>
                            <small>Instagram</small>
                        </div>
                        <span>mateus@devacademy.com.br</span>
                        <span>(41) 99999-9999</span>
                    </div>

                    <div className='actions'>
                        <Link to='/edit/123'>
                            <img src={editIcon} alt='Edit' height={23} width={23} />
                        </Link>
                        <button type='button'>
                            <img src={deletIcon} alt='Delet' height={23} width={23} />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
};
