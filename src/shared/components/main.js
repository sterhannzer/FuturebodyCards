import React from 'react';
import {Route} from 'react-router-dom';
import Portfolio from 'shared/components/portfolio';
import Contact from 'shared/components/contact';

import 'shared/styles/main.css'

const Main = () => (

    <div className="main-content">
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
    </div>
)

export default Main;