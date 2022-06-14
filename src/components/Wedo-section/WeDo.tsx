import styles from './wedo.module.scss';



const WeDo = () => {
  return (
    <section className={styles.weDo}>
        <div className="container">
            <div className={styles.upper}>
                <div className={styles.left}>
                    <div className={`bold-25 ${styles.subTitle}`}>What We Do</div>
                    <div className={`bold-61 ${styles.title}`}>Customer experience transformation <span>starts <img src="/easier.png" alt="marker" /></span> here</div>
                </div>
                <div className={styles.right}>
                    <p className="light-16">Financial Literacy through Character Development (ABCs of Wealth) is an innovative approach that provides a framework for combining character development with financial education, in order to raise a generation that is mentored to become financially stable and independent, and to use various forms of WEALTH such as knowledge.</p>
                </div>
            </div>
            <div className={styles.cardHolder}>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="/Frame-growth.png" alt="photo" />
                    </div>
                    <div className="bold-61">Revenue Growth</div>
                    <p className="light-16">Growth strategies from acquisition to conversion</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="/Frame-care.png" alt="photo" />
                    </div>
                    <div className="bold-61">Cutomer Care</div>
                    <p className="light-16">Brand ambassadors serving customers across channels</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="/Frame-support.png" alt="photo" />
                    </div>
                    <div className="bold-61">Technical Support</div>
                    <p className="light-16">Expert tech support handle increasingly complex problems</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="/Frame-retention.png" alt="photo" />
                    </div>
                    <div className="bold-61">Cutomer Retention</div>
                    <p className="light-16">Data-driven engagement that builds loyalty and recovers revenue</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WeDo