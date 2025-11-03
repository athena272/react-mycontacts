import logo from '/assets/logo-my-contacts.svg';
import { Container, InputSearchContainer } from './styles';

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="logo MyContacts" width={201} height={35}/>

            <InputSearchContainer>
                <input type="text" placeholder='Pesquisar contato' />
            </InputSearchContainer>
        </Container>
    );
}
