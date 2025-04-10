import { useState, useEffect } from 'react';
import './ListaTarefas.css';

function ListaTarefas() {
    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem('tarefas');
        return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    });
    const [novaTarefa, setNovaTarefa] = useState('');

    useEffect(() => {
        if (tarefas.length > 0) {
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        }
    }, [tarefas]);

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas([...tarefas, novaTarefa.trim()]);
            setNovaTarefa('');
        }
    };

    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    };

    const ordenarTarefas = () => {
        const tarefasOrdenadas = [...tarefas].sort((a, b) => a.localeCompare(b));
        setTarefas(tarefasOrdenadas);
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
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') adicionarTarefa();
                    }}
                />
                <button onClick={adicionarTarefa}>Adicionar</button>
            </div>
            <ul className='lista-tarefas'>
                {tarefas.length === 0 && (
                    <p className='semTarefas'>Nenhuma tarefa adicionada.</p>
                )}
                {tarefas.length > 0 && (
                    <button onClick={ordenarTarefas} className='ordenar'>
                        Ordenar
                    </button>
                )}
                {tarefas.map((tarefa, indice) => (
                    <li key={indice}>
                        <input type="checkbox" className='checkbox' />
                        {tarefa}
                        <button onClick={() => removerTarefa(indice)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTarefas;
