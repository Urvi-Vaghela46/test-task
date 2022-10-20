import logo from './logo.svg';
import './App.css';
import { React, useState } from "react";
import ListData from './ListData';
function App() {
  const [itemtext, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="App">
      <div className='container'>
        <h1 className='mt-5'>Search on Github</h1>
        <div className='row'>
          <div className='col-12 mt-5'>
            <div className="search mb-4">
              <input type="text"
                id="outlined-basic"
                variant="outlined"
                label="Search"
                className=''
                onChange={inputHandler}
              />
            </div>
          </div>
          <div className='col-12'>
            <ListData input={itemtext} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
