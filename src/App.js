import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ListItem from './Components/Listitem';




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



  function removeItem(id){
    console.log(id)
    const newList=todoList.filter((item)=> item.id !== id)
    console.log(newList)
    // debugger
    setTodoList(newList)
    
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
        <ListItem item = {item}
        removeItem={removeItem}
        />
          ))
      }</ul>
      </>
  )
}

export default App