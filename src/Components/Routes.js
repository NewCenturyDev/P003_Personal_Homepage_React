import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import WebProject1 from './HybridWebProject/SCP-School';
import WebProject2 from './HybridWebProject/My-Journal-Express';
import WebProject3 from './HybridWebProject/DK-Zone';

export default () => (
    <Router>
        <Header></Header>
        <Route path="/web1" component={WebProject1}></Route>
        <Route path="/web2" component={WebProject2}></Route>
        <Route path="/web3" component={WebProject3}></Route>
    </Router>
)