import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class DK_Zone_Mobile extends Component {
    state = {
        imgSrc: "HybridWebProject/DK-Zone-Mobile/1.jpg",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/DK-Zone-Mobile/");
    }
    handleImg = (num) => {
        let img = ["HybridWebProject/DK-Zone-Mobile/1.jpg",
        "HybridWebProject/DK-Zone-Mobile/2.jpg",
        "HybridWebProject/DK-Zone-Mobile/3.jpg",
        "HybridWebProject/DK-Zone-Mobile/4.jpg",
        "HybridWebProject/DK-Zone-Mobile/5.jpg",
        "HybridWebProject/DK-Zone-Mobile/6.jpg",
        "HybridWebProject/DK-Zone-Mobile/7.jpg",
        "HybridWebProject/DK-Zone-Mobile/8.jpg",
        "HybridWebProject/DK-Zone-Mobile/9.jpg",
        "HybridWebProject/DK-Zone-Mobile/10.jpg" ]
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
                        <h1 style={{textAlign: 'center'}}>DK-Zone-Mobile</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/DK-Zone-Mobile</Button>
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
                        DK-Zone 웹 서비스의 경우 반응형 레이아웃을 매우 적극적으로 사용하였기에 별도의 모바일 페이지가 필요하진 않지만,
                        추후의 기능 추가 및 확장성을 고려하여 모바일 어플리케이션을 만들었습니다. 모바일 어플리케이션(안드로이드)의 경우
                        별도의 Repository와 Project명을 가지고 진행하였습니다.<br/>
                        취향 소비의 확산으로 덕후 문화도 매니아적 영역을 벗어나 화장품, 캐릭터, 음식 등 다양한 영역으로 확장되고 있다.
                        이들은 '인증샷'을 통해 자신의 취향을 SNS에 공유한다. 이제 소비는 자신을 드러내는 수단이며, 성취감을 얻는 행위이다.
                        하지만 기존의 트위터나 인스타그램의 경우 아이돌 문화에 치중되었다는 단점이 잇고, 그 외의 카페 등 다른 커뮤니티 사이트의
                        경우 다양한 덕후 문화 생성(예시: 피규어, 인형 커뮤니티 등)과 함께 공동구매, 후기작성, 정보 공유가 활발하지만,
                        전통적인 영역 외의 새롭게 탄생한 분야는 외면받는다는 단점이 있다.<br/>
                        
                        </p>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>단순 - 직관적 인터페이스, 간소화된 메인 컨텐츠</li>
                            <li>선택 - 피드의 선택적 구성, 개인화된 저장, 검색</li>
                            <li>재미 - 과시하는 즐거움, 공유하는 즐거움</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        현재 기본 기능들은 개발이 완료되었습니다.<br/>
                        <b>다음과 같은 기능들을 향후 추가할 계획입니다.</b>
                        </p>
                        <ul>
                            <li>푸시 알림 기능</li>
                            <li>다른 App으로 공유할 수 있는 기능</li>
                            <li>바로 찍어서 업로드 기능</li>
                            <li>로컬 저장소로 다운받는 기능</li>
                            <li>페이지 스크랩 기능</li>
                            <li>'덕후존' 형태 지정 기능</li>
                            <li>상세검색 기능</li>
                            <li>친구로 추가되지 않은 사용자에게 쪽지를 보낼 수 있는 기능</li>
                            <li>등등...</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>개요</h3>
                        <p style={{margin: '0 25px'}}>
                            Frontend는 Web-Page는 PC와 공용하지만, 추가로 Android Application을 연동하는 방식으로 만들었습니다.<br/>
                            Backend는 기존 My-Journal-Express 웹 서버와 공용합니다.
                        </p>
                        <h3>Frontend</h3>
                        <ul>
                            <li>Android FrameWork (JAVA)</li>
                            <li>Vue.js (Modern Web FrameWork)</li>
                            <li>Vuetify (Design Library)</li>
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
                            <Menu.Item name='ID/PW 찾기 화면' active={this.state.activeItem === 4} onClick={() => this.handleImg(4)}/>
                            <Menu.Item name='타임라인 화면' active={this.state.activeItem === 5} onClick={() => this.handleImg(5)}/>
                            <Menu.Item name='사이드바 화면' active={this.state.activeItem === 6} onClick={() => this.handleImg(6)}/>
                            <Menu.Item name='프로필 화면' active={this.state.activeItem === 7} onClick={() => this.handleImg(7)}/>
                            <Menu.Item name='친구목록 화면' active={this.state.activeItem === 8} onClick={() => this.handleImg(8)}/>
                            <Menu.Item name='쪽지함 화면' active={this.state.activeItem === 9} onClick={() => this.handleImg(9)}/>
                            <Menu.Item name='게시물 작성 화면' active={this.state.activeItem === 10} onClick={() => this.handleImg(10)}/>
                        </Menu>
                        <img id="img" style={{margin: '0 calc(50% - 150px)'}} height="600px" src={this.state.imgSrc} alt="이미지 로딩 실패"></img>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default DK_Zone_Mobile;