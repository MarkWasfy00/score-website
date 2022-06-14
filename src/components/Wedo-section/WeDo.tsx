import styles from './wedo.module.scss';



const WeDo = () => {
  return (
    <section className={styles.weDo}>
        <div className="container">
            <div className={styles.upper}>
                <div className={styles.left}>
                    <div className={`bold-25 ${styles.subTitle}`}>What We Do</div>
                    <div className={`bold-61 ${styles.title}`}>Customer experience transformation <span>starts <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/easier.png?alt=media&token=1a42688d-509e-444f-9b13-26c25650b4aa" alt="marker" /></span> here</div>
                </div>
                <div className={styles.right}>
                    <p className="light-16">Financial Literacy through Character Development (ABCs of Wealth) is an innovative approach that provides a framework for combining character development with financial education, in order to raise a generation that is mentored to become financially stable and independent, and to use various forms of WEALTH such as knowledge.</p>
                </div>
            </div>
            <div className={styles.cardHolder}>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Frame-growth.png?alt=media&token=e9fa4e09-9a73-4ba6-946c-63350a6b9fd7" alt="photo" />
                    </div>
                    <div className="bold-61">Revenue Growth</div>
                    <p className="light-16">Growth strategies from acquisition to conversion</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Frame-care.png?alt=media&token=810776aa-2aef-4559-a6d3-b515c003daf5" alt="photo" />
                    </div>
                    <div className="bold-61">Cutomer Care</div>
                    <p className="light-16">Brand ambassadors serving customers across channels</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Frame-support.png?alt=media&token=eb52eb22-8d79-41c0-a5f9-5cf618a2bfad" alt="photo" />
                    </div>
                    <div className="bold-61">Technical Support</div>
                    <p className="light-16">Expert tech support handle increasingly complex problems</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Frame-retention.png?alt=media&token=9ef1b320-4fc0-4e0a-a25d-5ff5a6612bb4" alt="photo" />
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