import Link from "next/link"
import styles from "./FirstSection.module.css"

const FirstSection = () => {
  return (
    <div className={styles.FirstSectionContainer}>
      <div className={styles.textSection}>
        <p className={styles.title}>MUY PRONTO VAS A VIVIR UNA</p>
        <p className={`${styles.title} ${styles.title2}`}>
          REVOLUCIÓN INMOBILIARIA <br /> EN TUCUMÁN
        </p>
        <p
          className={styles.title}
          style={{
            marginBottom: "13px",
          }}
        >
          ¿Estás preparado?
        </p>
      </div>
      <Link href="#">
        <a className={styles.btnCtaOrange}>¡SI, QUIERO RECIBIR INFORMACIÓN!</a>
      </Link>
    </div>
  )
}
export default FirstSection
