import { useState } from 'react';
import { state } from 'react';

import './ListaTarefas.css';

function ListaTarefas(){
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() != '') {
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa("");
        }
    };

    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    };
    return (
        <div>
            <h1 className='subtitle'>Lista de Tarefas</h1>
            <div className='teste'> 
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            </div>
            <ul>
                {tarefas.map((tarefa, indice) => (
                    <li key={indice}>
                        {tarefa}
                        <button onClick={() => removerTarefa(indice)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    }
export default ListaTarefas;
