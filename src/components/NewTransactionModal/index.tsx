import Modal from 'react-modal';
import closeImg from '../../assets/close.png';
import trueImg from '../../assets/true.png';
import falseImg from '../../assets/false.png';
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionModal/style';
import { useState } from 'react';

interface NewTransacionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransacionModal({ isOpen, onRequestClose }: NewTransacionModalProps){
    
    const [type, setType] = useState('deposit');

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

            <Container>
                <h2>Cadastrar Transações</h2>
                
                <input placeholder="Titulo"/>

                <input type="number" placeholder="Valor" />

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

                <input placeholder="Categoria" />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}