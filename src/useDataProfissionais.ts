import IProfissional from "./types/IProfessional";
import useFetch from "./useFetch";

const useDataProfissionais = () =>{
    return useFetch<IProfissional[]>({url: 'profissionais'});
}

export default useDataProfissionais;