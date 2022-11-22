import styles from './Order.module.scss'
import { FiShoppingBag} from "react-icons/fi";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useContext} from 'react'
import { StoreContext } from '../../store'
// 
const Order = () => {
    const [state,dispatch] = useContext(StoreContext);
    return (
        <div className={`${styles.order} container-fluid`}>
                <img src='https://svgsilh.com/svg/32051.svg' />
                <h1>Order Online</h1>
                <div className='container border border-secondary'>
                    <div className='row text-center border border-secondary'>
                        <p>Sorry,online ordering is currently unavailable closed. We're not taking orders right now.</p>
                    </div>
                    <div className="row">
                            <div className="col-lg-2 border border-secondary">
                                <div className="d-flex justify-content-between  mt-2">
                                <p >Hi Guest</p>
                                <div className={styles.avatar}>
                                <img className="rounded-circle"  src="https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png" alt="Default Avatar - Icon@seekpng.com"/>
                                     </div>
                                 </div>
                                <ul className="p-0">
                                   {Object.keys(state).map(item =>
                                       <li className="m-2  text-left">{item}</li>
                                   )}
                                </ul>
                            </div>
                            <div className="col-lg-7">
                                <h1 className="text-danger fs-3 px-5 fw-light d-inline border-bottom border-secondary">Cocktails</h1>
                                <h1 className="text-danger fs-3 px-5 mt-3 fw-light ">Oldies Remix</h1>
                                <p className="fs-6 fw-light my-3 text-muted">This is a section of your menu, customize it any way you want.</p>
                                <div>
                               <Container className="p-5">
                                   <Row lg={2} className="pb-5">
                                        <Col >
                                            <img className={styles.cocktail_item} src="https://static.wixstatic.com/media/0b340f_8b10046f79ff4026875466b3be3bbc9c~mv2.jpg/v1/fill/w_245,h_184/file.jpg"/>
                                            <div className={styles.cocktail_item_info}>
                                                <p>con chim</p>
                                            </div>  
                                        </Col>
                                        <Col>
                                             <img src="https://static.wixstatic.com/media/0b340f_8b10046f79ff4026875466b3be3bbc9c~mv2.jpg/v1/fill/w_245,h_184/file.jpg"/>
                                        </Col>
                                   </Row>
                                   <Row lg={2}>
                                        <Col>
                                            <img src="https://static.wixstatic.com/media/0b340f_8b10046f79ff4026875466b3be3bbc9c~mv2.jpg/v1/fill/w_245,h_184/file.jpg"/>
                                        </Col>
                                        <Col>
                                             <img src="https://static.wixstatic.com/media/0b340f_8b10046f79ff4026875466b3be3bbc9c~mv2.jpg/v1/fill/w_245,h_184/file.jpg"/>
                                        </Col>
                                   </Row>
                               </Container>
                            </div>
                            </div>
                            <div className="col-lg-3 border border-secondary">
                                <div className="d-flex justify-content-between  mt-2">
                                    <p>My order</p>
                                    <p>(0 items)</p>
                                </div>
                                <div className='text-center border-bottom p-5 border-secondary'>
                                    <FiShoppingBag size={80} />
                                    <p className="text-muted fw-light fs-7">Browse our menu and start adding items to your order</p>
                                </div>
                                <div className="d-flex justify-content-between  mt-2">
                                    <p>Subtotal</p>
                                    <p>$0</p>
                                </div>
                                <p className="fs-7 text-left fw-lighter border-bottom pb-2 border-secondary">+ Special Request</p>
                                <p className="text-muted">Online ordering unavailable</p>
                                <button className="btn btn-main px-5">Order Now!</button>
                            </div>
                    </div>
                </div>
        </div>
    )}
export default Order

