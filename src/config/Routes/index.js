import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link }from "react-router-dom"
import Login from "../../component/Login/";
import Dashboard from "../../component/Dashboard/";
import About from "../../component/About";
import Register from "../../component/Register";
import AddUser from "../../component/Add_User";
const Routes = () =>{
    return(
        <switch>
           <Router>
            <Route path ="/login">
                <Login/>
            </Route>
            <Route path exact ="/">
                <Dashboard/>
            </Route>
            <Route path ="/about">
                <About/>
            </Route>
            <Route path ="/register">
                <Register/>
            </Route>
            <Route path ="/Add User">
                <AddUser/>
            </Route>

           </Router>
        </switch>
    )
}
export default Routes;