import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.upper}>
                <div className="info">
                    <div className="logo">
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Logo-white.png?alt=media&token=8753d2f3-857d-4eaf-b1bd-fbb3017807a8" alt="logo" />
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/sponser-2-white.png?alt=media&token=46c8b0bb-da42-437d-a1f4-12887c4fe2be" alt="sponser" />
                    </div>
                    <div className="sponser">
                        <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/sponser-1-white.png?alt=media&token=7c6921d2-da9e-430b-83c8-fb8ceef49459" alt="sponser" />
                    </div>
                </div>
            </div>
        </div>
        <div className={`bold-13 ${styles.cpy}`}>Copyright @Fineace 2022. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer