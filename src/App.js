import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/_Menubar';
import Intro from './Components/Intro';
import Profile from './Components/Profile';
import WebProject1 from './Components/HybridWebProject/SCP-School';
import WebProject2 from './Components/HybridWebProject/My-Journal-Express';
import WebProject3 from './Components/HybridWebProject/My-Journal-Express-Mobile';
import WebProject4 from './Components/HybridWebProject/DK-Zone';

export default () => (
    <Router>
        <Header></Header>
        <main style={{width: 'calc(100%-300px)', marginLeft: 300, fallbacks: [{width: '-moz-calc(100%-300px)'}, {width: '-webkit-calc(100%-300px)'}, {width: '-o-calc(100%-300px)'}]}}>
            <Route exact path="/" component={Intro}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/web1" component={WebProject1}></Route>
            <Route exact path="/web2" component={WebProject2}></Route>
            <Route exact path="/web3" component={WebProject3}></Route>
            <Route exact path="/web4" component={WebProject4}></Route>
        </main>
    </Router>
)