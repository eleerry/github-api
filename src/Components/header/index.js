import React, { useState } from "react";
import useGithub from  '../../hooks/githubHooks'
import * as S from './styled'

const Header = () => {
    const { getUser } = useGithub()
    const [userNameForSeach, setUserNameForSeach] = useState(undefined)

    const submitGetUser = () => {
        if(!userNameForSeach) return
        return getUser(userNameForSeach)
    }

    return (
        <header>
            <S.Wrapper>
                <input type="text"
                    placeholder="Digite o username para pesquisa"
                    onChange={(event) => setUserNameForSeach(event.target.value)}
                />
                <button 
                type="submit"
                onClick={submitGetUser}
                >
                    <span>Search</span>
                </button>
            </S.Wrapper>
        </header>
    )
}

export default Header