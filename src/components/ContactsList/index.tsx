import { Container, Header, ListContainer, Card } from './styles';
import arrow from '/assets/images/icons/arrow.svg';
import editIcon from '/assets/images/icons/edit-icon.svg';
import deletIcon from '/assets/images/icons/delet-icon.svg';

export default function ContactsList() {
    return (
        <Container>
            <Header>
                <strong>3 contatos</strong>
                <a href='/'>Novo contato</a>
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
                        <a href=''>
                            <img src={editIcon} alt='Edit' height={23} width={23} />
                        </a>
                        <button type='button'>
                            <img src={deletIcon} alt='Delet' height={23} width={23} />
                        </button>
                    </div>
                </Card>
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
                        <a href=''>
                            <img src={editIcon} alt='Edit' height={23} width={23} />
                        </a>
                        <button type='button'>
                            <img src={deletIcon} alt='Delet' height={23} width={23} />
                        </button>
                    </div>
                </Card>
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
                        <a href=''>
                            <img src={editIcon} alt='Edit' height={23} width={23} />
                        </a>
                        <button type='button'>
                            <img src={deletIcon} alt='Delet' height={23} width={23} />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
