import { Container } from "./components/StyledComponents/Container";
import Footer from "./components/Footer";
import Graphic from "./components/Graphic";
import Header from "./components/Header";
import UserRating from "./components/UserRating";
import TableComponent from "./components/TableComponent";
import Title from "./components/Title";
import useDataConsulta from "./useDataConsulta";
import useDataProfissionais from "./useDataProfissionais";
import { Button } from "./components/StyledComponents/RatingComponents";



function App() {

  const {data: consults, error: consultsError} = useDataConsulta();
  const {data: professionals, error: professionalsError} = useDataProfissionais()

  if(consultsError || professionalsError){
    console.log("Erro na requisição")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Área Administrativa</Title>
        <Button>Cadastrar especialista</Button>
        <Title image="consulta">Consultas do dia</Title>
        <TableComponent consult={consults} ></TableComponent>
        <Title image="grafico">Consultas mensais por especialista</Title>
        <Graphic consults={consults} professionals={professionals}></Graphic>
        <Title image="avaliacao">Avaliações de especialistas</Title>
        <UserRating professionals={professionals}></UserRating>
      </Container>
      <Footer />
    </>
  )
}

export default App
