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
import {Alert,AlertTitle} from '@material-ui/lab';



const App = () => {
  const [todoList, setTodoList] = useState([])// setNewtodoList. todoList, setTodoList
  const [taskName, setTaskname] = useState('')
  const vertical = 'bottom'
  const horizontal = 'left'
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)


  function handleSubmit(e) {
    if (taskName.trim().length !== 0) {
      e.preventDefault();
      setTodoList([...todoList, { id: uuidv4(), name: taskName }]);
      setTaskname("");
    }
    else {
      setIsSnackbarOpen(true)

    }
  }

  function removeItem(index, id) {
    console.log(id)
    const newList = todoList.filter((item) => item.id !== id)
    console.log(newList)
    // debugger
    setTodoList(newList)
  }

  // find, findIndex, Entries, Splice, Slice, 

  const paperstyle = { padding: 20, width: 400, magin: "20px auto" }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <>
      {/* Make this into new component
    TodolistContainer
    */}
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
              {todoList.map((item, index) => (
                <ListItem item={item}
                  // callback function
                  removeItem={() => removeItem(index)}
                  index={removeItem} />
              ))
              }
            </ul>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={3000}
            open={isSnackbarOpen}
            onClose={handleClose}>
            <Alert variant="outlined" severity="warning"><AlertTitle>warning</AlertTitle>Please enter some message for add some to-do.</Alert>
          </Snackbar>


        </Paper>
      </Grid>
    </>
  )
}

export default App