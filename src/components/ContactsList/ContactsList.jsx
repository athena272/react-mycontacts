import React from 'react'
import { Container, Header } from "./ContactsList.styles"

export default function ContactsList() {

    return (
        <Container>
            <Header>
                <strong>3 contatos</strong>
                <a href="/">Novo contato</a>
            </Header>
        </Container>
    )
}