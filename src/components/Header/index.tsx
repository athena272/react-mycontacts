import logo from '/assets/images/logo-my-contacts.svg';
import { Container } from './styles';

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="logo MyContacts" width={201} height={35}/>
        </Container>
    );
}
