import styles from './heading.module.scss';

const Heading = () => {
  return (
    <section className={styles.heading}>
        <div className={`container ${styles.Holder}`}>
            <div className={styles.frame}>
                <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2FFrame-Heading.webp?alt=media&token=030464a7-1007-47da-8e05-b8a0190a3880" alt="heading" width="400" height="400" />
            </div>
            <div className={styles.headingTitle}>
                <div className="bold-61">Managing investment has never been <span className={styles.easier}>easier <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Feasier.webp?alt=media&token=cf798afa-b89c-4919-a804-5df200486f6a" alt="marker" /></span></div>
                <p className='light-16'>Investment management refers to the handling of financial assets and other investments—not only buying and selling them.</p>
                <button className='bold-25 btn-contained'>Let's Get a Rich</button>
                <div className="sponsers">
                    <p className='light-16'>Registered and supervised by:</p>
                    <div className={styles.supervised}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fsponser-1.webp?alt=media&token=dfb2e2f3-84d7-4a9d-9ce4-e7806d141209" alt="sponser" width="100" height="100" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fsponser-2.webp?alt=media&token=a543a127-1aa8-4e91-a7a6-056088b40729" alt="sponser" width="100" height="100" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.birdsRight}>
            <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fbirds-right.webp?alt=media&token=8d217f9e-7586-4d7c-98f1-be75476aaeb3" alt="birds" width="50" height="50" />
        </div>
        <div className={styles.birdsLeft}>
            <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fbirds-left.webp?alt=media&token=e86cd579-20f7-4d37-bc72-d030c104a778" alt="birds" width="50" height="50" />
        </div>
        <div className={styles.paint}>
            <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fpaint.webp?alt=media&token=24239118-f08c-4edd-8030-a12c11a8fd6e" alt="paint" width="120" height="120" />
        </div>
    </section>
  )
}

export default Heading