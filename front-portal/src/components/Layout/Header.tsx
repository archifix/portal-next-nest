import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Header.module.scss"
import Menu from "./Menu"

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={`container ${styles.header_container}`}>
				<Link href={"/"}>
					<Image
						src="/yuo.png"
						alt="Landscape picture"
						width={84}
						height={130}
					/>
				</Link>
				<div className={styles.title}>
					<h1>южный ордена жукова округ</h1>
					<h2>войск национальной гвардии</h2>
					<span>информационный портал</span>
				</div>
			</div>
			{/* <Menu /> */}
		</div>
	)
}

export default Header
