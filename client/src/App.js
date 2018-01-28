import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Examples from './components/Example/example';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">React Express Bootstrap</h1>
          </header>
          <Examples />
        </div>
      </Provider>
    )
  }
}

export default App