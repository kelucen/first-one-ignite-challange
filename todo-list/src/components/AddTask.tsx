import styles from './AddTask.module.css';
import {PlusCircle} from 'phosphor-react'

function AddTask() {
    return (
        <div className={styles.addTask}>
            <input className={styles.input} placeholder='Adicione uma nova tarefa' type="text" />
            <button className={styles.newTaskButton}>
                Criar 
                <PlusCircle size={16}/>
            </button>
        </div>
    )
}

export default AddTask;