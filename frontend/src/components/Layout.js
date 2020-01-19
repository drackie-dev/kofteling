import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .main-container{
        padding-top: 60px;

    }
`

export function Layout(props) {
    return (
        <Styles>
            <Container className="main-container">
                {props.children}
            </Container>
        </Styles>
    )
}
