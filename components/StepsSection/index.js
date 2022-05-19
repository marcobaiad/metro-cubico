import Image from "next/image"
import styles from "./StepsSection.module.css"
import stepsIMG from "../../public/steps.png"

const StepsSection = () => {
  return (
    <section className={styles["steps-section-wrapper"]}>
      <h2 className={styles["steps-section-title"]}>¿Cómo funciona?</h2>
      <div className={styles["steps-container"]}>
        <div className={styles["steps-img-wrapper"]}>
          <Image src={stepsIMG} alt="pasos para ser parte de metro a metro" />
        </div>
        <div className={styles["steps-text-wrapper"]}>
          <div className={styles["first-step-text"]}>
            <h3>Registrate</h3>
            <p>
              Ingresá tus datos para conocer los proyectos que tenemos para vos.
            </p>
          </div>
          <div className={styles["second-step-text"]}>
            <h3>Elegí</h3>
            <p>
              Selecciona el proyecto que <br /> más te guste.
            </p>
          </div>
          <div className={styles["third-step-text"]}>
            <h3>Acompañá</h3>
            <p>Seguí tus metros mes a mes.</p>
          </div>
          <div className={styles["fourth-step-text"]}>
            <h3>Disfrutá</h3>
            <p>
              Cuando finaliza el proyecto el inmueble se vende y vos decidís qué
              hacer con tus metros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default StepsSection
