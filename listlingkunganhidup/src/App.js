import React from 'react';
import Utama from './Component/Utama';
import { Link } from 'react-router-dom';

class App extends React.Component{
  render() {
    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="" className="navbar-brand p-2" >Eventss</Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/event" className="nav-link" >
                Event
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <p><Utama /></p>
    </>
    );
  }
}

export default App;
