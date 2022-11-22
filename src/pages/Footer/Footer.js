import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={`${styles.footer} container-fluid`}>
            <div className="row text-center d-flex align-items-center justify-content-center">
                <div className="col-md-4 col-lg-4">
                        <div>
                            <h1 className="fs-3 fw-light mb-3">Contact</h1>
                            <p >hacnam0306@gmail.com</p>
                            <p className="mb-5">037-757-4895</p>
                        </div>
                        <div >
                            <p className="fs-5 fw-lighter"> 30 Hoang Ngoc Street</p>
                            <p className="fs-5 fw-lighter">Hoang Hoa, TH 030602</p>
                        </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <h1 className={styles.title}>Hnamitivo</h1>
                    <ul >
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div>
                        <p className="fs-5 fw-lighter" >Mon - Fri: 11am - 10pm​</p>
                        <p className="fs-5 fw-lighter mb-5"> Sat - Sun: 11am - 12am</p>
                    </div>
                    <div>
                        <h1 className="mb-3 fw-lighter">Services</h1>
                        <p>Same-Day delivery</p>
                        <p>All over San Francisco</p>
                    </div>
                </div>
            </div>
            <p className="fs-7 text-center mt-5 fw-lighter">©2022 by Hnamitivo. Proudly provided by Hnam</p>
        </div>
    )
}

export default Footer
