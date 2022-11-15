import styled from 'styled-components'

export const PostAll = styled.div`
    width : 100%;
    height : 100vh;
    position:relative;
    @media (max-width : 381px){
        height:50vh;
    }
`

export const TitlePostAll = styled.h1`
    font-size : 4em;
    color :#fff;
    text-align:center;
    padding :2em 0px 0px 0px;
    @media (max-width : 381px){
        padding:1.2em 0px 0px 0px;
    }
`

export const DescPostAll = styled.p`
    margin : 1em 4em;
    font-size :1.3em;
    text-align:center;
`


export const ContainerPostAll = styled.div`
    width :100%;
    padding : 2em;
`

export const ImgBk = styled.img`
    position : absolute;
    width : 100%;
    height : 100vh;
    opacity : 0.3;
    padding : 1em;
    @media (max-width : 381px){
        height:50vh;
    }
`



// export const ContainerSubMenu = styled.div`
//     width :100%;
//     padding :0px 2em;
//     display : flex;
//     flex-wrap :wrap;
//     position : relative;
//     justify-content: space-around;
//     bottom: -30%;
// `

// export const ContainerItem = styled.div`
//     display : flex;
//     flex-direction :column;
//     width :100%;
//     max-width:20%;
//     padding:10px;
//     transition :.5s;
//     &:hover{
//         border-bottom :2px solid #08fdd8;
//     }
//     &:focus{
//         border-bottom :2px solid #08fdd8;
//     }
    
// `
// export const LinksSubMenu = styled.a`
//     text-decoration : none;
//     font-weight :bold;
// `




