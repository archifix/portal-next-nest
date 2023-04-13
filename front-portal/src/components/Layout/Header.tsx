import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Header.module.scss"

const Header = () => {
	return (
		<>
			<div className={styles.header}>
				<Link href={"/"}>
					<Image
						src="/yuo.png"
						alt="Landscape picture"
						width={84}
						height={130}
					/>
				</Link>
				<div className={styles.title}>
					<h1>южный округ</h1>
					<h2>войск национальной гвардии</h2>
				</div>
			</div>
			<nav className={styles.navigation}>
				<ul className={styles.navigation__ul}>
					<li className={styles.navigation__ul__item}>
						<Link href={"/"}>Главная</Link>
					</li>
					<li className={styles.navigation__ul__item}>
						<Link href={"/"}>Главная</Link>
					</li>
					<li className={styles.navigation__ul__item}>
						<Link href={"/"}>Главная</Link>
					</li>
					<li className={styles.navigation__ul__item}>
						<Link href={"/"}>Главная</Link>
					</li>
					<li className={styles.navigation__ul__item}>
						<Link href={"/"}>Главная</Link>
					</li>
				</ul>
				<Link href={"/"} className="justify-end">
					Login
				</Link>
			</nav>
		</>
	)
}

export default Header
