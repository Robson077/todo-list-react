import { useState } from "react"
import './App.css';
import List from "./components/List";

function App() {

  // state para pegar a tarefa com valor de texto
  const [tasks, setTasks] = useState("")

  // state para adicionar a task no array
  const [itemsList, setItemsList] = useState([]) 

  // pegar valor que está no input e coloca na variavel tasks do state
  const handleChangeInput = (e) => {
    const inputTasks = e.target.value

    setTasks(inputTasks)
  }

  // adicionar na variavel itemsList
  const handleAddTask = () => {

    if(!tasks) {
      return
    }

  //adiconar o resto dos items antes,  adicionar a nova task digitada
    setItemsList([...itemsList, tasks])

    setTasks("")
  }

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <div className="form">
        <input type="text" placeholder="Digite aqui sua tarefa..." onChange={handleChangeInput} value={tasks}/>

        <button onClick={handleAddTask}>Adicionar</button>

      </div>

      {/* percorrer o array itemsList e renderizar os values (tasks) */}
      {itemsList.map((tasks) => (
        <List 
          tasks={tasks}
        />
      ))}
    </div>
  );
}

export default App;
