import { use, useState } from 'react';
import { state } from 'react';

import './ListaTarefas.css';

function ListaTarefas(){
    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem('tarefas');
        return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    });
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() != '') {
            const tarefasSalvas = localStorage.getItem('tarefas');
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

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

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
            <ul className='lista-tarefas'>
                {tarefas.length === 0 && <p className='sem-tarefas'>Nenhuma tarefa adicionada.</p>}
                {tarefas.length > 0 && <button onClick={ordenarTarefas} className='ordenar'>Ordenar</button>} 
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
