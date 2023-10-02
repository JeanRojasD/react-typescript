import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfessional";
import styled from "styled-components";

const StyledContainer = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: grey;
    margin: 1em 2em 1em
`

const StyledImg = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 1000px;
    object-fit: cover;
    border: 2px solid #339CFF;
`

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
`

const StyledLi = styled.li`
    margin-left: 10px; 
`

const StyledRatingLi = styled.li`
    margin-left: auto; 
`

const StyledName = styled.p`
    font-weight: bold; 
`

const Card = ({ professional }: { professional: IProfissional }) => {
    return (
        <StyledContainer>
            <StyledUl>
                <li>
                    <StyledImg src={professional.imagem} alt={`Foto de perfil do profissional ${professional.nome}`} />
                </li>
                <StyledLi>
                    <StyledName>{professional.nome}</StyledName>
                    <p>{professional.especialidade}</p>
                </StyledLi>
                <StyledRatingLi>
                    <Rating
                        name="simple-controlled"
                        value={professional.nota}
                        readOnly={true}
                    />
                </StyledRatingLi>
            </StyledUl>
        </StyledContainer>
    );
}

export default Card;