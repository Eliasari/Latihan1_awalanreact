import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda';
import TentangSaya from './Tentangsaya';
import Karya from './Karya';
import Kontak from './Kontak';
import Gallery from '../pages/Gallery';
import Cart from '../pages/Cart';

const Utama = () => (
    <Switch>
    {/* exact = yang pertama kali ditampilkan = index */}
    {/* tanpa exact sebenere bisa */}
    <Route exact path="/" component={Beranda} />
    <Route path="/Tentangsaya" component={TentangSaya} />
    <Route path="/karya" component={Karya} />
    <Route path="/kontak" component={Kontak} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/cart" component={Cart} />
    </Switch>
)

export default Utama;
