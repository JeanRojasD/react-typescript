import styled from 'styled-components';
import logo from '../../assets/logo.jpg'
import perfil from '../../assets/perfil.png'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const StyledLink = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`

const StyledLogo = styled.img`
    width: 200px;
`

const Header = () =>{
    return(
        <StyledHeader>
            <StyledLogo src={logo} alt="logo da empresa" />
            <Container>
                <img src={perfil} alt="imagem de perfil"></img>
                <StyledLink href='#'>Sair</StyledLink>
            </Container>
        </StyledHeader>
    );
}


export default Header;