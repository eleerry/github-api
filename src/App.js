import React from 'react';
import Layout from './Components/layout';
import Profile from './Components/Profile';
import { ResetCss } from './global/resetCss'
import Repositories from './Components/repositories';
import GithubProvider from './providers/githubProvider';

const App = () => {
  return (
  <main>
    <GithubProvider>
    <ResetCss/>
    <Layout>
      <Profile/>
      <Repositories/>
    </Layout>
    </GithubProvider>
  </main>
  )
}

export default App;
