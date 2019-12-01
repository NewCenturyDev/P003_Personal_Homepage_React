import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class Jjaplu_Marble extends Component {
    state = {
        imgSrc: "OtherProject/Jjaplu-Marble/1.png",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/Jjaplu-Marble/");
    }
    handleImg = (num) => {
        let img = ["OtherProject/Jjaplu-Marble/1.png",
        "OtherProject/Jjaplu-Marble/2.png",
        "OtherProject/Jjaplu-Marble/3.png",
        "OtherProject/Jjaplu-Marble/4.png" ]
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
                        <h1 style={{textAlign: 'center'}}>Jjaplu-Marble</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/Jjaplu-Marble</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 개요</h2>
                        <Divider></Divider>
                        <h3>프로젝트 참여자</h3>
                        <ul>
                            <li><h3>팀 프로젝트</h3></li>
                            <li>HyperTech99 (본인)</li>
                            <li>Wwwoong</li>
                        </ul>
                        <h3>개발 배경</h3>
                        <p style={{margin: '0 25px'}}>
                        JAVA 수업을 들으며 JAVA 프로그래밍에 익숙해지기 위해서 이 프로젝트를 만들었습니다.<br/>
                        어린 시절 즐겼던 블루마블 게임을 구현하였습니다. 연습용으로 진행한 프로젝트이긴 하지만
                        어느정도의 디테일을 위해 Swing GUI를 사용하여 분위기를 냈습니다.<br/>
                        
                        </p>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>연습 - JAVA 프로그래밍 및 문법, 디자인 패턴 연습</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>다음과 같은 주요 기능은 개발이 완료되었습니다.</b>
                        </p>
                        <ul>
                            <li>타이틀 화면과 메뉴 화면, 게임 보드 화면, 결과 화면</li>
                            <li>게임판, 건물 짓기 기능</li>
                            <li>주사위 굴리기 및 말 옮기기 기능</li>
                            <li>은행 기능</li>
                            <li>등등..</li>
                        </ul>
                        <p style={{margin: '0 25px'}}>
                        <b>연습용 프로젝트이므로 추가적인 개발을 할 계획은 없습니다.</b>
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>개요</h3>
                        <p style={{margin: '0 25px'}}>
                            간단한 JAVA 기반의 Swing API를 사용한 GUI Application 입니다.
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 스크린-샷</h2>
                        <Menu pointing secondary>
                            <Menu.Item name='프로필 선택 화면' active={this.state.activeItem === 1} onClick={() => this.handleImg(1)}/>
                            <Menu.Item name='메인 메뉴 화면' active={this.state.activeItem === 2} onClick={() => this.handleImg(2)}/>
                            <Menu.Item name='게임 화면' active={this.state.activeItem === 3} onClick={() => this.handleImg(3)}/>
                            <Menu.Item name='게임 결과 화면' active={this.state.activeItem === 4} onClick={() => this.handleImg(4)}/>
                        </Menu>
                        <img id="img" style={{margin: '0 calc(50% - 225px)'}} src={this.state.imgSrc} alt="이미지 로딩 실패"></img>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default Jjaplu_Marble;