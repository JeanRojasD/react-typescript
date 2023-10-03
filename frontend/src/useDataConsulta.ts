import IConsulta from "./types/IConsulta";
import useFetch from "./useFetch";

const useDataConsulta = () =>{
    return useFetch<IConsulta[]>({url: 'consultas'});
}

export default useDataConsulta;