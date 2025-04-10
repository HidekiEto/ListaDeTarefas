// importa o componente ListaTarefas para ser utilizado dentro deste arquivo
import ListaTarefas from "./components/ListaTarefas";

// importa o arquivo de estilos CSS para estilizar o componente
import './App.css';

// define o componente funcional app
function app () {
  return (
    <>
      {/* título principal do gerenciador de tarefas */}
      <h1 className="title"> Gerenciador de Tarefas </h1>
      {/* renderiza o componente ListaTarefas */}
      <ListaTarefas />
    </>
  );
}

// exporta o componente para ser utilizado em outros arquivos
export default app;