import { Container, Header, ListContainer } from './styles';

export default function ContactsList() {
    return (
        <Container>
            <Header>
                <strong>3 contatos</strong>
                <a href="/">Novo contato</a>
            </Header>

            <ListContainer>
                <header>
                    <button type='button'>Nome</button>
                </header>
            </ListContainer>
        </Container>
    );
}
