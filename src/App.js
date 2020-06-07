import React from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart'
import {Provider} from 'react-redux';
import store from './store.js';
import "./App.css";
import { BrowserRouter ,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Nav />
        <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/cart' component={Cart}></Route>
        </Switch>

        
        
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
