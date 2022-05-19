import Image from "next/image"
import styles from "./FormSection.module.css"
import formWomen from "../../public/form-women.png"

const FormSection = () => {
  return (
    <section className={styles["form-section-wrapper"]}>
      <div>
        <p className={styles["form-text"]}>
          Si queres conocer más sobre esta propuesta
        </p>
        <h4 className={styles["form-title"]}>
          dejanos tus comentarios en el <br /> siguiente formulario.
        </h4>
        <form>
          <input className={styles["form-input-text"]} type="text" />
          <input className={styles["form-input-text"]} type="text" />
          <input className={styles["form-input-text"]} type="text" />
          <textarea rows="13"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className={styles["form-img-wrapper"]}>
        <Image src={formWomen} alt="Contactanos" layout="fill" />
      </div>
    </section>
  )
}
export default FormSection
