import styles from './whyUs.module.scss';
const WhyUs = () => {
  return (
    <section className={styles.section}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.upper}>
                <div className={styles.left}>
                    <div className={`bold-25 ${styles.subTitle}`}>Why Should Us</div>
                    <div className={`bold-61 ${styles.title}`}>We are the team of enthusiasts</div>
                </div>
                <div className={styles.right}>
                    <p className='light-16'>Our technology suite is engineered to support diverse business needs on-demand. Our communal culture , performance excellence and private cloud technology paves the way for unprecedented customer support.</p>
                    <button className='bold-25 btn-contained'>Explore →</button>
                </div>
            </div>
            <div className={styles.cardsHolder}>
                <div className={styles.card}>
                    <img src="/card-1.png" alt="card" />
                    <div className="semi-bold-31">Saving more money easily</div>
                    <p className='light-16'>we can help you save more money and keep you on your toes. by investing your funds, the money you have today can be more useful.</p>
                </div>
                <div className={styles.card}>
                    <img src="/card-2.png" alt="card" />
                    <div className="semi-bold-31">Get your dream target</div>
                    <p className='light-16'>we can help you save more money and keep you on your toes. by investing your funds, the money you have today can be more useful.</p>
                </div>
                <div className={styles.card}>
                    <img src="/card-3.png" alt="card" />
                    <div className="semi-bold-31">Effective and efficient</div>
                    <p className='light-16'>we can help you save more money and keep you on your toes. by investing your funds, the money you have today can be more useful.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs