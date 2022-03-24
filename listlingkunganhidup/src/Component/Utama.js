import React from 'react';
import { Switch , Route} from 'react-router-dom';

import Event from '../pages/Event';

const Utama = () => (
    <Switch>
        <Route path="/event" component={Event} />
    </Switch>
)

export default Utama;