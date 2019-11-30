import React, { Component } from 'react';
import { Grid, Divider, Menu, Button } from 'semantic-ui-react';

class SCP_School extends Component {
    state = {
        imgSrc: "HybridWebProject/SCP-School/1.png",
        activeItem: 1
    }
    openGithub = () => {
        window.open("https://github.com/HyperTech99/SCP-School");
    }
    handleImg = (num) => {
        let img1 = "HybridWebProject/SCP-School/1.png";
        let img2 = "HybridWebProject/SCP-School/2.png";
        let img3 = "HybridWebProject/SCP-School/3.png";
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
            default:
        }
    }

    render() { return(
        <div>
            <div style={{width: 'calc(100%-300px)', backgroundColor: 'rgba(0,0,0,0.05)'}}>
                <Grid columns={1} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                    <br/>
                    <Grid.Column>
                        <h1 style={{textAlign: 'center'}}>SCP-School</h1>
                        <Button onClick={this.openGithub}>GitHub : HyperTech99/SCP-School</Button>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 개요</h2>
                        <Divider></Divider>
                        <h3>개발 배경</h3>
                        <p style={{margin: '0 25px'}}>
                            많은 학생들이 대학에 진학해 처음 C언어 등의 프로그래밍 언어를 접하게 되며, 
                            프로그래밍에 대한 각종 문법이나 팁, 노하우, 코딩 스킬 등의 내용을 많이 구글링하거나 질문하게 되는데,
                            진학 전까지 이러한 정보들을 자주 검색하는 경우가 많지 않았었기에, 구글링도 생각보다 수월하지 않은 경우가 많아서,
                            굳이 여러 사이트 뒤지지 않고, 어느 한 개의 사이트에서 컴퓨터공학과 1학년 교육과정에 들어있는 C언어에 관한 상당한 내용들을
                            접하고 이해할 수 있게 할 수 있었으면 좋겠다는 생각에서 이러한 웹 서비스(웹 사이트)를 기획하게 되었습니다.
                        </p>
                        <h3>개발 컨셉</h3>
                        <p style={{margin: '0 25px'}}>
                            TCP School과 비슷한 형태의 페이지 디자인을 지향했습니다.
                        </p>
                        <h3>최종 개발 목표</h3>
                        <p style={{margin: '0 25px'}}>
                            세종대학교 컴퓨터공학과 1학년 학생들에게 도움이 될 수 있는, 커리큘럼에 맞는 C 언어 등 여러 프로그래밍 언어에 관한 정보나
                            팁에 해당하는 내용들을 정리한 TCP School이나 생활코딩과 같은 형식의 교육적 페이지를 개발하는 것이 최종 목표이다
                        </p>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 기술 스택</h2>
                        <Divider></Divider>
                        <p style={{margin: '0 25px'}}>
                            2019년 초반 당시까지는 제가 웹 개발보다는 안드로이드 앱 개발에 조금 더 관심을 두었던 관계로,<br/>
                            당시에는 Modern Web Framework에 익숙하지 않아서 다음과 같은 스택으로 개발하였습니다.<br/>
                            또한 프로젝트를 진행하다 보니 다른 친구가 기획했던 본 프로젝트의 기획 자체가 적절한가에<br/>
                            대한 의문이 들어 백엔드 개발은 중단하였습니다.<br/>
                        </p>
                        <h3>Frontend</h3>
                        <ul>
                            <li>순수 HTML5 + CSS3</li>
                            <li>순수 JS + JQuery</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>프로젝트 중단으로 개발중단</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 중단</h2>
                        <Divider></Divider>
                        <p style={{margin: '0 25px'}}>
                            당시 웹 프로그래밍 수업을 듣고 나서 이 프로젝트를 조금 더 개선하는 것을 검토한 적이 있었습니다.<br/>
                            다음과 같은 개선 사항을 생각했었습니다.<br/>
                        </p>
                        <h3>검토하였던 프로젝트 개선 방안</h3>
                        <ul>
                            <li>Node.js의 express.js 웹 백엔드 프레임워크를 이용하여 백엔드 구현</li>
                            <li>Vue.js나 React.js와 같은 Modern Web Framework의 도입</li>
                        </ul>
                        <h3>다음과 같은 이유로 개선을 포기하였습니다.</h3>
                        <ul>
                            <li>프로젝트를 진행하다 보니 페이지 내용 중 상당수가 결국 TCP-School과 학교에서 1학년 전공 커리큘럼으로 사용하는 전공책과 동일하여
                                굳이 이 웹 사이트를 참조할 이유가 없음 (그냥 TCP-School에 들어가거나 전공책을 펼쳐도 충분히 얻을 수 있는 자료이므로)
                            </li>
                            <li>생활코딩이나 TCP-School, Stack Overflow같이 이미 서비스되고있는 질 좋은 코딩 정보 습득 커뮤니티 및 웹 서비스들이 매우 많음.</li>
                            <li>위에서 언급한 유사 서비스들은 각계각층의 전문가가 참여하는데 반해, 그것들과 비교해 보았을 때 일개 학부생이 컨텐츠를 수록하거나
                                복사-붙여넣기 수준인 이 프로젝트에서 더 우월한 양질의 컨텐츠를 수록할 수 있을지 의심스러움.
                            </li>
                            <li>마지막으로, 이 프로젝트의 타겟인 학과의 1학년 후배들은 본 프로젝트가 활성화, 상용화되기 보다는
                                그냥 자신들이 구글링하는 것을 더 선호하였음.
                            </li>
                            <li><del>기획이 망했어요.</del></li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column className='grid_block'>
                        <h2>프로젝트 스크린-샷</h2>
                        <Menu pointing secondary>
                            <Menu.Item name='메인 화면' active={this.state.activeItem === 1} onClick={() => this.handleImg(1)}/>
                            <Menu.Item name='서비스 소개 화면' active={this.state.activeItem === 2} onClick={() => this.handleImg(2)}/>
                            <Menu.Item name='컨텐츠 화면' active={this.state.activeItem === 3} onClick={() => this.handleImg(3)}/>
                        </Menu>
                        <img id="img" width="100%" src={this.state.imgSrc} alt="이미지 로딩 실패"></img>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )}
}

export default SCP_School;