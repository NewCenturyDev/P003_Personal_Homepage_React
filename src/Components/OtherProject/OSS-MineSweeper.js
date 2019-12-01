import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class OSS_MineSweeper extends Component {
    state = {
        imgSrc: "OtherProject/OSS-MineSweeper/1.png",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/OSS-MineSweeper/");
    }
    handleImg = (num) => {
        let img = ["OtherProject/OSS-MineSweeper/1.png",
        "OtherProject/OSS-MineSweeper/2.png",
        "OtherProject/OSS-MineSweeper/3.png",
        "OtherProject/OSS-MineSweeper/4.png",
        "OtherProject/OSS-MineSweeper/5.png" ]
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
                        <h1 style={{textAlign: 'center'}}>OSS-MineSweeper</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/OSS-MineSweeper</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 개요</h2>
                        <Divider></Divider>
                        <h3>프로젝트 참여자</h3>
                        <ul>
                            <li><h3>팀 프로젝트</h3></li>
                            <li>HyperTech99 (본인)</li>
                            <li>ParkJae-Sung</li>
                            <li>gusdn3477</li>
                            <li>Wwwoong</li>
                        </ul>
                        <h3>개발 배경</h3>
                        <p style={{margin: '0 25px'}}>
                        오픈소스SW 개론 수업을 들으며 오픈소스SW를 올바르게 인용하고 사용하는 방법에 대해 배우고,
                        오픈소스Sw 커뮤니티에 기여하는 방법을 배우며, Git과 GitHub의 심층적인 사용 방법을 배웠습니다.<br/>
                        배운 내용을 기반으로 Git에 숙달되고 오픈소스SW를 올바르게 사용해보기 위해서 기존 오픈소스SW를 가져다 개선해 보았습니다.<br/>
                        주제는 간단한 콘솔 지뢰찾기 게임입니다. 사실 프로그램 자체의 디테일보다는(흔하디 흔한 연습용 C 프로그램일 뿐이니..)<br/>
                        Git과 GitHub의 사용법을 배우는 데 주력하였습니다.<br/>
                        </p>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>연습 - Git, GitHub 사용 연습</li>
                            <li>오픈소스 - 저작권에 어긋나지 않는 올바른 방법으로 오픈소스 SW를 사용하는 연습</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>다음과 같은 주요 기능은 개발이 완료되었습니다.</b>
                        </p>
                        <ul>
                            <li>타이틀 화면과 게임 설정 화면, 게임 도움말 화면, 게임 진행 화면, 게임 결과 화면</li>
                            <li>지뢰 찾기 기능</li>
                            <li>지뢰판에 메모하는 기능</li>
                            <li>지뢰판 난이도 설정 기능</li>
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
                            간단한 C 기반의 지뢰찾기 게임을 할 수 있는 Console Application 입니다.<br/>
                            윈도우 환경과 리눅스 환경을 모두 지원합니다.
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 스크린-샷</h2>
                        <Menu pointing secondary>
                            <Menu.Item name='타이틀 화면' active={this.state.activeItem === 1} onClick={() => this.handleImg(1)}/>
                            <Menu.Item name='게임 도움말 화면' active={this.state.activeItem === 2} onClick={() => this.handleImg(2)}/>
                            <Menu.Item name='게임 설정 화면' active={this.state.activeItem === 3} onClick={() => this.handleImg(3)}/>
                            <Menu.Item name='게임 진행 화면' active={this.state.activeItem === 4} onClick={() => this.handleImg(4)}/>
                            <Menu.Item name='게임 결과 화면' active={this.state.activeItem === 5} onClick={() => this.handleImg(5)}/>
                        </Menu>
                        <img id="img" style={{margin: '0 calc(50% - 500px)'}} src={this.state.imgSrc} alt="이미지 로딩 실패"></img>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default OSS_MineSweeper;