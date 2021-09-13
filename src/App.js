import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';




const App = () => {
  const [todoList,setTodoList] = useState([])// setNewtodoList. todoList, setTodoList
  const [taskName, setTaskname] = useState('')

  
  function handleSubmit(e){
    if(taskName != 0){
    e.preventDefault();
    setTodoList([...todoList,{id: todoList.length, name: taskName}]);
    setTaskname("");
    }
    else{
      alert("To-Do List need Some Task for execute. so, Please Must be add Some Task.")
    }
  }



  function removeItem(e){
    console.log(e)
    e.target.parentElement.remove()
  }

  function check (e) {
    console.log(e)
    if(e.target.className==='')
    {
      e.target.classList.toggle('checked')
    }
    else{
      e.target.classList.remove('checked')
    }
  }
  

  return (
      <>
      <form>
      <Typography component="h1" variant="h5">Task</Typography>
      <TextField type="text" placeholder="Task here..." value={taskName} onChange={e => setTaskname(e.target.value)} />
      <Button variant="contained" color="primary" onClick = {handleSubmit}>Add To my List</Button>
      </form>
      <Typography component="h1" variant="h5">To-Do List</Typography>
      <ul>
        {todoList.map(item => (
          <li onClick={check} key ={item.id}>{item.name} <button onClick={removeItem}>Delete</button> </li>
        ))}
      </ul>
      </>
  )
}

export default App