import React, { useState } from 'react';
import { Container, Content } from './style';

import Modal from 'react-modal';

import logoProjetoEscola from '../../assets/logo-projeto_escola.png';

interface HeaderProps {
    onOpenNewTransacionModal: () => void;
}

export const Header = ({ onOpenNewTransacionModal }: HeaderProps) => {

    return (
        <>
            <Container>
                <Content>
                    <img src={logoProjetoEscola} alt="logo" width="180" height="50" />
                    <button type="button" onClick={ () => onOpenNewTransacionModal() }>
                        Nova tarnsação
                    </button>

                   
                </Content>
            </Container>
        </>
    )
}