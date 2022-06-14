import styles from './blogs.module.scss';


const Blogs = () => {
  return (
    <section className={styles.blogs}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.upper}>
                <div className={`bold-25 ${styles.subTitle}`}>Blogs</div>
                <div className={`bold-61 ${styles.title}`}>Important Concepts and Topics on <span>Finance <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/finance.png?alt=media&token=2162dbe7-2708-4f14-809d-2a6476349625" alt="finance" /></span> and Financial Analysis.</div>
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/big-card.png?alt=media&token=3a7f75fb-1d03-4049-a432-244a1ca31af3" alt="investment" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Best Practices</div>
                        <div className="bold-39">Dividend vs Share Buyback/Repurchase</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/card-best-practice.png?alt=media&token=1ce37eb9-0de3-4e14-b023-b0741daa2ca1" alt="blog" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Capital market</div>
                        <div className="bold-39">Markets in Financial Instruments Directive (MiFID)</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/card-capital-market.png?alt=media&token=47528677-952c-424f-9551-7cf411d8a8a5" alt="blog" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Analysis</div>
                        <div className="bold-39">Infinite Banking – Becoming Your Own Banker</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/card-analysis.png?alt=media&token=92d51511-e54d-4e31-bf25-f4598ef3771d" alt="blog" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs