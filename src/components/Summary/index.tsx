import React from 'react';
import { Container } from './style';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <p>???</p>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <p>???</p>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <p>???</p>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}