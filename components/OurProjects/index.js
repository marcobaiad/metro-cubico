import Image from "next/image"
import styles from "./OurProject.module.css"
import brands from "../../public/brands.png"
import together from "../../public/together.png"

const OurProjects = () => {
  return (
    <section>
      <h2 className={styles["section-title"]}>Nuestros Proyectos</h2>
      <div className={styles["brand-wrapper"]}>
        <Image src={brands} alt="Nuestros Proyectos" />
      </div>
      <div className={styles["together-wrapper"]}>
        <div className={styles["together-img-wrapper"]}>
          <Image
            src={together}
            alt="¡Metro a Metro y vos, juntos!"
            // layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["together-text-wrapper"]}>
          <h3 className={styles["together-subtitle"]}>
            te acompañamos en tiempo real y te asesoramos en tu inmersión al
            mundo inmobiliario.
          </h3>
          <p className={styles["together-text"]}>
            Con más de 7 años en el mercado inmobiliario que nos respaldan,
            Metro a Metro viene a revolucionar la forma en la que la gente de
            Tucumán pueda llegar al sueño de la casa propia.
          </p>
          <p
            className={`${styles["together-text"]} ${styles["together-text-bold"]}`}
          >
            El momento es Hoy.
          </p>
        </div>
      </div>
    </section>
  )
}
export default OurProjects
