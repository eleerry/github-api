import React from 'react';
import Layout from './Components/layout';
import Profile from './Components/Profile';

const App = () => {
  return <main className="App">
    <Layout>
      <Profile/>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
  </main>
}

export default App;
