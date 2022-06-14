import styles from './blogs.module.scss';


const Blogs = () => {
  return (
    <section className={styles.blogs}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.upper}>
                <div className={`bold-25 ${styles.subTitle}`}>Blogs</div>
                <div className={`bold-61 ${styles.title}`}>Important Concepts and Topics on <span>Finance <img src="/finance.png" alt="finance" /></span> and Financial Analysis.</div>
            </div>
            <div className={styles.cardHolder}>
                <div className={styles.bigCard}>
                    <div className={styles.bigCardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>INVESTMENT</div>
                        <div className="bold-39">Financial Industry Regulatory Authority (FINRA)</div>
                        <p className="light-16">The Financial Industry Regulatory Authority (or FINRA) is a non-governmental organization that...</p>
                        <button className="btn-contained semi-bold-16">Read More →</button>
                    </div>
                    <div className={styles.bigCardPhoto}>
                        <img src="/big-card.png" alt="investment" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Best Practices</div>
                        <div className="bold-39">Dividend vs Share Buyback/Repurchase</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="/card-best-practice.png" alt="blog" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Capital market</div>
                        <div className="bold-39">Markets in Financial Instruments Directive (MiFID)</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="/card-capital-market.png" alt="blog" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Analysis</div>
                        <div className="bold-39">Infinite Banking – Becoming Your Own Banker</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="/card-analysis.png" alt="blog" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs