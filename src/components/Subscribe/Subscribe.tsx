import styles from './subscribe.module.scss';



const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.head}>
                <div className={`bold-25 ${styles.subTitle}`}>Subscribe</div>
                <div className={`bold-61 ${styles.title}`}>Stay informed never missed an <span>update! <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/easier.png?alt=media&token=1a42688d-509e-444f-9b13-26c25650b4aa" alt="marker" /></span></div>
            </div>
            <div className={styles.send}>
                <p className="light-16">Once each month we'll send you recent episodes of our Financial information covering the optimization of digital technology and irresistible people delivering a great customer experience that impacts the bottom line.</p>
                <div className={styles.input}>
                    <input className="regular-25" autoComplete='off' placeholder="Email Address" type="email" name="email" />
                    <button className="btn-contained bold-25">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe