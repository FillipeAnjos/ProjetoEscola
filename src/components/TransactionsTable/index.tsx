import React, { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransactionsTable() {

    useEffect( () => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fillipe</td>
                        <td className="deposit">R$1.000</td>
                        <td>Opcional</td>
                        <td>20/01/2021</td>
                    </tr>
                    <tr>
                        <td>Fillipe</td>
                        <td className="withdraw">- R$50.00</td>
                        <td>Livros</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}