import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";

const UseGitHub = () => {
    const { githubState } = useContext(GithubContext)
    return { githubState }
}

export default UseGitHub