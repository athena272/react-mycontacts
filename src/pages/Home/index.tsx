import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, InputSearchContainer, Header, ListHeader, Card } from './styles';
import arrow from '/assets/images/icons/arrow.svg';
import editIcon from '/assets/images/icons/edit-icon.svg';
import deletIcon from '/assets/images/icons/delet-icon.svg';
// import Loader from '../../components/Loader';
import formatPhone from '../../utils/formatPhone';

type Contacts = {
    id: string,
    name: string,
    email: string,
    phone: string,
    category_id: string | null,
    category_name: string | null
}

export type OrderBy = 'asc' | 'desc'

export default function Home() {
    const [contacts, setContacts] = useState<Contacts[]>([]);
    const [orderBy, setOrderBy] = useState<OrderBy>('asc');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const contactsQuantity = filteredContacts.length;

    useEffect(() => {
        fetch(`http://localhost:3000/contacts?orderBy=${orderBy}`)
            .then(async (response) => {
                const data: Contacts[] = await response.json();
                setContacts(data);
            })
            .catch((error) => {
                console.log('🚀 ~ error:', error);
            });
    }, [orderBy]);

    function handleToggleOrderBy() {
        setOrderBy(prev => prev === 'asc' ? 'desc' : 'asc');
    }

    function handleChangeSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    return (
        <Container>
            {/* <Loader /> */}
            <InputSearchContainer>
                <input
                    value={searchTerm}
                    type="text"
                    placeholder='Pesquisar contato'
                    onChange={handleChangeSearchTerm}
                />
            </InputSearchContainer>
            <Header>
                <strong>
                    {contactsQuantity}
                    {contactsQuantity === 1 ? ' contato' : ' contatos'}
                </strong>
                <Link to={'/new'}>
                    Novo contato
                </Link>
            </Header>
            {
                contactsQuantity > 0 && (
                    <ListHeader $orderBy={orderBy}>
                        <button type='button' onClick={handleToggleOrderBy}>
                            <span>Nome</span>
                            <img src={arrow} alt='Arrow' />
                        </button>
                    </ListHeader>
                )
            }
            {
                filteredContacts.map((contact) => (
                    <Card key={contact.id}>
                        <div className='info'>
                            <div className='contact-name'>
                                <strong>{contact.name}</strong>
                                {
                                    contact.category_name && <small>Instagram</small>
                                }
                            </div>
                            <span>{contact.email}</span>
                            <span>{formatPhone(contact.phone)}</span>
                        </div>

                        <div className='actions'>
                            <Link to={`/edit/${contact.id}`}>
                                <img src={editIcon} alt='Edit' height={23} width={23} />
                            </Link>
                            <button type='button'>
                                <img src={deletIcon} alt='Delet' height={23} width={23} />
                            </button>
                        </div>
                    </Card>
                ))
            }
        </Container>
    );
};
