import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'


const Navigation = () => {
   
    return (
        <div className={`autohide navbar container-fluid sticky-top d-flex justify-content-between align-items-center bg-main ${styles.bgMain}`}>
              <Link to='/'  > <h1>Hnamitivo</h1></Link>  
            <nav className="nav">
                <Link to='/ourCocktail' className="nav-item">
                    <a className={`nav-link ${styles.textLink}`}>Our Cocktails</a>
                </Link>
                <Link to='/order' className="nav-item">
                    <a  className={`nav-link ${styles.textLink}`}>Order Online</a>
                </Link>
                <Link to="/about" className="nav-item">
                    <a  className={`nav-link ${styles.textLink}`}>About</a>
                </Link>
                <li className="nav-item">
                    <a className={`nav-link ${styles.textLink}`}>Contact</a>
                </li>
            </nav>
        </div>
    )
}

export default Navigation
