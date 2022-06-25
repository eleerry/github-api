import React, { Children } from "react";
import * as s from './styled'

const Layout = ({children}) => {
    return(
        <s.WrapperLayout>
            <header>Header</header>
            {children}
        </s.WrapperLayout>
    )

}

export default Layout