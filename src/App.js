import React from 'react';
import Layout from './Components/layout';
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
      </> : <div>Nenhum usuário pesquisado</div>}
      
    </Layout>
  )
}

export default App;
