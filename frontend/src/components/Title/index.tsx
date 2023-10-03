import styled from "styled-components"

import avaliacao from '../../assets/avaliacao.png'
import grafico from '../../assets/grafico.png'
import consulta from '../../assets/consulta.png'

interface Props{
    image?: string,
    children?: React.ReactNode
}

interface IImages {
    avaliacao: string;
    grafico: string;
    consulta: string
}

const StyledSpan = styled.span<Props>`
background-repeat: no-repeat;
background-position: center,
background-size: cover;
width: 25px;
height: 25px;
background-image: ${props => props.image ? `url(${props.image})` : 'none'}
`

const StyledTitle = styled.h2`
color: #339CFF;
font-weight: 700;
font-size: 24px;
`

const StyledContainer = styled.div`
display: flex;
align-items: center;
`

const Title = ({image, children}: Props) =>{
    const listOfImages: IImages = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }
    return(
        <StyledContainer>
            {image && <StyledSpan image={listOfImages[image as keyof IImages]}/>}
            <StyledTitle>{children}</StyledTitle>
        </StyledContainer>
    )
}

export default Title;