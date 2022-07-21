import logo from './logo.svg';
import './App.css';
import _ from 'lodash'

function App() {
    const arr = [
        {id:1,number :1},
        {id:2,number :2},
        {id:3,number :3},
        {id:4,number :4},
        {id:5,number :5},
        {id:6,number :6},
        {id:7,number :7},
    ]

  return (
    <div className="App">
      <header className="App-header">
          {arr.map(item =>{
              return <p>{_.get(item,'number',0)}</p>
          })}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
