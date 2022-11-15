import styled from 'styled-components';

export const Cards = styled.div`
    width:100%;
    height:70vh;
    position:relative;
    margin-bottom:10px;
    &::before{
        content : 'WEB';
        position:absolute;
        width:100px;
        height:50px;
        background:#111111;
        z-index:99;
        text-align:center;
        padding-top:15px;
        box-sizing:border-box;
    }
`

export const ImgBg = styled.img`
    position : absolute;
    object-fit:cover;
    width:100%;
    height:70vh;
    &:hover{
        height:75vh;
        transition:1s;
    }
`

export const CardsInfo = styled.div`
    width:50%;
    height:70vh;
    display:flex;
    flex-direction:column;
    padding: 100px 35px;
`

export const CardTitle = styled.h2`
    font-size :40px;
    letter-spacing:15px;
    
`