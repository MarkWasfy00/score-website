import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.upper}>
                <div className="info">
                    <div className={styles.logo}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2FLogo-white.webp?alt=media&token=3088346e-9d6c-4f0f-a116-d05b05d5d3b3" alt="logo" width="100" height="100" />
                    </div>
                    <p className="regular-16">Pacific Century Place 16/F SCBD Lot 10, Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190</p>
                </div>
                <div className={`regular-16 ${styles.links}`}>
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Industries</li>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>FAQ</li>
                        <li>Community</li>
                        <li>Join the team</li>
                        <li>Legal Stuff</li>
                        <li>Terms of service</li>
                    </ul>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.social}>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div className={styles.sponsers}>
                    <div className="sponser">
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fsponser-2-white.webp?alt=media&token=e3930593-7dc1-47fa-bed8-84d32df85a57" alt="sponser" width="50" height="50" />
                    </div>
                    <div className="sponser">
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/webp%2Fsponser-1-white.webp?alt=media&token=b032170c-3724-458d-a2cc-4c3ecb99877d" alt="sponser" width="50" height="50" />
                    </div>
                </div>
            </div>
        </div>
        <div className={`bold-13 ${styles.cpy}`}>Copyright @Fineace 2022. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer