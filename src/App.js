import React from 'react';
import Layout from './Components/layout';

function App() {
  return <main className="App">
    <Layout>
      <div>
        <img src="https://avatars.githubusercontent.com/u/47307816?v=4" alt="avatar"></img>
        <h1>Luis Ricardo</h1>
        <h3>Username:</h3>
        <span>eleerry</span>
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
      </div>
      <div>Repositories</div>
      <div>Starreds</div>
    </Layout>
  </main>
}

export default App;
