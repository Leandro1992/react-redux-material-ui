import React, { useCallback } from 'react'
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import './App.css';
import Input from './components/input/'
import SearchField from './components/search-field'
import {Toolbar } from '@material-ui/core'
import Dashboard from './views/dashboard'

function App() {

  //EXEMPLE - THIS SECTION SHOUD BE IN STORE OR SLICE FILE (REDUCER)
  const [formData, setValues] = React.useState({
    pass: '',
    search: ''
  });

  const onInputChange = useCallback(event => {
    const { name, value } = event.target
    setValues({ ...formData, [name]: value });
  })
  //END OF EXEMPLE SECTION

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Toolbar>
          <SearchField name="search" value={formData.search} onChange={onInputChange}/>
          <Input
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            name='pass'
            onChange={onInputChange}
            value={formData.pass}
          />
        </Toolbar>
        <Dashboard />
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
