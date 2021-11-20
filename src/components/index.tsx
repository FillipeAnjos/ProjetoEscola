import React, { useState } from 'react';

//import Cadastro from '../pages/Cadastro';
import Modal from 'react-modal';

import { Header } from './Header';
import { Dashbord } from './Dashbord';
import { Footer } from './Footer';
import { NewTransacionModal } from './NewTransactionModal';

Modal.setAppElement('#root');

const Index = () => {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

    return(
        <>
            <Header onOpenNewTransacionModal={handleOpenNewTransactionModal} />
            <Dashbord />

            <NewTransacionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

            <Footer />
        </>
    )
}

export default Index;