import React from "react"
import Link from "next/link"
import styles from "@/styles/Header.module.scss"

const Header = () => {
	return (
		<div className={styles.header}>
			<Link href={"/"}>
				<img src="/yuo.png" alt="logo" className={styles.logo} />
			</Link>
			<div className={styles.title}>
				<h1 className="">южный округ</h1>
				<h2>войск национальной гвардии</h2>
			</div>
		</div>
	)
}

export default Header
