import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfessional";

interface Props {
    professionals: IProfissional[] | null,
    consults: IConsulta[] | null
}

interface IData {
    nome: string,
    consultas: number
}

const useDataGraphic = ({ professionals, consults }: Props) => {
    let data: Array<IData> = [];

    if (professionals && consults) {
        data = professionals.map((professional) => ({
            nome: professional.nome,
            consultas: consults.filter((consult) =>
                consult.profissional.some((prof) => prof.nome === professional.nome)
            ).length
        }))
    }

    return data;
}

export default useDataGraphic;