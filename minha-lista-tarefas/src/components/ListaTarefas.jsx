// importa os hooks useState e useEffect do React para gerenciar os estados
import { useState, useEffect } from 'react';
// importa o arquivo de estilos CSS para estilizar o componente
import './ListaTarefas.css';

// define o componente ListaTarefas
function ListaTarefas() {
    // cria o estado 'tarefas' e inicializa com os dados do localStorage ou um array vazio
    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem('tarefas');
        return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    });
    // cria o estado 'novaTarefa' para armazenar o valor do input
    const [novaTarefa, setNovaTarefa] = useState('');

    // utiliza o useEffect para salvar as tarefas no localStorage sempre que elas forem atualizadas
    useEffect(() => {
        if (tarefas.length > 0) {
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        }
    }, [tarefas]);

    // função para adicionar uma nova tarefa à lista
    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas([...tarefas, novaTarefa.trim()]);
            setNovaTarefa('');
        }
    };

    // função para remover uma tarefa específica da lista com base no índice
    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    };

    // função para ordenar as tarefas em ordem alfabética
    const ordenarTarefas = () => {
        const tarefasOrdenadas = [...tarefas].sort((a, b) => a.localeCompare(b));
        setTarefas(tarefasOrdenadas);
    };

    // retorna o JSX que define a interface do componente
    return (
        <div>
            {/* título da lista de tarefas */}
            <h1 className='subtitle'>Lista de Tarefas</h1>
            <div className='teste'>
                {/* campo de entrada para adicionar uma nova tarefa */}
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Digite uma nova tarefa"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') adicionarTarefa();
                    }}
                />
                {/* botão para adicionar a tarefa */}
                <button onClick={adicionarTarefa}>Adicionar</button>
            </div>
            <ul className='lista-tarefas'>
                {/* mensagem exibida quando não há tarefas na lista */}
                {tarefas.length === 0 && (
                    <p className='semTarefas'>Nenhuma tarefa adicionada.</p>
                )}
                {/* botão para ordenar as tarefas, exibido apenas se houver tarefas */}
                {tarefas.length > 0 && (
                    <button onClick={ordenarTarefas} className='ordenar'>
                        Ordenar
                    </button>
                )}
                {/* mapeia as tarefas para exibi-las como itens da lista */}
                {tarefas.map((tarefa, indice) => (
                    <li key={indice}>
                        {/* checkbox para marcar a tarefa como concluída */}
                        <input type="checkbox" className='checkbox' />
                        {/* texto da tarefa */}
                        {tarefa}
                        {/* botão para remover a tarefa */}
                        <button onClick={() => removerTarefa(indice)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// exporta o componente para ser utilizado em outros arquivos
export default ListaTarefas;
