import logo from '/assets/logo-my-contacts.svg'
import { Container, InputSearchContainer } from './styles'

export default function Header() {

    return (
        <Container>
            <img src={logo} alt="" width={201} />

            <InputSearchContainer>
                <input type="text" placeholder='Pesquisar contato' />
            </InputSearchContainer>
        </Container>
    )
}