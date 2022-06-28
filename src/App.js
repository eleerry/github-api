import React from 'react';
import Layout from './Components/layout';
import NoSearch from './Components/noSearch';
import Profile from './Components/Profile';
import Repositories from './Components/repositories';
import useGithub from "./hooks/githubHooks";

const App = () => {

  const { githubState } = useGithub()

  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading ? (
          <p>loading</p>
         ):(<>
          <Profile/>
          <Repositories/>
        </>)}
      </> : <NoSearch/>}
      
    </Layout>
  )
}

export default App;
