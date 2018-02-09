import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Stars from "./components/stars/Stars";
import CheckAll from "./components/checkAll/CheckAll";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className='LinkBox'>
                    <Link className="App-intro" to='/stars'>
                        小星星评分
                    </Link>
                    <Link className="App-intro" to='/checkall'>
                        全选
                    </Link>

                </div>

                {/*<Stars />*/}
                <Route path='/stars' component={Stars}></Route>
                {/*<CheckAll/>*/}
                <Route path='/checkall' component={CheckAll}></Route>

            </div>
        );
    }
}

export default App;
