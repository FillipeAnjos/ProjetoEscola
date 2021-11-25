import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.png';
import trueImg from '../../assets/true.png';
import falseImg from '../../assets/false.png';
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionModal/style';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransacionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransacionModal({ isOpen, onRequestClose }: NewTransacionModalProps){
    const { createTransaction } = useTransactions();



    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();//Previnir o funcionamento padrão de carregar a página automático ao clicar no submit no html

        await createTransaction({
            title,
            amount,
            category,
            type,
        })
        
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');
        onRequestClose();
        
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" className="img-button-close"/>
            </button>

            <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar Transações</h2>
                
                <input 
                    placeholder="Titulo"
                    value={title} 
                    onChange={ event => setTitle(event.target.value) }
                />

                <input 
                    type="number" 
                    placeholder="Valor" 
                    value={amount} 
                    onChange={ event => setAmount(Number(event.target.value)) }
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={ () => { setType('deposit'); } }
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={trueImg} className="trueFalseImg" alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={ () => { setType('withdraw'); } }
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={falseImg} className="trueFalseImg" alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria" 
                    value={category} 
                    onChange={ event => setCategory(event.target.value) }
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}