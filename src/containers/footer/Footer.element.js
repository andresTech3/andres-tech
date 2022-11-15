import styled,{keyframes} from 'styled-components'

//animations

const animIcons = keyframes`
    from{
        filter : saturate(0%);
    }

    to{
        filter : saturate(100%);
    }
`


export const ContainerFooter = styled.footer`
    width:100%;
    height:80vh;
    display:flex;
    padding:2em;
    margin-top:20px;
    background :#111;
    position: relative;
    flex-wrap:wrap;
`

export const TextFooter = styled.div`
    display : flex;
    flex-direction:column;
    width:60%;
    text-align:left;
    position :relative;
`

export const ImgBgTextFooter = styled.img`
    opacity:0.2;
    position : absolute;
    filter : saturate(2%)
`

export const InfoBg = styled.div`
    display:flex;
    flex-direction:column;
    align-items :center;
    padding:10em 50px;
`

export const InfoFooter = styled.div`
    width:40%;
    display : flex;
    flex-direction:column;
    justify-content:center;
    align-items :center;
    padding:0px 0px 40px 0px;
`


export const FooterIcons = styled.div`
    display : flex;
    margin-top:20px;
`

export const IconsItem = styled.img`
    width:50px;
    height:50px;
    margin-right:5px;
    /* filter:saturate(0%); */
    animation:${animIcons} 3s ease-in infinite ;
    /* &:hover{
        filter : saturate(100%);
        transition:1s;
    } */
` 






