import styles from './navbar.module.scss';


const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={`container ${styles.navHolder}`}>
            <div className="slogan">
                <img src="/Logo.png" alt="Logo" />
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