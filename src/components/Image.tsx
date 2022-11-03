import styled from 'styled-components';

interface Props {
    url: string
}

export const ItemImage = styled.img<Props>`
    width: 15vh;
    height: 15vh;
    background-image: url("${(props) => props.url}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
`;