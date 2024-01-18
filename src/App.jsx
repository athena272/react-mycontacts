import React from 'react'
import GlobalStyles from './assets/styles/global'
import defaultTheme from './assets/styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { Container } from './App.styles'
import Header from './components/Header/Header'
import ContactsList from './components/ContactsList/ContactsList'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList/>
      </Container>
    </ThemeProvider>
  )
}

export default App
