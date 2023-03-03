import styled from 'styled-components';

export const Cards = styled.div`
    width:${props => props.Width ? props.Width : '100%'};
    height:${props => props.Height ? props.Weight : '70vh'};
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
    width:${props => props.Width ? props.Width : '100%'};
    height:${props => props.Height ? props.Height : '70vh' };
    &:hover{
        height:${props => props.HeightHover} 75vh;
        transition:1s;
    }
`

export const ButtonCard = styled.button`
    width:25%;
    height:30px;
    margin:10px 0px;
    border:none;
    overflow:none;
    cursor:pointer;
    &:hover{
        background:#08fdd8;
    }
`

export const A = styled.a`
    text-decoration : none;
    color:#222;
`



export const CardsInfo = styled.div`
    width:50%;
    height:70vh;
    display:flex;
    flex-direction:column;
    padding: 100px 35px;
    opacity:${props => props.opacity} 1;
`

export const CardTitle = styled.h2`
    font-size :40px;
    
`