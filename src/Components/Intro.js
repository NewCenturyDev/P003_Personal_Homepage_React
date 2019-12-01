import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React, { Component } from 'react';
import { Grid, Divider, Button } from 'semantic-ui-react';
import './Style.css';


class Intro extends Component {
    openGithub = () => {
        window.open("https://github.com/HyperTech99/");
    }
    render() { return(
        <div>
            <div style={{width: 'calc(100%-300px)', backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Grid columns={1} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                    <br/>
                    <Grid.Column>
                        <h1 style={{textAlign: 'center'}}>HyperTech99's Tech Blog</h1>
                    </Grid.Column>
                    <Grid.Column className='grid_block' style={{textAlign: 'center'}}>
                        <h2 style={{margin: 0}}>안녕하세요</h2>
                        <h3 style={{margin: 0}}>프로그램 개발자가 되기를 지망하는 컴퓨터공학과 학부생입니다.</h3>
                        <br/>
                        <img src='http://htsv.ipdisk.co.kr:81/list/HDD1/logo.png' alt='이미지 로딩 오류' style={{width: '100%' }}></img>
                        <Button basic size='huge' onClick={this.openGithub} style={{width:'500px', margin: 0, color:'Navy', cursor:'pointer'}}>Github: HyperTech99</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block' style={{textAlign: 'center', backgroundColor: 'SkyBlue'}}>
                        <h3 style={{margin: 0}}>현재 병특 개발자를 꿈꾸고 있습니다..</h3>
                        <h3 style={{margin: 0}}>보충역 IT 산업기능요원을 받아주실 수 있는 산업체를 매우 절실히 구하고 있습니다..</h3>
                        <h3 style={{margin: 0}}>부디 한 청년의 꿈을 이뤄주세요..!</h3>
                        
                    </Grid.Column>
                </Grid>
                <h2 style={{margin: 0, textAlign: 'center', marginTop: 30}}>최근 진행중인 프로젝트들</h2>
                <Grid columns={3} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                    <Grid.Column style={{textAlign: 'center'}}>
                        <h2 style={{margin: 0}}>My-Journals</h2>
                        <Divider></Divider>
                        <ul>
                            <li style={{paddingRight: 35}}><b>JQuery + Express.js</b></li>
                            <li style={{paddingRight: 35}}>여러 장의 사진과 동영상, 그리고 텍스트 박스를 한 화면에 자유롭게 늘어놓을 수 있는 온라인 저널 시스템을 만드는 것이 목표입니다.</li>
                            <li style={{paddingRight: 35}}>마치 스크랩 북이나 다이어리, 혹은 나만의 신문을 꾸미듯, 이미지와 동영상, 텍스트 박스들을 한 화면에 자유롭게 배치할 수 있는 것이 특징입니다.</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column style={{textAlign: 'center'}}>
                        <h2 style={{margin: 0}}>DK-Zone</h2>
                        <Divider></Divider>
                        <ul>
                            <li style={{paddingRight: 35}}><b>Vue.js + Vuetify + Express.js</b></li>
                            <li style={{paddingRight: 35}}>여러 분야의 덕후들을 위한 맞춤형 SNS</li>
                            <li style={{paddingRight: 35}}>단순 - 직관적 인터페이스, 간소화된 메인 컨텐츠</li>
                            <li style={{paddingRight: 35}}>선택 - 피드의 선택적 구성, 개인화된 저장, 검색</li>
                            <li style={{paddingRight: 35}}>재미 - 과시하는 즐거움, 공유하는 즐거움</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column style={{textAlign: 'center'}}>
                        <h2 style={{margin: 0}}>HyperTech99's Page</h2>
                        <Divider></Divider>
                        <ul>
                            <li style={{paddingRight: 35}}><b>React.js + Sementic UI React</b></li>
                            <li style={{paddingRight: 35}}>React.js를 사용하여 개인 홈페이지를 리뉴얼하게 되었습니다.</li>
                            <li style={{paddingRight: 35}}>심플 - 지나치지 않고 무난하면서 깔끔한 디자인</li>
                            <li style={{paddingRight: 35}}>아카이브 - 지금까지 해 왔던 프로젝트를 깔끔하고 명쾌하게 소개하고 정리</li>
                            <li style={{paddingRight: 35}}>아이디어뱅크 - 앞으로 진행할 개인/팀 프로젝트의 기획 또는 컨셉을 떠오를때마다 정리</li>
                        </ul>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default Intro;