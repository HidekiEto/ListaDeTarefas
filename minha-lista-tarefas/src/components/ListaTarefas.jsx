import { useState } from 'react';
import { state } from 'react';

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
        setTarefas(tarefas.filter((_, i) => ) )
    }
}