import styles from './navbar.module.scss';


const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={`container ${styles.navHolder}`}>
            <div className="slogan">
                <img src="https://firebasestorage.googleapis.com/v0/b/score-website-1391b.appspot.com/o/Logo.png?alt=media&token=3119d250-3f6e-4fdf-bc68-eaa35aa88f0a" alt="Logo" />
            </div>
            <div className={`regular-25`}>
                <ul className={styles.links}>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Industries</li>
                    <li>About</li>
                </ul>
            </div>
            <div className={styles.groupCta}>
                <button className='btn-outlined bold-16'>Sign In</button>
                <button className='btn-contained bold-16'>Sign Up</button>
            </div>
            <div className={styles.mobileNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar