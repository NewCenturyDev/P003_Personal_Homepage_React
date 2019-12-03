import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class Jjapke_Mon extends Component {
    state = {
        imgSrc: "http://htsv.ipdisk.co.kr:81/list/HDD1/OtherProject/Jjapke-Mon/1.png",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/Jjapke-Mon/");
    }
    handleImg = (num) => {
        let img = ["http://htsv.ipdisk.co.kr:81/list/HDD1/OtherProject/Jjapke-Mon/1.png",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/OtherProject/Jjapke-Mon/2.png",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/OtherProject/Jjapke-Mon/3.png",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/OtherProject/Jjapke-Mon/4.png" ]
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
                        <h1 style={{textAlign: 'center'}}>Jjapke-Mon</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/Jjapke-Mon</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>개요</h3>
                        <p style={{margin: '0 25px'}}>
                            간단한 C++ 기반의 Console Application 입니다.
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 구현</h2>
                        <Divider></Divider>
                        <h3>구현 내용 개요</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>레트로 스타일의 CLI 포켓몬류 게임</b>
                        </p>
                        <h3>구현 완료 기능</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>다음과 같은 주요 기능은 개발이 완료되었습니다.</b>
                        </p>
                        <ul>
                            <li>타이틀 화면과 메뉴 화면, 게임 화면, 결과 화면</li>
                            <li>포켓몬 정보 표시 기능</li>
                            <li>포켓몬 스킬 사용 기능</li>
                            <li>플레이어 프로필 기능</li>
                            <li>플레이어 통계 기능 (통계 기능으로 생성된 통계가 다음 게임에 영향을 줌)</li>
                            <li>기타 위의 기능들을 보조하기 위한 기능</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>연습용 프로젝트이므로 추가적인 개발을 할 계획은 없습니다.</b>
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기획</h2>
                        <Divider></Divider>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>연습 - C++ 프로그래밍 및 문법, 디자인 패턴 연습</li>
                            <li>고전 - 고전 게임 분위기를 낼 수 있는 CLI 어플리케이션</li>
                        </ul>
                        <h3>개발 배경</h3>
                        <p style={{margin: '0 25px'}}>
                        C++ 수업을 들으며 C++ 프로그래밍에 익숙해지기 위해서 이 프로젝트를 만들었습니다.<br/>
                        어린 시절 즐겼던 포켓몬 게임의 대전 부분을 구현하였습니다. 연습용으로 진행한 프로젝트이긴 하지만
                        어느정도의 디테일을 위해 래스터 글꼴 등을 사용하여 고전게임 분위기를 냈습니다.<br/>
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

export default Jjapke_Mon;