import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import './Style.css'

const Profile = () => (
    <div>
        <div style={{width: 'calc(100%-300px)', backgroundColor: 'rgba(0,0,0,0.05)'}}>
            <Grid columns={1} style={{maxWidth: 1200, margin: '0 auto', fontSize: 16, lineHeight: 1.5}}>
                <br/>
                <Grid.Column>
                    <h2 style={{textAlign: 'center'}}>개발자를 꿈꾸는 컴퓨터공학도, HyperTech99 입니다.</h2>
                </Grid.Column>
                <Grid.Column className='grid_block'>
                    <h2>기본 신상정보</h2>
                    <Divider></Divider>
                    <h5 className='personal_info'>성명: 윤성민</h5>
                    <h5 className='personal_info'>성별: 남성</h5>
                    <h5 className='personal_info'>나이: 21세</h5>
                    <h5 className='personal_info'>E-Mail: smyun99@gmail.com</h5>
                    <h5 className='personal_info'>거주지: 일산신도시</h5>
                </Grid.Column>
                <Grid.Column className='grid_block'>
                    <h2>학력 및 경력</h2>
                    <Divider></Divider>
                    <h3>학력</h3>
                    <h5 className='personal_info'>2018.02 저현자율형공립고등학교 졸업</h5>
                    <h5 className='personal_info'>2018.03~ 세종대학교 컴퓨터공학과 재학 중 (현재 2학년 2학기)</h5>
                    <h3>경력</h3>
                    <h5 className='personal_info'>파릇파릇한 신참이 되고싶은 지망생입니다~</h5>
                    <h5 className='personal_info'>IT업계와 무관한 단순 알바 경험은 생략하였습니다.</h5>
                </Grid.Column>
                <Grid.Column className='grid_block'>
                    <h2>관심분야</h2>
                    <Divider></Divider>
                    <p style={{margin: '0 25px'}}>
                        웹 프로그래밍과 안드로이드 앱 프로그래밍에 관심이 있습니다.<br/>
                        장기적으로는 인공지능(기계학습)과 가상/증강현실(VR, AR)에도 관심을 가지고 있습니다<br/>
                        웹 분야의 경우 프론트엔드와 백엔드 모두 관심이 있습니다.<br/>
                        또한, Python, JavaScript와 Kotlin 언어에 대해 관심이 있습니다.<br/>
                    </p>
                </Grid.Column>
                <Grid.Column className='grid_block'>
                    <h2>사용해본 기술들</h2>
                    <Divider></Divider>
                    <p>
                        웹 Frontend 분야에서는 다음과 같은 것들을 사용해 보았습니다.<br/>
                    </p>
                    <ul>
                        <li>HTML5 + CSS3</li>
                        <li>Vue.js</li>
                        <li>React.js</li>
                        <li>JQuery</li>
                    </ul>
                    <p>
                        웹 Backend 분야에서는 다음과 같은 것들을 사용해 보았습니다.<br/>
                    </p>
                    <ul>
                        <li>MySQL</li>
                        <li>WebPack</li>
                        <li>Express.js (Node.js)</li>
                        <li>Multer (Node.js)</li>
                        <li>fs-extra (Node.js)</li>
                        <li>path (Node.js)</li>
                        <li>기타 여러 Node.js 패키지</li>
                    </ul>
                    <p>
                        안드로이드 앱 분야는 상대적으로 아직 미숙하여 많이 배워야 할 것 같습니다.. 열심히 독학중입니다!
                        그 외에도 다른 여러 운영체제, 서비스나 툴 등을 사용해 보았습니다.
                    </p>
                    <ul>
                        <li>Debian, Ubuntu Linux (CLI환경)</li>
                        <li>Amazone Web Service (EC2 Free Tier)</li>
                        <li>Visual Studio Code (Text Editer)</li>
                        <li>Visual Studio IDE</li>
                        <li>Android Studio IDE</li>
                        <li>Eclipse IDE</li>
                        <li>Jupiter Notebook</li>
                        <li>Git, GitHub</li>
                        <li>Adobe Photoshop, Adobe illustrator (야매로...)</li>
                        <li>Putty</li>
                        <li>등등 개발에 도움을 주는 수많은 툴과 유틸리티들..</li>
                    </ul>
                </Grid.Column>
                <Grid.Column className='grid_block'>
                    <h2>문법을 아는 프로그래밍 언어들</h2>
                    <Divider></Divider>
                    <p>
                        주로 JavaScript, Java, C/C++ 언어를 사용하였습니다.<br/>
                        다음과 같은 프로그래밍 언어를 접하고 문법을 익혀 보았습니다.<br/>
                    </p>
                    <ul>
                        <li>C/C++</li>
                        <li>Java(지금 막 배우고 있습니다!)</li>
                        <li>JavaScript</li>
                        <li>Python(아직 미숙합니다.)</li>
                        <li>SQL(나무위키에 따르면 MySQL 쿼리문도 일종의 언어라 하네요...)</li>
                        <li>Arduino</li>
                    </ul>
                    <p>
                        앞으로 다음과 같은 프로그래밍 언어를 배워 보고 싶습니다.<br/>
                    </p>
                    <ul>
                        <li>Python을 좀 더 깊게 배우기</li>
                        <li>WebPack</li>
                        <li>Express.js (Node.js)</li>
                        <li>Multer (Node.js)</li>
                        <li>fs-extra (Node.js)</li>
                        <li>path (Node.js)</li>
                        <li>기타 여러 Node.js 패키지</li>
                    </ul>
                    <p>
                        안드로이드 앱 분야는 상대적으로 아직 미숙하여 많이 배워야 할 것 같습니다.. 열심히 독학중입니다!
                        그 외에도 다른 여러 운영체제, 서비스나 툴 등을 사용해 보았습니다.
                    </p>
                    <ul>
                        <li>Debian, Ubuntu Linux (CLI환경)</li>
                        <li>Amazone Web Service (EC2 Free Tier)</li>
                        <li>Git, GitHub</li>
                        <li>Arduino</li>
                    </ul>
                </Grid.Column>
            </Grid>
        </div>
    </div>
)

export default Profile;