import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class SC2_Encyclopidia extends Component {
    state = {

    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/SC2-Encyclopidia/");
    }
    handleImg = (num) => {
        let img = []
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
                        <h1 style={{textAlign: 'center'}}>TODO: SC2-Encyclopidia</h1>
                        <Button disabled onClick={this.openGithub}>GitHub : HyperTech99/SC2-Encyclopidia</Button>
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
                        개인적으로 Starcraft와 Starcraft II 게임을 즐기고 있는데, 아무래도 Starcraft의 경우 출시된 지 20년이 넘어가고,
                        Starcraft II의 경우 출시 당시에 경쟁하던 League of Legends에 인기를 빼앗겨 도태되어 마이너한 게임이 되어버려서 그런지,
                        LOL이나 오버워치, 또는 다른 국산게임(넥슨게임 등)에 비해 Starcraft 시리즈의 공략집 및 백과사전류의 어플은 시중에서 거의 찾을 수 없었습니다.
                        한두가지의 관련 어플을 찾을 순 있었지만 다른 게임과 같이 롤백과사전 형태의 올인원 어플이 존재하지 않았으며, 보통 한두가지 기능만 지원하였습니다.<br/>
                        이에 Starcraft 시리즈 빠돌이로써 여러 기능이 지원되는 공략집 및 백과사전 어플을 만들어보려고 합니다.<br/>
                        
                        </p>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>올인원 - 롤백과사전과 같이 최대한 많은 정보를 수록</li>
                            <li>심플 - 한 눈에 들어오고 가독성이 높은 UI를 채택</li>
                            <li>관문 - 여러 SC2 커뮤니티들과의 연계</li>
                            <li>Unit Guide for SC2</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>다음과 같은 기능들을 계획하고 있습니다.</b>
                        </p>
                        <ul>
                            <li>빌드오더와 전략 - SC1의 경우 "Leo Park" 개발자의 "빌드오더와 전략" 어플리케이션 참조, SC2의 경우 커뮤니티 "인벤" 참조</li>
                            <li>각종 프로경기 영상 링크 - SC1의 경우 "Zdiv" 개발자의 "스타리그 명경기 다시보기" 어플리케이션 참조, SC2의 경우 공식 WCS 어플리케이션 참조</li>
                            <li>공략 영상 링크 - YouTube에서 Starcraft나 Starcraft II를 취급하는 유튜버들의 채널과 연계</li>
                            <li>아케이드(유즈맵) 공략 - 나무위키 또는 각종 유즈맵 카페들 참조</li>
                            <li>실시간 제보 기능 - SC1의 경우 게임이 출시된 지 20년이 다 되어 변화가 거의 없으나, SC2의 경우 지금도 전략, 흔히 말하는 메타가 변하고 있음.</li>
                            <li>배틀넷 API 연동 - Battle.net 어플리케이션과 연동하여 채팅 등을 할 수 있게 함.</li>
                            <li>등등...</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>개요</h3>
                        <p style={{margin: '0 25px'}}>
                            아직 구상중인 프로젝트인 관계로 어떠한 기술을 사용하여 구현할지는 고민하고 있습니다.<br/>
                            일단 안드로이드 App 형태로는 필히 개발할 생각입니다.<br/>
                            Modern Web FrameWork를 통해 제작한 웹 App과 연동하여 Hybrid 형태로 갈 지, 순수 Android 형태의 Native로 갈 지 고민중입니다.<br/>
                        </p>
                        <h3>Frontend</h3>
                        <ul>
                            <li>Android FrameWork (JAVA)</li>
                            <li>Modern Web FrameWork (미정)</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>미정</li>
                        </ul>
                        <h3>DB</h3>
                        <ul>
                            <li>MySQL</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 스크린-샷</h2>
                        <Menu pointing secondary>
                            <Menu.Item name='준비중' active onClick/>
                        </Menu>
                        <img id="img" style={{margin: '0 calc(50% - 150px)'}} height="600px" src={{}} alt="이미지 준비중"></img>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default SC2_Encyclopidia;