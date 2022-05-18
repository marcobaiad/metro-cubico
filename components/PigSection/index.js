import styles from "./PigSection.module.css"
import pigIMG from "../../public/pigSectionIMG.png"
import Image from "next/image"

const PigSection = () => {
  return (
    <section className={styles["pig-section"]}>
      <div className={styles["pig-img-wrapper"]}>
        <Image
          className={styles["pig-img"]}
          src={pigIMG}
          alt="invertí y llená tu chanchito"
          layout="fill"
        />
      </div>
      <div className={styles["pig-section-textwrapper"]}>
        <h1 className={styles["pig-title-section"]}>
          Invertí fácil y sin vueltas
        </h1>
        <p className={styles["pig-section-text"]}>
          En Metro a Metro queremos que seas parte de las inversiones
          inmobiliarias. Vas a poder invertir en el negocio de bienes raíces y
          ahorrar para tu casa propia de manera online y con un monto minimo.
        </p>
      </div>
    </section>
  )
}
export default PigSection
