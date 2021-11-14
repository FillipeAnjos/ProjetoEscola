import React from 'react';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './style';

export function Dashbord(){
    return (
        <>
            <Container>
                <Summary />
                <TransactionsTable />
            </Container>
        </>
    )
}