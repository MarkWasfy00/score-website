import styles from './statistics.module.scss';



const Statistics = () => {
  return (
    <section className={styles.statistics}>
        <div className="container">
            <div className={styles.upper}>
                <div className={`bold-25 ${styles.subTitle}`}>We’re Global</div>
                <div className={`bold-61 ${styles.title}`}>Scale and adapt at the <span>speed <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/speed.png?alt=media&token=514caf52-286f-4322-9ce4-f23ed76b1666" alt="highlight" /></span> of your bussines</div>
                <p className="light-16">Financial Illiteracy reasons damaged homes, college dropouts, dependency on predatory lending (payday loans) and authorities benefits, fitness issues (stress, depression, anxiety), bankruptcies, foreclosures, divorces, homelessness.</p>
            </div>
            <div className={styles.lower}>
                <div className={styles.photo}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Frame-statistics.png?alt=media&token=54273418-ad63-44dc-a3e6-e38d978e6c5c" alt="statistics-photo" />
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