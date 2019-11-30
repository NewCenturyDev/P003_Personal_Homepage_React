import React from 'react';
import { Grid, Divider, Menu } from 'semantic-ui-react';
import './Profile.css'

const Profile = () => (
    <div>
        <div style={{width: 'calc(100%-300px)', height: 1000,backgroundColor: 'rgba(0,0,0,0.05)'}}>
            <Grid columns={1} style={{margin: 0, }}>
                <br/>
                <Grid.Column>
                    <h1 style={{textAlign: 'center'}}>개인 프로필</h1>
                    <Menu.Item>
                        
                    </Menu.Item>
                </Grid.Column>
                <Grid.Column className='grid_block'>
                    <h2>기본 신상정보</h2>
                    <Divider></Divider>
                    <h5 className='personal_info'>성명: 윤성민</h5>
                    <h5 className='personal_info'>나이: 21세</h5>
                    <h5 className='personal_info'>주소: 경기도 고양시 일산서구</h5>
                </Grid.Column>
                <Grid.Column className='grid_block'>
                    3단입니다. 테스트합니다.
                </Grid.Column>
            </Grid>
        </div>
    </div>
)

export default Profile;