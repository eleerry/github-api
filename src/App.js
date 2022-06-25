import React from 'react';
import Layout from './Components/layout';
import Profile from './Components/Profile';
import { ResetCss } from './Components/global/resetCss'
import Repositories from './Components/repositories';

const App = () => {
  return (
  <main className="App">
    <ResetCss/>
    <Layout>
      <Profile/>
      <Repositories/>
    </Layout>
  </main>
  )
}

export default App;
