import React from 'react';
import { ResetCss } from './global/resetCss'
import GithubProvider from './providers/githubProvider';
import App from './App';

const  Providers = () => {
  return (
    <main>
        <GithubProvider>
            <ResetCss/>
            <App />
        </GithubProvider>
    </main>
  );
}

export default Providers;