import Image from "next/image"
import menIMG from "../../public/men-celebrating.png"
import womenIMG from "../../public/happy-women.png"
import styles from "./ProposalSection.module.css"

const ProposalSection = () => {
  return (
    <section className={styles["proposal-section"]}>
      <div className={`${styles["img-men"]} ${styles["img-wrapper"]}`}>
        <Image src={menIMG} alt="Nuestro legado" layout="fill" />
      </div>
      <div className={styles["men-text-wrapper"]}>
        <h2 className={styles["proposal-section-title"]}>
          Tus ahorros en m² se valorizan mejor
        </h2>
        <h3 className={styles["proposal-section-subtitle"]}>
          CUMPLÍ EL SUEÑO DE <br /> TU CASA PROPIA
        </h3>
        <p className={styles["proposal-section-text"]}>
          Somos un nuevo crowdfunding que te permite participar en el mercado
          inmobiliario con pequeños montos para que puedas ir metro a metro
          creciendo y proyectando el sueño de tu casa propia.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles["women-text-wrapper"]}>
          <h3 className={styles["proposal-section-subtitle"]}>
            POTENCIÁ TUS AHORROS INVIRTIENDO <br /> EN DESARROLLOS INMOBILIARIOS
          </h3>
          <p className={styles["proposal-section-text"]}>
            En Metro a Metro te invitamos a ser parte del negocio inmobiliario
            ingresando con un monto minimo que te permite comprar un metro
            cuadrado cada vez que quieras, resguardando tus ahorros en ladrillo.
          </p>
        </div>
        <div className={`${styles["img-wrapper"]} ${styles["img-women"]}`}>
          <Image src={womenIMG} alt="Nuestro legado" objectFit="contain" />
        </div>
      </div>
    </section>
  )
}
export default ProposalSection
