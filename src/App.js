import React from 'react';
import Layout from './Components/layout';
import Profile from './Components/Profile';
import { ResetCss } from './Components/global/resetCss'
import Repositories from './Components/repositories';
import GithubProvider from './providers/githubProvider';

const App = () => {
  return (
  <main className="App">
    <GithubProvider />
    <ResetCss/>
    <Layout>
      <Profile/>
      <Repositories/>
    </Layout>
  </main>
  )
}

export default App;
