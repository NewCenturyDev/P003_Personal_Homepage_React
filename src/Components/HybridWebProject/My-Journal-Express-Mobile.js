import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class My_Journals_Express_Mobile extends Component {
    state = {
        imgSrc: "HybridWebProject/My-Journal-Express-Mobile/1.jpg",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/My-Journal-Express-Mobile/");
    }
    handleImg = (num) => {
        let img = [ "HybridWebProject/My-Journal-Express-Mobile/1.jpg",
        "HybridWebProject/My-Journal-Express-Mobile/2.jpg",
        "HybridWebProject/My-Journal-Express-Mobile/3.jpg",
        "HybridWebProject/My-Journal-Express-Mobile/4.jpg",
        "HybridWebProject/My-Journal-Express-Mobile/5.jpg",
        "HybridWebProject/My-Journal-Express-Mobile/6.jpg",
        "HybridWebProject/My-Journal-Express-Mobile/7.jpg" ]
        this.setState({
            imgSrc: img[num - 1],
            activeItem: num
        });
    }

    render() { return(
        <div>
            <div style={{width: 'calc(100%-300px)',backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Grid columns={1} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                    <br/>
                    <Grid.Column>
                        <h1 style={{textAlign: 'center'}}>My-Journals-Mobile</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/My-Journal-Express-Mobile</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 개요</h2>
                        <Divider></Divider>
                        <h3>프로젝트 참여자</h3>
                        <ul>
                            <li><h3>개인 프로젝트</h3></li>
                            <li>HyperTech99 (본인)</li>
                        </ul>
                        <h3>개발 배경</h3>
                        <p style={{margin: '0 25px'}}>
                        웹과 안드로이드를 조합하여 만든 Hybrid Application 입니다.<br/>
                        원래 팀으로 진행했던 My-Journal-Express 웹 서비스의 경우 기본적인 UI 설계를 PC에 맞추어 하였습니다. (어느정도 반응형이 지원되기는 합니다)
                        그래서 10인치 미만의 화면을 가진 모바일 기기에서는 본 웹 서비스를 이용하는데 있어 불편함이 있었습니다.
                        그러한 불편함의 해소를 위해 모바일 버전 웹 페이지와 그에 기반하는 모바일 어플리케이션을 만들었습니다.
                        모바일 어플리케이션(안드로이드)의 경우 별도의 Repository와 Project명을 가지고 진행하였습니다.
                        </p>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>여러 장의 사진과 동영상, 그리고 텍스트 박스를 한 화면에 자유롭게 늘어놓을 수 있는 온라인 저널 시스템을 만드는 것이 목표입니다.</li>
                            <li>마치 스크랩 북이나 다이어리, 혹은 나만의 신문을 꾸미듯, 이미지와 동영상, 텍스트 박스들을 한 화면에 자유롭게 배치할 수 있는 것이 특징입니다.</li>
                            <li>My-Journal-Express의 상당수 기능들을 모바일에서 편리한 인터페이스로 사용할 수 있게 하는 것이 목표입니다.</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        현재 기본 기능들은 개발이 완료되었습니다.<br/>
                        <b>다음과 같은 기능들을 향후 추가할 계획입니다.</b>
                        </p>
                        <ul>
                            <li>컨텐츠 페이지 iframe 구현방식을 다른 방식으로 변경</li>
                            <li>다른 사람이 자신에게 쪽지를 보냈을 때 푸시 알림 기능 추가</li>
                            <li>댓글 작성 기능</li>
                            <li>저널 배경 이미지 변경 기능</li>
                            <li>저널 페이지수 확장(현재는 사용자당 세 페이지까지만 작성가능)</li>
                            <li>배경음악 변경 기능</li>
                            <li>등등...</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>개요</h3>
                        <p style={{margin: '0 25px'}}>
                            Frontend는 별도의 Web Page와 Android Application으로 만들었습니다.<br/>
                            Backend는 기존 My-Journal-Express 웹 서버와 공용합니다.
                        </p>
                        <h3>Frontend</h3>
                        <ul>
                            <li>Android FrameWork (JAVA)</li>
                            <li>순수 HTML5 + CSS3</li>
                            <li>순수 JS + JQuery</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js (Express.js)</li>
                        </ul>
                        <h3>DB</h3>
                        <ul>
                            <li>MySQL</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 스크린-샷</h2>
                        <Menu pointing secondary>
                            <Menu.Item name='로딩 화면' active={this.state.activeItem === 1} onClick={() => this.handleImg(1)}/>
                            <Menu.Item name='로그인 화면' active={this.state.activeItem === 2} onClick={() => this.handleImg(2)}/>
                            <Menu.Item name='회원가입 화면' active={this.state.activeItem === 3} onClick={() => this.handleImg(3)}/>
                            <Menu.Item name='ID / PW 화면' active={this.state.activeItem === 4} onClick={() => this.handleImg(4)}/>
                            <Menu.Item name='컨텐츠 화면' active={this.state.activeItem === 5} onClick={() => this.handleImg(5)}/>
                            <Menu.Item name='프로필 화면' active={this.state.activeItem === 6} onClick={() => this.handleImg(6)}/>
                            <Menu.Item name='추천, 검색 화면' active={this.state.activeItem === 7} onClick={() => this.handleImg(7)}/>
                        </Menu>
                        <img id="img" style={{margin: '0 calc(50% - 150px)'}} height="600px" src={this.state.imgSrc} alt="이미지 로딩 실패"></img>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default My_Journals_Express_Mobile;