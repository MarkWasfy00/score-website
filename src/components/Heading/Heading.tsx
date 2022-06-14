import styles from './heading.module.scss';

const Heading = () => {
  return (
    <section className={styles.heading}>
        <div className={`container ${styles.Holder}`}>
            <div className={styles.frame}>
                <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Frame-Heading.png?alt=media&token=bcdada93-9a98-4b19-9d00-389f07a1d452" alt="heading" />
            </div>
            <div className={styles.headingTitle}>
                <div className="bold-61">Managing investment has never been <span className={styles.easier}>easier <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/easier.png?alt=media&token=1a42688d-509e-444f-9b13-26c25650b4aa" alt="marker" /></span></div>
                <p className='light-16'>Investment management refers to the handling of financial assets and other investments—not only buying and selling them.</p>
                <button className='bold-25 btn-contained'>Let's Get a Rich</button>
                <div className="sponsers">
                    <p className='light-16'>Registered and supervised by:</p>
                    <div className={styles.supervised}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/sponser-1.png?alt=media&token=d54014f4-d891-41e8-9030-4b645028a8ec" alt="sponser" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/sponser-2.png?alt=media&token=392e93c5-12b0-47ee-ad42-ac55c024e616" alt="sponser" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.birdsRight}>
            <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/birds-right.png?alt=media&token=383196c9-ffcf-452f-b636-e07575b41f21" alt="birds" />
        </div>
        <div className={styles.birdsLeft}>
            <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/birds-left.png?alt=media&token=8d78122b-d1cd-407a-afc2-024b1353c45e" alt="birds" />
        </div>
        <div className={styles.paint}>
            <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/paint.png?alt=media&token=0e2f905d-560a-444a-8b45-c3b72376c1e6" alt="paint" />
        </div>
    </section>
  )
}

export default Heading