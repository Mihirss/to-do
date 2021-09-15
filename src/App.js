import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListItem from './Components/Listitem';
import { Grid, Paper } from '@material-ui/core';
import Add from '@material-ui/icons/PlaylistAddOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import { v4 as uuidv4 } from 'uuid';




const App = () => {
  const [todoList, setTodoList] = useState([])// setNewtodoList. todoList, setTodoList
  const [taskName, setTaskname] = useState('')
  const vertical = 'bottom'
  const horizontal= 'left'
const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)


  function handleSubmit(e) {
    if (taskName.trim().length !== 0) {
      e.preventDefault();
      setTodoList([...todoList, { id: uuidv4(), name: taskName }]);
      setTaskname("");
    }
    else {
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration='5s'
        message="I love snacks"
        open={open}

      />
    }
  }

  function removeItem(id) {
    console.log(id)
    const newList = todoList.filter((item) => item.id !== id)
    console.log(newList)
    // debugger
    setTodoList(newList)
  }

  const paperstyle = { padding: 20, width: 400, magin: "20px auto" }

  return (
    <>
      <Grid>
        <Paper elevation={24} style={paperstyle}>
          <Grid align='center'>
            <AssignmentOutlinedIcon color='secondary' fontSize='large' />
            <form>
              <TextField id="outlined-basic" label="Task" variant="outlined" color="secondary" type="text" placeholder="Task here..." fullWidth required value={taskName} onChange={e => setTaskname(e.target.value)} />
              <Button variant="outlined" color="secondary" mt={10} fullWidth required startIcon={<Add />} onClick={handleSubmit}>Add To my List</Button>
            </form>
            <PlaylistAddCheckOutlinedIcon color='secondary' fontSize='large' />
            <ul>
              {todoList.map(item => (
                <ListItem item={item} removeItem={removeItem} />
              ))
              }
            </ul>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default App