import styles from './heading.module.scss';

const Heading = () => {
  return (
    <section className={styles.heading}>
        <div className={`container ${styles.Holder}`}>
            <div className={styles.frame}>
                <img src="/Frame-Heading.png" alt="heading" />
            </div>
            <div className={styles.headingTitle}>
                <div className="bold-61">Managing investment has never been <span className={styles.easier}>easier <img src="/easier.png" alt="marker" /></span></div>
                <p className='light-16'>Investment management refers to the handling of financial assets and other investments—not only buying and selling them.</p>
                <button className='bold-25 btn-contained'>Let's Get a Rich</button>
                <div className="sponsers">
                    <p className='light-16'>Registered and supervised by:</p>
                    <div className={styles.supervised}>
                        <img src="/sponser-1.png" alt="sponser" />
                        <img src="/sponser-2.png" alt="sponser" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.birdsRight}>
            <img src="/birds-right.png" alt="birds" />
        </div>
        <div className={styles.birdsLeft}>
            <img src="/birds-left.png" alt="birds" />
        </div>
        <div className={styles.paint}>
            <img src="/paint.png" alt="paint" />
        </div>
    </section>
  )
}

export default Heading