import React from 'react';
import Layout from './Components/layout';
import Profile from './Components/Profile';
import { ResetCss } from './Components/global/resetCss'

const App = () => {
  return (
  <main className="App">
    <ResetCss/>
    <Layout>
      <Profile/>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
  </main>
  )
}

export default App;
