import styles from './statistics.module.scss';



const Statistics = () => {
  return (
    <section className={styles.statistics}>
        <div className="container">
            <div className={styles.upper}>
                <div className={`bold-25 ${styles.subTitle}`}>We’re Global</div>
                <div className={`bold-61 ${styles.title}`}>Scale and adapt at the <span>speed <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fspeed.webp?alt=media&token=6e504508-3eab-4d1c-bd2a-a3421d675585" alt="highlight" width="100" height="100" /></span> of your bussines</div>
                <p className="light-16">Financial Illiteracy reasons damaged homes, college dropouts, dependency on predatory lending (payday loans) and authorities benefits, fitness issues (stress, depression, anxiety), bankruptcies, foreclosures, divorces, homelessness.</p>
            </div>
            <div className={styles.lower}>
                <div className={styles.photo}>
                    <img loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2FFrame-statistics.webp?alt=media&token=5e0db670-909e-43e5-ba37-3cf80c79e449" alt="statistics-photo" width="500" height="500" />
                </div>
                <div className={styles.info}>
                    <div className={styles.block}>
                        <div className="bold-61">70,000+</div>
                        <div className={`regular-25 ${styles.marker}`}>Employees</div>
                    </div>
                    <div className={styles.block}>
                        <div className="bold-61">30+</div>
                        <div className={`regular-25 ${styles.marker}`}>Countries</div>
                    </div>
                    <div className={styles.block}>
                        <div className="bold-61">80+</div>
                        <div className={`regular-25 ${styles.marker}`}>Contact Centers</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statistics