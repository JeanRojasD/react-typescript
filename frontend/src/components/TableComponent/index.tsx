import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses } from "@mui/material";
import IConsulta from "../../types/IConsulta";

const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "#0B3B60",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal"
    },
    [`&.${tableCellClasses.body}`] : {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const StyledRow = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]:{
        backgroundColor: "#E7EBEF",
        align: "right"
    }
}))

const TableComponent = ({ consult }: { consult: IConsulta[] | null }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <StyledCell>Data</StyledCell>
                            <StyledCell>Horário</StyledCell>
                            <StyledCell>Profissional</StyledCell>
                            <StyledCell>Especialidade</StyledCell>
                            <StyledCell>Paciente</StyledCell>
                            <StyledCell>Modalidade</StyledCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consult?.map((row) => {
                            return (
                                <StyledRow>
                                    <StyledCell component="th" scope="row">{new Date(row.data).toLocaleDateString()}</StyledCell>
                                    <StyledCell>{row.horario}</StyledCell>
                                    <StyledCell>{row.profissional[0].nome}</StyledCell>
                                    <StyledCell>{row.profissional[0].especialidade}</StyledCell>
                                    <StyledCell>{row.paciente}</StyledCell>
                                    <StyledCell>{row.modalidade}</StyledCell>
                                </StyledRow>
                            );
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableComponent;