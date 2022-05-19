import Link from "next/link"
import styles from "./Menu.module.css"

const linksList = [
  {
    label: "Home",
    to: "#",
  },
  {
    label: "Productos",
    to: "#",
  },
  {
    label: "Como funciona",
    to: "#",
  },
  {
    label: "Nosotros",
    to: "#",
  },
]

const MenuComponent = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.firstContainer}>
        <span className={styles.title}>Metro a Metro</span>
        <div className={styles.linksContainer}>
          {linksList.map((link) => (
            <Link key={link.label} href={link.to}>
              <a className={styles.links}>{link.label}</a>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles["btn-cyan"]}>
        <Link href="/registro">
          <a style={{ color: "white" }}>REGISTRARME</a>
        </Link>
      </div>
    </nav>
  )
}
export default MenuComponent
