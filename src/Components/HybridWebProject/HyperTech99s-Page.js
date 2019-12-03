import React, { Component } from 'react';
import { Grid, Divider, Button } from 'semantic-ui-react';

class HyperTech99s_Page extends Component {
    openGithub = () => {
        window.open("https://github.com/HyperTech99/HT99s-Personal-Web-Page/");
    }

    render() { return(
        <div>
            <div style={{width: 'calc(100%-300px)',backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Grid columns={1} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                    <br/>
                    <Grid.Column>
                        <h1 style={{textAlign: 'center'}}>HyperTech99's-Page</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/HT99s-Personal-Web-Page</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <h3>기술 스택 개요</h3>
                        <ul>
                            <li>React.js를 사용하여 Single Page Application 형태로 개발하였습니다.</li>
                            <li>미려하고 세련된 디자인을 적용할 수 있도록 디자인 라이브러리(Sementic UI React)를 사용하였습니다.</li>
                        </ul>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React.js (Modern Web Library/FrameWork) - 레이아웃 및 사용자의 조작에 따른 화면 전환 기능을 구현하는 데 사용했습니다.</li>
                            <li>Semantic UI React (Design Library) - UI 레이아웃을 구현하는 데 사용했습니다.</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>아직은 백엔드가 필요없는 수준이지만, 추후에 어떤 백엔드 프레임워크를 사용할지 고민하는 중입니다.</li>
                            <li>파이썬의 웹 백엔드 프레임워크 중 하나를 이용해 보거나,</li>
                            <li>익숙한 Node.js의 Express.js를 채택하게 될 것 같습니다.</li>
                        </ul>
                        <h3>DB</h3>
                        <ul>
                            <li>MySQL(예정)</li>
                        </ul>
                        <Button disabled onClick={this.openGithub2}>DB 셋팅 정보</Button>
                        <Button disabled onClick={this.openGithub3}>프로젝트 개발 환경 설정 방법</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 구현</h2>
                        <Divider></Divider>
                        <h3>구현 내용 개요</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>개인 프로젝트를 소개하는 기술 블로그 형태의 포트폴리오</b>
                        </p>
                        <h3>구현 완료 기능</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>다음과 같은 기능들은 현재 개발이 완료되었습니다.</b>
                        </p>
                        <ul>
                            <li>좌측 사이드바를 이용한 페이지 전환 기능</li>
                            <li>각 페이지에서 프로젝트 정보, 개인 프로필 내용 등을 보여주는 기능</li>
                            <li>GitHub에서 해당하는 페이지로 이동할 수 있는 기능</li>
                            <li>FTP 서버로 이동할 수 있는 기능</li>
                        </ul>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                        <b>다음과 같은 기능, 구현들을 향후 추가할 계획입니다.</b>
                        </p>
                        <ul>
                            <li>VS Code 에디터를 통해 하드코딩을 하지 않고서도 페이지를 추가로 작성할 수 있는 기능</li>
                            <li>모바일 지원</li>
                            <li>백엔드 구축</li>
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
                            <li>심플 - 지나치지 않고 무난하면서 깔끔한 디자인</li>
                            <li>아카이브 - 지금까지 해 왔던 프로젝트를 깔끔하고 명쾌하게 소개하고 정리할 수 있도록</li>
                            <li>아이디어뱅크 - 앞으로 진행할 개인/팀 프로젝트의 기획 또는 컨셉을 떠오를때마다 정리할 수 있도록</li>
                        </ul>
                        <h3>개발 배경</h3>
                        <p style={{margin: '0 25px'}}>
                        지금까지 개인적으로, 또는 소속된 동아리에서 팀으로 개발했던 프로젝트들이 어느정도 쌓여감에 따라,
                        지금까지 내가 개발했었던, 그리고 개발하거나 개발팀에 참여할 프로젝트들에 대해 요약 정리할 필요성을 느꼈습니다.<br/>
                        또한, Modern Web FrameWork를 사용하지 않거나, 2019년 국내 기준으로 점유율이 상대적으로 낮은 Vue.js만 사용해 보았던
                        점이 아쉬워서, 요즘 핫한 트렌드인 React.js를 독학하기 시작했는데, React.js에 좀 더 친숙해지기 위해 무언가 개발해 보기로 하던 찰나에
                        정리되지 않고 디자인도 지저분하였던 채로 방치된 기존의 제 개인 홈페이지가 떠올랐습니다.<br/>
                        그래서 React.js를 사용하여 개인 홈페이지를 리뉴얼하게 되었습니다.
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 스크린-샷</h2>
                        <p>본 페이지가 바로 이 프로젝트로 만들어졌으니, 직접 둘러보시면 될 것 같습니다.</p>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default HyperTech99s_Page;