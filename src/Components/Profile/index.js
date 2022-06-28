import React from 'react';
import UseGithub from '../../hooks/githubHooks'
import * as s from './styled';

const Profile = () => {

    const { githubState } = UseGithub()

  return <s.Wrapper>
    <s.WrapperImage 
            src={githubState.user.avatar}
            alt="avatar"/>
    <s.WrapperInfoUser>
        <div>
            <h1>{githubState.user.name}</h1>
            <s.WrapperUserGeneric>
                <h3>Username:</h3>
                <a href={githubState.user.htmlUrl}
                    target='_blanck'
                    rel='noreferrer'>
                    {githubState.user.login}
                </a>
            </s.WrapperUserGeneric>
            <s.WrapperUserGeneric>
                <h3>Company:</h3>
                <span>{githubState.user.company}</span>
            </s.WrapperUserGeneric>
            <s.WrapperUserGeneric>
                <h3>Location:</h3>
                <span>{githubState.user.location}</span>
            </s.WrapperUserGeneric>
            <s.WrapperUserGeneric>
                <h3>Blog:</h3>
                <a href={githubState.user.blog}
                    target='_blanck'
                    rel='noreferrer'>
                    {githubState.user.blog}
                </a>
            </s.WrapperUserGeneric>
        </div>
        <s.WrapperStatusCount>
            <div>
                <h4>Followers</h4>
                <span>{githubState.user.followers}</span>
            </div>
            <div>
                <h4>Followings</h4>
                <span>{githubState.user.following}</span>
            </div>
            <div>
                <h4>Gists</h4>
                <span>{githubState.user.public_gists}</span>
            </div>
            <div>
                <h4>Repos</h4>
                <span>{githubState.user.public_repos}</span>
            </div>
        </s.WrapperStatusCount>
    </s.WrapperInfoUser>
  </s.Wrapper>
  

}

export default Profile;