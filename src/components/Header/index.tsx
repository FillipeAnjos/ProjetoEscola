import React from 'react';
import { Container, Content } from './style';

import logoProjetoEscola from '../../assets/logo-projeto_escola.png';

export const Header = () => {
    return (
        <>
            <Container>
                <Content>
                    <img src={logoProjetoEscola} alt="logo" width="180" height="50" />
                    <button type="button" >
                        Nova tarnsação
                    </button>
                </Content>
            </Container>
        </>
    )
}