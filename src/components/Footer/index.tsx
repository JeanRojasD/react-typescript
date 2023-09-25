import facebook from '../../assets/facebook.png'
import whats from '../../assets/whatsapp.png'
import google from '../../assets/instagram.png'
import styled from "styled-components"

const StyledFooter = styled.footer`
height: 100%;
color: white;
padding: 1em;
background-color: #0B3B60;
text-align: center;
`

const StyledList = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`

const StyledItem = styled.li`
list-style-type: none;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledList>
                <StyledItem>
                    <a href='#'>
                        <img src={facebook} alt="logo facebook" />
                    </a>
                    <a href="">
                        <img src={whats} alt="logo whats" />
                    </a>
                    <a href="">
                        <img src={google} alt="logo google" />
                    </a>
                </StyledItem>
            </StyledList>
            <p>Caso de Estudo | Utilize a vontade</p>
        </StyledFooter>
    );
}

export default Footer;