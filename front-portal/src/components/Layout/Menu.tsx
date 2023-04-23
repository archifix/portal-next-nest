import React from "react"
import Link from "next/link"

import styles from "@/styles/Menu.module.scss"
import Button from "@/ui/button/Button"

const Menu = () => {
	return (
		<div>
			<nav className={`container ${styles.navigation}`}>
				<ul className={styles.navigation__ul}>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>Главная</Button>
						</a>
					</li>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>Почта</Button>
						</a>
					</li>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>Тех.поддержка</Button>
						</a>
					</li>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>СЭД</Button>
						</a>
					</li>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>Справочные системы</Button>
						</a>
					</li>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>Образцы документов</Button>
						</a>
					</li>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>Центр ИТ ЮО</Button>
						</a>
					</li>
					<li className={styles.navigation__ul__item}>
						<a href={"/"}>
							<Button>Военный совет ЮО</Button>
						</a>
					</li>
				</ul>
				<div className="flex justify-end items-end pl-64">
					<li className={styles.navigation__ul__item__btn}>
						<a href={"/"}>
							<Button>Вход в личный кабинет</Button>
						</a>
					</li>
				</div>
			</nav>
			<hr className="border-1.5 border-red-900" />
		</div>
	)
}

export default Menu
