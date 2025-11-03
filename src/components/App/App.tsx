
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Header from '../Header';
// import ContactsList from '../ContactsList';
import Routets from '../../Routes';

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <Container>
                    <Header />
                    <Routets />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}
