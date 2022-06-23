import React, { Children } from "react";

const Layout = ({children}) => {
    return(
        <section>
            <header>Header</header>
            {children}
        </section>
    )

}

export default Layout