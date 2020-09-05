import React,{Component} from 'react';
import Main from './MyComponents/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './Redux/Store';
import './App.css';

class App extends Component {
  

  
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter> 
            <Main/>
        </BrowserRouter>
      </Provider>
    );
  }
  
}

export default App;
