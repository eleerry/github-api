import React from "react";
import Header from  "../header/index"
import * as s from './styled'

const Layout = ({children}) => {
    return(
        <s.WrapperLayout>
            <Header />
            {children}
        </s.WrapperLayout>
    )
}

export default Layout