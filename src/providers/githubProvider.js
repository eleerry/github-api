import React, { createContext, useState} from "react";

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
})

const GithubProvider = ({children}) => {

    const [ githubState, setGithubState ] = useState({
        user:{
            login: undefined,
            name: 'Luis Ricardo',
            blog: undefined,
            company: undefined,
            location: undefined,
            publicUrl: undefined,
            followers: 0,
            followings: 0,
            publicGists: 0,
            publicRepos: 0
        },
        repositories: [],
        starred: [],
    })

    const contexValue = [
        githubState
    ]
    
    return (
        <GithubContext.Provider value={contexValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider