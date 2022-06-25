import React from 'react';
import UseGithub from '../../hooks/githubHooks'
import * as s from './styled';

const Profile = () => {

    const { githubState } = UseGithub()

  return <s.Wrapper>
        <s.WrapperImage 
            src="https://avatars.githubusercontent.com/u/47307816?v=4"
            alt="avatar"/>
        <s.WrapperInfoUser>
        <div>
            <h1>{githubState.user.name}</h1>
            <s.WrapperUsername>
                <h3>Username:</h3>
                <a href='https://github.com/eleerry' target='_blanck' rel='noreferrer'>eleerry</a>
            </s.WrapperUsername>
        </div>
        <s.WrapperStatusCount>
            <div>
                <h4>Followers</h4>
                <span>5</span>
            </div>
            <div>
                <h4>Starreds</h4>
                <span>5</span>
            </div>
            <div>
                <h4>Followings</h4>
                <span>5</span>
            </div>
        </s.WrapperStatusCount>
        </s.WrapperInfoUser>
  </s.Wrapper>
  

}

export default Profile;