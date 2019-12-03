import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class DK_Zone_Mobile extends Component {
    state = {
        imgSrc: "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/1.jpg",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/DK-Zone-Mobile/");
    }
    handleImg = (num) => {
        let img = ["http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/1.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/2.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/3.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/4.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/5.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/6.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/7.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/8.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/9.jpg",
        "http://htsv.ipdisk.co.kr:81/list/HDD1/HybridWebProject/DK-Zone-Mobile/10.jpg" ]
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
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>기술 스택 개요</h3>
                        <ul>
                            <li>Frontend는 Web-Page는 PC와 공용하지만, 추가로 Android Application을 연동하는 방식으로 만들었습니다.</li>
                            <li>Backend는 기존 My-Journal-Express 웹 서버와 공용합니다.</li>
                        </ul>
                        <h3>Frontend</h3>
                        <ul>
                            <li>Android FrameWork (JAVA) - WebView로 모바일 페이지를 보여주고, 최초 로딩 화면을 띄우는 데 사용했습니다.</li>
                            <li>Vue.js (Modern Web FrameWork) - 레이아웃 구성 및 백엔드 서버와의 연동(From 전송/데이터 수신 및 처리 등)과 사용자 조작에 동적으로 반응하기 위해 사용했습니다.</li>
                            <li>Vuetify (Design Library) - UI 레이아웃을 구현하고 모바일과 공용하여 사용할 수 있을 정도로 적극적인 반응형을 지원하는 데 사용했습니다.</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js (Express.js) - DB와 연동하여 사용자의 조작에 따라 CRUD(생성, 읽기, 갱신, 삭제), 파일 업로드 작업을 하기 위해 사용했습니다.</li>
                        </ul>
                        <h3>DB</h3>
                        <ul>
                            <li>MySQL - 회원 정보, 친구 정보, 쪽지 정보, 컨텐츠 정보 등을 저장하기 위해 사용했습니다.</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 구현</h2>
                        <Divider></Divider>
                        <h3>구현 내용 개요</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>개인취미(덕후) 문화에 특화된 인스타그램형 SNS (모바일용 클라이언트)</b>
                        </p>
                        <h3>구현 완료 기능</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>다음과 같은 기능들은 현재 개발이 완료되었습니다.</b>
                        </p>
                        <ul>
                            <li>앱 최초 구동시 로고 및 인트로 화면을 띄워주는 기능</li>
                            <li>회원가입, 탈퇴, 로그인, 로그아웃, ID/PW찾기, 회원정보 수정 기능</li>
                            <li>사진/동영상/텍스트/태그를 포함한 게시물 작성, 수정, 삭제 기능</li>
                            <li>저널 페이지 이름 변경 기능</li>
                            <li>프로필 조회 및 수정 기능</li>
                            <li>사용자간 쪽지 수발신 기능</li>
                            <li>다른 사용자 친구 추가 및 친구목록 관리 기능</li>
                            <li>다른 사용자가 작성한 게시물을 검색하는 기능</li>
                            <li>최근 전시장에서 진행되는 취미 관련 전시회들을 보여주는 기능 (제한적)</li>
                            <li>최근 이슈가 되고 있는 취미 관련 기사, 포스트를 보여주는 기능 (제한적)</li>
                            <li>기타 위의 기능들을 보조하기 위한 기능 및 PC 버전 웹페이지에서 구현된 모든 기능</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
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
                            <li>기타 필요하거나 추가하면 좋을 것 같다고 생각하는 기능</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기획</h2>
                        <Divider></Divider>
                        <h3>프로젝트 참여자</h3>
                        <ul>
                            <li><h3>개인 프로젝트</h3></li>
                            <li>HyperTech99 (본인)</li>
                        </ul>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>단순 - 직관적 인터페이스, 간소화된 메인 컨텐츠</li>
                            <li>선택 - 피드의 선택적 구성, 개인화된 저장, 검색</li>
                            <li>재미 - 과시하는 즐거움, 공유하는 즐거움</li>
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