import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Admin from './adminIndex'

// 这个文件配置路由的

function Main() {

    return (
        <Router>
            <Route path="/login/" exact component={Login}></Route>
            <Route path="/admin" exact component ={Admin}></Route>
        </Router>
    )
}

export default Main