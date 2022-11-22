import styles from './Header.module.scss'
const Header = () => {
    return (
        <div className={`${styles.header}`}>
            <img className={styles.image} alt="cocktail"  src="https://static.wixstatic.com/media/84770f_10c35a69e665447d8e2988d1b9279d70~mv2.jpg/v1/crop/x_0,y_565,w_3727,h_5025/fill/w_669,h_901,al_c,q_85,usm_0.66_1.00_0.01/shutterstock_1711787257-edit%20copy.webp" />
            <div className={styles.text}>
                <h1>Hnamitivo</h1>
                <p>Finest Cocktails. Delivered</p>
                <button className={`btn btn-main btn-main-right`}>
                Order Online
                </button>
            </div>
        </div>
    )
}

export default Header
