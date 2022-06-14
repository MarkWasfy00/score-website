import styles from './blogs.module.scss';


const Blogs = () => {
  return (
    <section className={styles.blogs}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.upper}>
                <div className={`bold-25 ${styles.subTitle}`}>Blogs</div>
                <div className={`bold-61 ${styles.title}`}>Important Concepts and Topics on <span>Finance <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Ffinance.webp?alt=media&token=ec90df43-f12f-4d16-abe8-06202928ee0a" alt="finance" width="60" height="60" /></span> and Financial Analysis.</div>
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fbig-card.webp?alt=media&token=cc849787-f5f7-407f-9b51-cd6646c4036e" alt="investment" width="500" height="500" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Best Practices</div>
                        <div className="bold-39">Dividend vs Share Buyback/Repurchase</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fcard-best-practice.webp?alt=media&token=f667d2e0-bbbe-4950-ac78-e904621943f7" alt="blog" width="500" height="500" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Capital market</div>
                        <div className="bold-39">Markets in Financial Instruments Directive (MiFID)</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fcard-capital-market.webp?alt=media&token=24254c97-7215-42ee-80a4-3e82003f67d3" alt="blog" width="500" height="500" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInfo}>
                        <div className={`bold-16 ${styles.cardSubTitle}`}>Analysis</div>
                        <div className="bold-39">Infinite Banking – Becoming Your Own Banker</div>
                    </div>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fcard-analysis.webp?alt=media&token=d3a94c65-66d7-4b17-b77a-7dc13f65cccb" alt="blog" width="500" height="500" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs