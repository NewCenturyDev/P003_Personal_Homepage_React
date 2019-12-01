import React, { Component } from 'react';
import { Grid, Divider, Button } from 'semantic-ui-react';

class JH_High_App extends Component {
    openGithub = () => {
        window.open("https://github.com/HyperTech99/JH-High-App/");
    }

    render() { return(
        <div>
            <div style={{width: 'calc(100%-300px)',backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Grid columns={1} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                    <br/>
                    <Grid.Column>
                        <h1 style={{textAlign: 'center'}}>JH-High-App</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/JH-High-App</Button>
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
                        본인이 과거 고등학생이었던 시절 수많은 공지사항과 공문들을 한 군데에 정리하였으면 좋지 않을까 하는 생각과 함께,
                        당시에는 모바일 지원이 되지 않았던 고등학교의 홈페이지를 보완해보면 어떨까 하여 안드로이드 어플리케이션을 제작하여
                        고등학교 시절 (고교) 교내 발표회에 제출하였던 안드로이드 어플리케이션이었습니다.<br/>
                        </p>
                        <h3>개발 컨셉</h3>
                        <ul>
                            <li>학교 홈페이지를 조작하기 편하게 만들기</li>
                            <li>일일히 들쑤시는 불편함 해소</li>
                        </ul>
                        <h3>개발 중단</h3>
                        <p style={{margin: '0 25px'}}>
                        교내 발표회에서 성공적으로 발표하긴 했지만, 학교측에서는 외부업체를 통해 모바일 홈 페이지를 만드는 방안을 선택하여
                        본 어플리케이션은 아쉽게 채택되지 않았고, 결정적으로 본인의 대학 진학과 함께 개발은 중단되게 되었습니다.<br/>
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>개요</h3>
                        <p style={{margin: '0 25px'}}>
                            기존 학교홈페이지와 연동되어 작동합니다. (다만 현재는 학교측에서 웹 사이트를 개편하여서 제대로 작동하지 않습니다.)<br/>
                            순수 Native Android App으로 개발하였습니다. (다만, 일부 화면의 일부 컨텐츠는 webView를 통해 긁어왔습니다.)
                        </p>
                        <h3>Frontend</h3>
                        <ul>
                            <li>Android FrameWork (JAVA) - 사용자 조작에 반응하고, 페이지(액티비티)간 이동과 WebView를 통해 일부 컨텐츠는 학교 홈페이지의 것을 불러와 보여주는 데 사용했습니다.</li>
                        </ul>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default JH_High_App;