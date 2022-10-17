import styled from 'styled-components'

export const PostAll = styled.div`
    width : 100%;
    height : 100vh;
    position:relative;
`

export const TitlePostAll = styled.h1`
    font-size : 4em;
    color :#fff;
    text-align:center;
    padding :2em 0px 0px 0px;
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

export const ContainerSubMenu = styled.div`
    width :100%;
    padding :0px 2em;
    display : flex;
    flex-wrap :wrap;
    position : relative;
    justify-content: space-around;
    bottom: -30%;
`

export const ContainerItem = styled.div`
    display : flex;
    flex-direction :column;
    width :100%;
    max-width:20%;
    padding:10px;
    transition :.5s;
    &:hover{
        border-bottom :2px solid #08fdd8;
    }
    &:focus{
        border-bottom :2px solid #08fdd8;
    }
    
`

// export const ContainerInfo = styled.div`

// `

// export const ContainerLinks = styled.div`

// `
export const LinksSubMenu = styled.a`
    text-decoration : none;
    font-weight :bold;
`




