import React from 'react';
import {Link} from "react-router-dom";
import { Image, Menu, Sidebar } from 'semantic-ui-react'

const HeaderUnit = () => (
    <Sidebar as={Menu} style={{width: 300}} animation='uncover' direction='left' vertical visible>
        <Menu.Item header>
            <Link to='/'>
                <div style={{height: 50}}>
                    <Image style={{width: 50, height: 50, marginTop: -10, marginRight: 5, display: 'inline-block'}} src='http://placehold.it/55x55/' />
                    <h2 style={{height: 50, margin: 0, color:'black', display: 'inline-block', lineHeight:'50px'}}>HyperTech99</h2>
                </div>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/profile'>
                <h3 style={{margin: 0, color:'black'}}>Personal Profile</h3>
                <h5 style={{margin: 0, color:'black'}}>개인 프로필</h5>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <h3 style={{margin: 0}}>Hybrid Web Projects</h3>
            <h5 style={{margin: 0}}>하이브리드 웹 프로젝트</h5>
            <Link to='/web1'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>001 | SCP-School</h5></Link>
            <Link to='/web2'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>002 | My-Journals</h5></Link>
            <Link to='/web3'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>003 | My-Journals-Mobile</h5></Link>
            <Link to='/web4'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>004 | DK-Zone</h5></Link>
            <Link to='/web5'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>005 | DK-Zone-Mobile</h5></Link>
            <Link to='/web6'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>006 | HyperTech99's-Page</h5></Link>
        </Menu.Item>
        <Menu.Item>
            <h3 style={{margin: 0}}>Hybrid Web Projects</h3>
            <h5 style={{margin: 0}}>안드로이드 앱 프로젝트</h5>
            <Link to='/android1'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>001 | JH-High App</h5></Link>
            <Link to='/android2'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>todo | SC2-Encyclopidia</h5></Link>
        </Menu.Item>
        <Menu.Item>
            <h3 style={{margin: 0}}>Etc. Projects</h3>
            <h5 style={{margin: 0}}>기타 프로젝트</h5>
            <Link to='/etc1'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>01 | (C)OSS-MineSweeper</h5></Link>
            <Link to='/etc2'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>02 | (C++)JJapke-Mon</h5></Link>
            <Link to='/etc3'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>03 | (JAVA)JjapluMarble</h5></Link>
        </Menu.Item>
    </Sidebar>
)

/* CSS */
/*const Style_Header = {
    width: '100%',
    height: '300px',
    backgroundColor: 'black',
    //background-images: ''
};*/
export default HeaderUnit;