import React, { useState } from "react";
import useGithub from  '../../hooks/githubHooks'
import * as S from './styled'

const Header = () => {
    const { getUser } = useGithub()
    const [usernameForSeach, setUsernameForSeach] = useState(undefined)

    const submitGetUser = () => {
        if(!usernameForSeach) return
        return getUser(usernameForSeach)
    }


    return (
        <header>
            <S.Wrapper>
                <input type="text"
                    placeholder="Digite o username para pesquisa"
                    onChange={submitGetUser}/>
                <button type="submit">
                    <span>Search</span>
                </button>
            </S.Wrapper>
        </header>
    )
}

export default Header