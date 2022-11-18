import { useState } from "react";
import styled from "styled-components";
import styles from './styles/ItemPopupContainer.module.css';
import { toast } from 'react-toastify';

interface Props {
    isMobile: boolean;
    image?: string;
};

const Container = styled.div<Props>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => props.isMobile ? 'column' : 'row'};
`

const ImageContainer = styled.div<Props>`
    background-image: url("${(props) => props.image}");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: ${(props) => props.isMobile ? '100' : '40'}%;
    height: ${(props) => props.isMobile ? '40vh' : '100%'};
    background-color: #faf9f7;
`;

const DetailsContainer = styled.section<Props>`
    width: ${(props) => props.isMobile ? '100' : '60'}%;
    height: ${(props) => props.isMobile ? 'initial' : '100%'};
`;


export const ItemPopupContainer = ({ itemData: { Id, Name, Category, Description, Image, Price }, size: { width, height, isMobile } }) => {

    const addItem = (event, { Id, Name, Description, Image, Price, Quantity }) => {
        event.preventDefault();
    
        let cart: any = localStorage.getItem('cartItems') || '[]'
        
        if (cart && Quantity > 0) {
            cart = JSON.parse(cart);
            cart.push({  Id, Name, Description, Image, Price, Quantity });
            localStorage.setItem('cartItems', JSON.stringify(cart));
            toast.success('Produto adicionado ao carrinho')
            // console.log(JSON.parse(localStorage.getItem('cartItems')))
        } else {
            toast.warn('A quantidade do produto precisa ser maior que 0.')
        };
    
    };
    const [useQuantity, setQuantity] = useState(0);

    return (
        <Container isMobile={isMobile}>
            <ImageContainer image={Image} isMobile={isMobile} />
            <DetailsContainer isMobile={isMobile}>
                <div className={styles.itemDetails}>
                    <div className={styles.firstRow}>
                        <h2 className={styles.name}>{Name}</h2>
                        <p className={styles.description}>{Description}</p>
                    </div>
                    <div className={`${styles.secondRow}`}>
                        <div className={`${styles.counter}`}>
                            <button className={`${styles.counterOperator}`} onClick={() => useQuantity > 0 && setQuantity(useQuantity - 1)}>-</button>
                            <div className={`${styles.counterDisplay}`}>{ useQuantity }</div>
                            <button className={`${styles.counterOperator}`} onClick={() => setQuantity(useQuantity + 1)}>+</button>
                        </div>
                        <button className={`${styles.addItem}`} onClick={(event) => { addItem(event, { Id, Name, Description, Image, Price, Quantity: useQuantity }) }}>Adicionar ao carrinho</button>
                    </div>
                </div>
            </DetailsContainer>
        </Container>
    )
};