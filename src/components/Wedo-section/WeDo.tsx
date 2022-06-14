import styles from './wedo.module.scss';



const WeDo = () => {
  return (
    <section className={styles.weDo}>
        <div className="container">
            <div className={styles.upper}>
                <div className={styles.left}>
                    <div className={`bold-25 ${styles.subTitle}`}>What We Do</div>
                    <div className={`bold-61 ${styles.title}`}>Customer experience transformation <span>starts <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Feasier.webp?alt=media&token=cf798afa-b89c-4919-a804-5df200486f6a" alt="marker" /></span> here</div>
                </div>
                <div className={styles.right}>
                    <p className="light-16">Financial Literacy through Character Development (ABCs of Wealth) is an innovative approach that provides a framework for combining character development with financial education, in order to raise a generation that is mentored to become financially stable and independent, and to use various forms of WEALTH such as knowledge.</p>
                </div>
            </div>
            <div className={styles.cardHolder}>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2FFrame-growth.webp?alt=media&token=74dde9d7-5043-46e0-885a-fdc9ea3f3c3d" alt="photo" />
                    </div>
                    <div className="bold-61">Revenue Growth</div>
                    <p className="light-16">Growth strategies from acquisition to conversion</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2FFrame-care.webp?alt=media&token=62400ba0-a99e-4069-86e6-cf40f74f3075" alt="photo" />
                    </div>
                    <div className="bold-61">Cutomer Care</div>
                    <p className="light-16">Brand ambassadors serving customers across channels</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2FFrame-support.webp?alt=media&token=d38f1819-21e0-42fb-9c0a-10764e59b9ed" alt="photo" />
                    </div>
                    <div className="bold-61">Technical Support</div>
                    <p className="light-16">Expert tech support handle increasingly complex problems</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardPhoto}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2FFrame-retention.webp?alt=media&token=1fb9a43b-7efa-482f-9a90-e49c84e36b38" alt="photo" />
                    </div>
                    <div className="bold-61">Customer Retention</div>
                    <p className="light-16">Data-driven engagement that builds loyalty and recovers revenue</p>
                    <button className=" bold-25 btn-contained">Learn More →</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WeDo