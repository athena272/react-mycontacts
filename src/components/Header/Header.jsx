import React from 'react'
import logo from '/assets/logoContacts.svg'
import { Container, InputSearchContainer } from './Header.styles'

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