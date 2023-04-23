import React, { FC, PropsWithChildren } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Menu from "./Menu"

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
