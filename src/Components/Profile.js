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
                    <h3>웹 Frontend 분야에서는 다음과 같은 것들을 사용해 보았습니다.</h3>
                    <h5>HTML5 + CSS3</h5>
                    <p style={{margin: '0 25px'}}>
                        Modern Web FrameWork를 사용하지 않고 만든 SCP-School과 My-Journals 프로젝트의 프론트엔드 구현에 사용하였습니다.<br/>
                        HTML5와 CSS3의 각종 태그들을 사용하여 페이지를 하드코딩하고 레이아웃을 스타일시트로 작성하였습니다.
                    </p>
                    <h5>Vue.js</h5>
                    <p style={{margin: '0 25px'}}>
                        DK-Zone 프로젝트의 프론트엔드 구현에 사용하였습니다. CDN 방식이 아닌 Vue-CLI 방식으로 사용하였습니다. data()를 이용하여 페이지에서 사용자의 조작이나 DB에서 불러온 내용에 따라 내용이 변해야 하는 몇몇 내용들을 동적으로 작성하였습니다.<br/>
                        또한, Axios를 사용하여 Node.js(Express.js)로 구현한 백엔드와 GET, POST 방식으로 통신하였습니다.<br/>
                        Single Page Application이지만, 여러 화면을 표시해야 하므로, Vue-Router를 사용하여 라우팅을 구현하였습니다.<br/>
                        Create-Vue-App을 사용하여 Babel과 WebPack의 초기 설정을 간편하게 해결했습니다.<br/>
                        Vuetify 디자인 라이브러리를 사용하여 깔끔하고 세련된 디자인 레이아웃을 구현하였습니다. 또한, 적극적으로 사용한 반응형 레이아웃도 Vuetify의 flex 레이아웃을 활용하여 구현하였습니다.<br/>
                    </p>
                    <h5>React.js</h5>
                    <p style={{margin: '0 25px'}}>
                        본 웹 페이지, 즉, HyperTech99's Page 프로젝트의 프론트엔드 구현에 사용하였습니다.<br/>
                        state를 이용하여 페이지에서 사용자의 조작에 따라 내용이 변해야 하는 부분을 동적으로 작성하였습니다.<br/>
                        Single Page Application이지만 여러 화면을 표시해야 하므로, React-Router를 사용하여 라우팅을 구현하였습니다.<br/>
                        Create-React-App을 사용하여 Babel과 WebPack의 초기 설정을 간편하게 해결했습니다.<br/>
                        (다만 WebPack의 경우 배포될 웹 서버 사정상 최상위 디렉터리가 아닌, 하위 디렉터리에 배포하여야 해서, config 변경이 필요하여 일부 수정을 가했습니다. (%PUBLIC_URL% 관련 수정))<br/>
                        Sememtic UI React 디자인 라이브러리를 사용하여 깔끔하고 세련된 디자인 레이아웃을 구현하였습니다. UI를 구성하다 보니 모바일 지원은 추후 별도의 모바일 페이지를 만드는 것이 낫다고 판단되어 반응형은 지원하지 않았습니다.<br/>
                    </p>
                    <h5>JQuery</h5>
                    <p style={{margin: '0 25px'}}>
                        Modern Web FrameWork를 사용하지 않고 만든 SCP-School과 My-Journals 프로젝트의 프론트엔드 구현에 사용하였습니다.<br/>
                        동적으로 내용이나 모양, 색상이 바뀌어야 하는 태그에 대해서 DOM을 조작하여 내용이나 style을 동적으로 변경하는 데 사용하였습니다.<br/>
                    </p>
                    <h3>웹 Backend 분야에서는 다음과 같은 것들을 사용해 보았습니다.</h3>
                    <h5>Node.js</h5>
                    <p style={{margin: '0 25px'}}>
                        Node.js 기반의 웹 백엔드 프레임워크인 Express.js를 백엔드까지 구현하여 완전한 웹 서비스의 기능을 할 수 있는 완성도까지 구현한 My-Journals와 DK-Zone 프로젝트의 프론트엔드 구현에 사용하였습니다.<br/>
                        My-Journals의 경우 프론트엔드 HTML 파일을 EJS 파일로 변환하고, JavaScript와 CSS, 그리고 각종 이미지 파일을 public 폴더에 넣어 Asset으로 사용하는 방식으로 Express.js를 사용하였습니다.<br/>
                        또한, My-Journals의 경우 프론트엔드 측에서 별도의 라우터 기능을 구현하지 않았으므로, Backend의 express-router를 사용하여 페이지간 이동을 구현하였습니다.<br/>
                        DK-Zone의 경우 이미 프론트엔드에 Vue.js 프레임워크를 사용하였으므로, Vue.js의 config를 수정하여 Express.js 백엔드에 배포되도록 하는 방식으로 사용하였습니다.<br/>
                        각종 이미지 파일만 public 폴더에 들어갔으며, Vue.js 프레임워크를 사용하여 작성된 JavaScript와 HTML, CSS 태그들은 WebPack으로 패키지되어 한 개의 js, css파일로 압축되어 index.ejs 하나에 Single Page Application 형태로 띄워지는 방식으로 구현되었습니다.<br/>
                        하지만, DK-Zone 프로젝트에서도 여전히 express-router는 사용하였는데, 주로 사용자 입력 처리나 파일 업로드시에 POST 방식으로 통신하는 데 사용하였습니다.<br/>
                        express-session의 경우 로그인/로그아웃 기능을 구현하는 데 사용하였습니다.<br/>
                        Multer의 경우 사진 및 동영상 파일들을 업로드하는데 사용하였습니다.<br/>
                        fs-extra와 path의 경우 사용자 회원가입,탈퇴시에 해당 조작에 연동해서 사용자 데이터가 저장된 폴더나 파일을 생성, 삭제, 이동하는 데 사용하였습니다<br/>
                        mysql 패키지의 경우 Express.js 웹 백엔드 서버와 mysql DB 서버를 연동하는 데 사용하였습니다.<br/>
                        그 외에도 여러 Node.js 패키지를 사용했습니다.<br/>
                    </p>
                    <h5>MySQL</h5>
                    <p style={{margin: '0 25px'}}>
                        My-Journals와 DK-Zone 프로젝트에서 회원 정보, 컨텐츠 정보, 회원간 쪽지 정보, 회원 구독 정보, 회원 친구 정보 등의 각종 정보들을 저장하고 웹 Backend 서버 (Node.js)와 연동하여 사용자 조작에 따라 데이터를 읽고 쓰고 삭제하고 변경하고 동기화하는 데(CRUD / Create, Read, Update, Delete) 사용했습니다.<br/>
                        자세한 내용은 해당 프로젝트의 GitHub Wiki의 DB 정보 부분에 사용된 SQL 쿼리문과 함께 설명되어 있습니다.<br/>
                        테이블의 컬럼명은 Express.js의 백엔드 구현시 작성한 변수명, 또는 Frontend 구현시의 태그 id명과 최대한 유사하게 작성하도록 노력하였으며, 테이블을 만들기 전에 Microsoft Office Excel을 이용하여 DB테이블 설계를 하며 어떤 필드가 필요할 지 검토했습니다.<br/>
                    </p>
                    <h3>안드로이드 앱 분야</h3>
                    <p>
                        안드로이드 앱 분야에 대해서는 제가 상대적으로 아직 미숙하여 많이 배워야 할 것 같습니다.. 열심히 독학중입니다!
                    </p>
                    <h3>그 외에도 다른 여러 운영체제, 서비스나 툴 등을 사용해 보았습니다.</h3>
                    <ul>
                        <li>Debian, Ubuntu Linux (CLI환경) - 개인 개발서버는 Debian Linux 운영체제를 사용하고 있으며, 프로젝트 시연용으로 사용하는 Amazone EC2 Free Tier의 경우 Ubuntu Linux 운영체제를 사용하고 있습니다.</li>
                        <li>Amazone Web Service (EC2 Free Tier) - My Journals와 DK-Zone의 백엔드 서버(+Mysql)를 구축해두었으며, 프로젝트 시연용으로 사용하고 있습니다. 또한, Docker 사용 연습 역시 이 서버에서 연습하고 있습니다.</li>
                        <li>Visual Studio Code (Text Editer) - 웹 프로젝트를 진행하며 코딩할 때 주 에디터로 사용하고 있습니다.</li>
                        <li>Visual Studio IDE - 기타 프로젝트(C/C++)를 진행하거나 자료구조, 알고리즘 연습을 하며 C/C++ 코딩할 때 주 에디터로 사용하고 있습니다.</li>
                        <li>Android Studio IDE - 웹 프로젝트와 결합하여 작동되는 Web+Android 형태의 Hybrid 어플리케이션이나, 순수 Android Native 어플리케이션을 개발할 때 주 에디터로 사용하고 있습니다.</li>
                        <li>Eclipse IDE - JAVA 프로젝트 및 언어 문법 연습을 할 때 주 에디터로 사용하고 있습니다.</li>
                        <li>Jupiter Notebook - Python 언어 문법 연습을 할 때 간단한 코드 작성 및 테스트 용도로 사용하고 있습니다.</li>
                        <li>Git, GitHub - 협업을 진행할 때 다른 팀원들과 공동 작업을 위해서, 또는 진행중이거나 완료된 개인 프로젝트를 아카이빙 및 백업하는 데 사용하고 있습니다.</li>
                        <li>Adobe Photoshop, Adobe illustrator (야매로...) - 몇몇 아이콘이나 간단한 이미지 Asset의 편집이 필요할 때 사용하고 있습니다.</li>
                        <li>Putty - AWS 서버나 개인 개발서버에 원격 접속하여 작업할 때 SSH 터미널로 사용합니다.</li>
                        <li>그 외에도 개발에 도움을 주는 여러 툴과 유틸리티들을 사용해 보았습니다.</li>
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
                        <li>C/C++ - 자료구조, 알고리즘 연습 또는 Git 협업 연습에 사용하였습니다.</li>
                        <li>Java(지금 막 배우고 있습니다!) - 안드로이드 어플리케이션 구현 또는 JAVA 문법 연습에 사용하였습니다.</li>
                        <li>JavaScript - 웹 Frontend 및 Backend 구현에 사용하고 있습니다.</li>
                        <li>Python(아직 미숙합니다.) - 아직 어떠한 프로젝트를 진행하는 데 사용해보지는 않았지만, Python 언어 및 Pandas, Numpy, Matplotlib 등의 라이브러리 사용을 연습하는 데 사용해 보았습니다.</li>
                        <li>SQL - 웹 Backend와 연동되는 MySQL 서버의 DB Table을 조작하는 데 사용하였습니다.</li>
                        <li>Arduino - 가끔씩 취미삼아 집에 남아있는 Arduino 보드에 연결하여 LED를 제어하거나 하는 데 사용해 보았었습니다.</li>
                    </ul>
                    <h3>앞으로 다음과 같은 프로그래밍 언어를 배워 보고 싶습니다.</h3>
                    <ul>
                        <li>Python을 좀 더 깊게 배워 보고 싶습니다. Flask나 Django같은 웹 프레임워크 위주로 배워보고 싶습니다. 나중에 장기적으로는 TenserFlow와 같은 머신러닝 계열 라이브러리도 배워보고 싶습니다.</li>
                        <li>요즘 Android 어플리케이션은 JAVA 대신 Kotlin으로 제작하는 추세라고 하는데(신규 프로젝트의 경우), Kotlin 언어를 배워보고 싶습니다.</li>
                        <li>Xamarin과 C# 언어를 배워보고 싶습니다. Xamarin으로 크로스 플랫폼 구현이 가능하다는 사실이 신기합니다.</li>
                    </ul>
                </Grid.Column>
            </Grid>
        </div>
    </div>
)

export default Profile;