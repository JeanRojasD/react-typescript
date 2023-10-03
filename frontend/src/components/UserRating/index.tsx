import styled from "styled-components";
import IProfissional from "../../types/IProfessional";
import Card from "./Card";
import { Button, Subtitle } from "../StyledComponents/RatingComponents";

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

const UserRating = ({ professionals }: { professionals: IProfissional[] | null }) => {
    return (
        <div>
            <Subtitle>Dezembro/22</Subtitle>
            <StyledContainer>
                {professionals?.map((professional) => {
                    return <Card professional={professional} />
                })}
            </StyledContainer>
            <Button>Ver mais</Button>
        </div>
    );
}


export default UserRating;