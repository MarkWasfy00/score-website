import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`container ${styles.holder}`}>
            <div className={styles.upper}>
                <div className="info">
                    <div className="logo">
                        <img src="/Logo-white.png" alt="logo" />
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
                        <img src="/sponser-2-white.png" alt="sponser" />
                    </div>
                    <div className="sponser">
                        <img src="/sponser-1-white.png" alt="sponser" />
                    </div>
                </div>
            </div>
        </div>
        <div className={`bold-13 ${styles.cpy}`}>Copyright @Fineace 2022. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer