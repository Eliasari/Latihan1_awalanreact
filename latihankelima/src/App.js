import React, {Component} from 'react';  
import './App.css';  
import Alert from './Components/Alert';  
// import element Alert yang telah dibuat  

function App() {
  return (  
    <div className="App container col-sm-6">  
      <Alert type="danger" header="Fatal Error">  
        Ini adalah alert dengan tipe danger  
      </Alert>  
      <Alert type="success" header="Berhasil">  
        Ini adalah alert dengan tipe success  
      </Alert>  
      <Alert type="warning" header="Warning">  
        Ini adalah alert dengan tipe warning  
      </Alert>  
    </div>  
  );  

}

export default App;
