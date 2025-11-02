
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import Header from './components/Header';
import ContactsList from './components/ContactsList';

export default function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <ContactsList />
        </Container>
    </ThemeProvider>
  );
}