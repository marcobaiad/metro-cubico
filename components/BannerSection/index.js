import styles from "./BannerSection.module.css"

const BannerSection = () => {
  return (
    <section className={styles["banner-wrapper"]}>
      <h2 className={styles["banner-text"]}>
        Metro a Metro es la unidad de crowdfunding de METROCUBICO,
        <br /> <span>una empresa del grupo uniber</span>
      </h2>
    </section>
  )
}
export default BannerSection
