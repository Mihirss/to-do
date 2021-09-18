import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Common-Components/Navbar'
import Home from './Pages/TodoListApp'
import Feed from './Pages/Feed'
import { Switch } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

// import TodoList from './TodoListApp'
export default function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/feed" component={Feed} />
                <Redirect to="/" />
            </Switch>
            {/* <TodoList /> */}
        </>
    )
}
