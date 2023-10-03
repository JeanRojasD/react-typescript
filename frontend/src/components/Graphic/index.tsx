import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfissional from "../../types/IProfessional";
import IConsulta from "../../types/IConsulta";
import useDataGraphic from "./useData";
import styled from "styled-components";

interface Props {
    professionals: IProfissional[] | null,
    consults: IConsulta[] | null
}

interface IData {
    nome: string,
    consultas: number
}

const StyledDiv = styled.div`
    background-color: white;
    border-radius: 16px;
`

const Graphic = ({ professionals, consults }: Props) => {
    let data: Array<IData> = useDataGraphic({ professionals, consults });
    return (
        <StyledDiv>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
                >
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="nome"></YAxis>
                    <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </StyledDiv>

    );
}


export default Graphic;