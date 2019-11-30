import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class My_Journals_Express extends Component {
    state = {
        imgSrc: "HybridWebProject/My-Journal-Express/1.png",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/My-Journal-Express/");
    }
    openGithub2 = () => {
        window.open("https://github.com/HyperTech99/My-Journal-Express/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-DB-%EC%A0%95%EB%B3%B4");
    }
    openGithub3 = () => {
        window.open("https://github.com/HyperTech99/My-Journal-Express/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD");
    }
    handleImg = (num) => {
        let img1 = "HybridWebProject/My-Journal-Express/1.png";
        let img2 = "HybridWebProject/My-Journal-Express/2.png";
        let img3 = "HybridWebProject/My-Journal-Express/3.png";
        let img4 = "HybridWebProject/My-Journal-Express/4.png";
        let img5 = "HybridWebProject/My-Journal-Express/5.png";
        let img6 = "HybridWebProject/My-Journal-Express/6.png";
        let img7 = "HybridWebProject/My-Journal-Express/7.png";
        switch(num){
            case 1:
                this.setState({
                    imgSrc: img1,
                    activeItem: 1
                });
                break;
            case 2:
                this.setState({
                    imgSrc: img2,
                    activeItem: 2
                });
                break;
            case 3:
                this.setState({
                    imgSrc: img3,
                    activeItem: 3
                });
                break;
            case 4:
                this.setState({
                    imgSrc: img4,
                    activeItem: 4
                });
                break;
            case 5:
                this.setState({
                    imgSrc: img5,
                    activeItem: 5
                });
                break;
            case 6:
                this.setState({
                    imgSrc: img6,
                    activeItem: 6
                });
                break;
            case 7:
                this.setState({
                    imgSrc: img7,
                    activeItem: 7
                });
                break;
            default:
        }
    }

    render() { return(
        <div>
            <div style={{width: 'calc(100%-300px)',backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Grid columns={1} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                    <br/>
                    <Grid.Column>
                        <h1 style={{textAlign: 'center'}}>My-Journals</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/My-Journal-Express</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 개요</h2>
                        <Divider></Divider>
                        <h3>프로젝트 참여자</h3>
                        <ul>
                            <li><h3>팀 프로젝트</h3></li>
                            <li>HyperTech99 (본인)</li>
                            <li>Peach1000</li>
                            <li>IMNOOK</li>
                        </ul>
                        <h3>개발 배경</h3>
                        <p style={{margin: '0 25px'}}>
                            요즘 여러 SNS 서비스들이 절찬리에 서비스되고 있습니다.
                            하지만, 대부분의 SNS 서비스들은 피드 단위로 서비스됩니다.
                            또한, 여러 장의 사진이나 동영상을 추가하고 싶어도, 단순히 한 피드에 일렬로 주르륵 나열될 뿐이었습니다.
                            물론, 조금 더 디테일하게 포스트를 작성하고 싶다면, 네이버 블로그나 각종 커뮤니티 사이트들을 이용하여도 됩니다. 
                            하지만, 그러한 커뮤니티 사이트나 네이버 블로그는 사람에 따라서는 귀찮고, 너무 많은 시간을 소요한다는 문제점이 있습니다. 
                            그래서 SNS와 블로그를 결합하여, 절충한 웹 서비스를 기획하는 아이디어를 냈습니다.
                        </p>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>여러 장의 사진과 동영상, 그리고 텍스트 박스를 한 화면에 자유롭게 늘어놓을 수 있는 온라인 저널 시스템을 만드는 것이 목표입니다.</li>
                            <li>마치 스크랩 북이나 다이어리, 혹은 나만의 신문을 꾸미듯, 이미지와 동영상, 텍스트 박스들을 한 화면에 자유롭게 배치할 수 있는 것이 특징입니다.</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        현재 기본 기능들은 개발이 완료되었습니다.<br/>
                        <b>다음과 같은 기능들을 향후 추가할 계획입니다.</b>
                        </p>
                        <ul>
                            <li>댓글 작성 기능</li>
                            <li>저널 배경 이미지 변경 기능</li>
                            <li>저널 페이지수 확장(현재는 사용자당 세 페이지까지만 작성가능)</li>
                            <li>배경음악 변경 기능</li>
                            <li>등등...</li>
                        </ul>
                        <h3>팀 프로젝트 역할 분담</h3>
                        <ul>
                            <li><b>HyperTech99(본인): 모든 Frontend, Backend 화면과 기능의 구현, 부속 프로젝트</b></li>
                            <li>Peach1000: 모든 Frontend, Backend 화면과 기능의 구현 및 서비스 기획</li>
                            <li>IMNOOK: 일부 Frontend 화면의 구현, UI디자인</li>
                        </ul>
                        <h3>부속 프로젝트 - [My-Journals-Mobile]</h3>
                        <p style={{margin: '0 25px'}}>
                        웹과 안드로이드를 조합하여 만든 Hybrid Application 입니다.<br/>
                        본 프로젝트002의 경우 기본적인 UI 설계를 PC에 맞추어 하였습니다. (어느정도 반응형이 지원되기는 합니다)
                        그래서 10인치 미만의 화면을 가진 모바일 기기에서는 본 웹 서비스를 이용하는데 있어 불편함이 있었습니다.
                        그러한 불편함의 해소를 위해 모바일 버전 웹 페이지와 그에 기반하는 모바일 어플리케이션을 만들었습니다.
                        모바일 어플리케이션(안드로이드)의 경우 별도의 Repository와 Project명을 가지고 진행하였습니다.
                        자세한 내용은 프로젝트003(My-Journals-Mobile)를 참조해주세요.
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>개요</h3>
                        <p style={{margin: '0 25px'}}>
                            처음에는 Modern Web Framework의 사용도 검토하였습니다.
                            하지만, 동아리 팀 회의 결과 프레임워크 없이 진행하는 것으로 결정되었습니다.
                        </p>
                        <h3>Frontend</h3>
                        <ul>
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
                        <Button onClick={this.openGithub2}>DB 셋팅 정보</Button>
                        <Button onClick={this.openGithub3}>프로젝트 개발 환경 설정 방법</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 스크린-샷</h2>
                        <Menu pointing secondary>
                            <Menu.Item name='메인 화면' active={this.state.activeItem === 1} onClick={() => this.handleImg(1)}/>
                            <Menu.Item name='로그인 화면' active={this.state.activeItem === 2} onClick={() => this.handleImg(2)}/>
                            <Menu.Item name='회원가입 화면' active={this.state.activeItem === 3} onClick={() => this.handleImg(3)}/>
                            <Menu.Item name='ID / PW찾기 화면' active={this.state.activeItem === 4} onClick={() => this.handleImg(4)}/>
                            <Menu.Item name='컨텐츠 화면' active={this.state.activeItem === 5} onClick={() => this.handleImg(5)}/>
                            <Menu.Item name='프로필 화면' active={this.state.activeItem === 6} onClick={() => this.handleImg(6)}/>
                            <Menu.Item name='추천, 검색 화면' active={this.state.activeItem === 7} onClick={() => this.handleImg(7)}/>
                        </Menu>
                        <img id="img" width="100%" src={this.state.imgSrc} alt="이미지 로딩 실패"></img>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default My_Journals_Express;