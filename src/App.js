import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/_Menubar';
import Intro from './Components/Intro';
import Profile from './Components/Profile';
import WebProject1 from './Components/HybridWebProject/SCP-School';
import WebProject2 from './Components/HybridWebProject/My-Journal-Express';
import WebProject3 from './Components/HybridWebProject/My-Journal-Express-Mobile';
import WebProject4 from './Components/HybridWebProject/DK-Zone';
import WebProject5 from './Components/HybridWebProject/DK-Zone-Mobile';
import WebProject6 from './Components/HybridWebProject/HyperTech99s-Page';
import AndroidProject1 from './Components/AndroidProject/JH-High-App';
import AndroidProject2 from './Components/AndroidProject/SC2-Encyclopidia';
import EtcProject1 from './Components/OtherProject/OSS-MineSweeper';
import EtcProject2 from './Components/OtherProject/Jjapke-Mon';
import EtcProject3 from './Components/OtherProject/Jjaplu-Marble';

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
            <Route exact path="/web5" component={WebProject5}></Route>
            <Route exact path="/web6" component={WebProject6}></Route>
            <Route exact path="/android1" component={AndroidProject1}></Route>
            <Route exact path="/android2" component={AndroidProject2}></Route>
            <Route exact path="/etc1" component={EtcProject1}></Route>
            <Route exact path="/etc2" component={EtcProject2}></Route>
            <Route exact path="/etc3" component={EtcProject3}></Route>
        </main>
    </Router>
)