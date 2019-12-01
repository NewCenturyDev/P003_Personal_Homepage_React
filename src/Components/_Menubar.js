import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Image, Menu, Sidebar, Accordion, Icon } from 'semantic-ui-react'

class HeaderUnit extends Component {
    state = {
        activeIndex: 0,
        activeIcon: {
            list1: 'angle down',
            list2: 'angle down',
            list3: 'angle down'
        }
    }
    ActiveList = (num) => {
        let inputName = 'list' + num;
        let statusCopy = Object.assign({}, this.state);
        statusCopy.activeIcon = {list1: 'angle down', list2: 'angle down', list3: 'angle down'};
        if(num === this.state.activeIndex){
            statusCopy.activeIndex = 0;
            this.setState(statusCopy);
        }
        else{
            statusCopy.activeIndex = num;
            statusCopy.activeIcon[inputName] = 'angle up';
            this.setState(statusCopy);
        }
    }
    GotoFtpServer = () => {
        
        alert("보안 문제로 현재 개인 FTP 서버는 막아뒀습니다.");
        //window.open('http://htsv.ipdisk.co.kr:81/list/HDD1/Storage/');
    }
    render() {
        return(
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
                <Accordion>
                    <Accordion.Title onClick={() => this.ActiveList(1)} style={{padding: 0, marginBottom: 10}}>
                        <div style={{width: 240, margin: 0, float: 'left'}}>
                            <h3 style={{margin: 0}}>Hybrid Web Projects</h3>
                            <h5 style={{margin: 0}}>하이브리드 웹 프로젝트</h5>
                        </div>
                        <Icon size='large' style={{marginTop: 10, marginRight: 0}} name={this.state.activeIcon.list1}/>
                    </Accordion.Title>
                    <Accordion.Content active={this.state.activeIndex === 1}>
                        <Link to='/web1'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>001 | SCP-School</h5></Link>
                        <Link to='/web2'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>002 | My-Journals</h5></Link>
                        <Link to='/web3'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>003 | My-Journals-Mobile</h5></Link>
                        <Link to='/web4'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>004 | DK-Zone</h5></Link>
                        <Link to='/web5'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>005 | DK-Zone-Mobile</h5></Link>
                        <Link to='/web6'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>006 | HyperTech99's-Page</h5></Link>
                    </Accordion.Content>
                </Accordion>
            </Menu.Item>
            <Menu.Item>
                <Accordion>
                    <Accordion.Title onClick={() => this.ActiveList(2)} style={{padding: 0, marginBottom: 10}}>
                        <div style={{width: 240, margin: 0, float: 'left'}}>
                            <h3 style={{margin: 0}}>Hybrid Web Projects</h3>
                            <h5 style={{margin: 0}}>안드로이드 앱 프로젝트</h5>
                        </div>
                        <Icon size='large' style={{marginTop: 10, marginRight: 0}} name={this.state.activeIcon.list2}/>
                    </Accordion.Title>
                    <Accordion.Content active={this.state.activeIndex === 2}>
                        <Link to='/android1'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>001 | JH-High App</h5></Link>
                        <Link to='/android2'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>todo | SC2-Encyclopidia</h5></Link>
                    </Accordion.Content>
                </Accordion>
            </Menu.Item>
            <Menu.Item>
                <Accordion>
                    <Accordion.Title onClick={() => this.ActiveList(3)} style={{padding: 0, marginBottom: 10}}>
                        <div style={{width: 240, margin: 0, float: 'left'}}>
                            <h3 style={{margin: 0}}>Etc. Projects</h3>
                            <h5 style={{margin: 0}}>기타 프로젝트</h5>
                        </div>
                        <Icon size='large' style={{marginTop: 10, marginRight: 0}} name={this.state.activeIcon.list3}/>
                    </Accordion.Title>
                    <Accordion.Content active={this.state.activeIndex === 3}>
                        <Link to='/etc1'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>01 | (C)OSS-MineSweeper</h5></Link>
                        <Link to='/etc2'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>02 | (C++)Jjapke-Mon</h5></Link>
                        <Link to='/etc3'><h5 style={{margin: '5px 10px', color: 'grey', hover:'black'}}>03 | (JAVA)Jjaplu-Marble</h5></Link>
                    </Accordion.Content>
                </Accordion>
            </Menu.Item>
            <Menu.Item>
                <div onClick={this.GotoFtpServer} style={{cursor: 'pointer'}}>
                    <h3 style={{margin: 0, color:'black'}}>FTP File Server</h3>
                    <h5 style={{margin: 0, color:'black'}}>FTP 개인 파일서버</h5>
                </div>
            </Menu.Item>
            <div style={{width: 295, bottom: 0, position: 'absolute', textAlign: 'center'}}>
                <h5 style={{margin: 0}}>Dev. HyperTech99</h5>
                <h5 style={{margin: 0}}>Version - 0.60</h5>
                <h5 style={{margin: 0}}>Dec. 2. 2019</h5>
                <h3 style={{margin: 0}}>윤성민</h3>
                <br/>
            </div>
            </Sidebar>
        )
    }
}

export default HeaderUnit;