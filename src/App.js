import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/_Menubar';
import Intro from './Components/Intro';
import WebProject1 from './Components/HybridWebProject/SCP-School';
import WebProject2 from './Components/HybridWebProject/My-Journal-Express';
import WebProject3 from './Components/HybridWebProject/DK-Zone';

export default () => (
    <Router>
        <Header></Header>
        <main style={{top: 0, left: 260, width: 'calc(100% - 260px)', position: 'absolute'}}>
            <Route exact path="/" component={Intro}></Route>
            <Route exact path="/web1" component={WebProject1}></Route>
            <Route exact path="/web2" component={WebProject2}></Route>
            <Route exact path="/web3" component={WebProject3}></Route>
        </main>
    </Router>
)