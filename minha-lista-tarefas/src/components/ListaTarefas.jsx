import { useState } from 'react';
import { state } from 'react';

import './ListaTarefas.css';

function ListaTarefas(){
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() != '') {

            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefa('');
        }
    };

    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    };

    const ordenarTarefas = () => {
        const tarefasOrdenadas = [...tarefas].sort((a, b) => a.localeCompare(b));
        setTarefas(tarefasOrdenadas);
    }
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
            <button onClick={ordenarTarefas}>Ordenar</button>
           
            </div>
            <ul>
                {tarefas.length === 0 && <p className='sem-tarefas'>Nenhuma tarefa adicionada.</p>}
                {tarefas.map((tarefa, indice) => (
                    <li key={indice}>
                        <input type="checkbox" className='checkbox'/>
                        {tarefa}
                        <button onClick={() => removerTarefa(indice)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    }
export default ListaTarefas;
