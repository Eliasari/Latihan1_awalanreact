import React from 'react';
import Utama from './Component/Utama';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
<>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="" className="navbar-brand p-2" >BookStore</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link" >
                Beranda
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/karya" className="nav-link" >
                Karya
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/kontak" className="nav-link" >
                Kontak
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/tentangsaya" className="nav-link" >
                Tentangsaya
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/gallery" className="nav-link" >
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cart" className="nav-link" >
                Cart
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/pegawai" className="nav-link" >
                Daftar Pegawai
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
