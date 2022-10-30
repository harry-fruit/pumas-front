import styled from "styled-components";

interface Props {
    isMobile: boolean;
};

const Container = styled.div<Props>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => props.isMobile ? 'column' : 'row'};
`

const ImageContainer = styled.div<Props>`
    width: ${(props) => props.isMobile ? '100' : '40'}%;
    height: ${(props) => props.isMobile ? 'initial' : '100%'};
    background-color: red;
`;

const DetailsContainer = styled.section<Props>`
    width: ${(props) => props.isMobile ? '100' : '60'}%;
    height: ${(props) => props.isMobile ? 'initial' : '100%'};
    background-color: blue;  
`;

const ItemDescription = styled.div``; 

export const ItemPopupContainer = ({ size:{width, height, isMobile} }) => {
    return (
        <Container isMobile={isMobile}>
            <ImageContainer isMobile={isMobile}/>
            <DetailsContainer isMobile={isMobile}>
                <ItemDescription>

                </ItemDescription>
            </DetailsContainer>
        </Container>
    )
};