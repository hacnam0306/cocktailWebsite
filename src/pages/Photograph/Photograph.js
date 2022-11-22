import styles from './Photograph.module.scss'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
const Photograph = () => {
    return (
        <div className={`${styles.photograph} container-fluid`}>
            <Header/>
            <div className="row">
                    <div className="col-md-12 col-lg-6 p-0 col-sm-12">
                        <img src="https://static.wixstatic.com/media/0b340f_c2ccb8cd5d0641adac34a6bb89aac3d4~mv2.jpg/v1/fill/w_923,h_913,al_c,q_85,usm_0.66_1.00_0.01/0b340f_c2ccb8cd5d0641adac34a6bb89aac3d4~mv2.webp" />
                    </div>
                    <div className="col-md-12 col-lg-6 p-0 col-sm-12">
                         {/* <img  src=" https://static.wixstatic.com/media/0b340f_df3c52491dcf4972957bae614148d2a2~mv2.jpg/v1/fill/w_923,h_913,al_t,q_85,usm_0.66_1.00_0.01/0b340f_df3c52491dcf4972957bae614148d2a2~mv2.webp"/> */}
                           <div className={`${styles.text} ${styles.card_background} `}>
                                <h2>Time for Hnamitivo</h2>
                                <h1>Expertly crafted with premium <br/> spirits and natural ingredients</h1>
                           </div>

                    </div>
            </div>
            <div className={`${styles.collections} `}>
               <div className={`${styles.text} text-black opacity-75 mt-5 mb-5 `}>
                    <h1 className='mt-5'>Cocktail Collections</h1>
                    <h2 className='mt-5 mb-5 lh-lg fs-2 fw-normal'>I'm a paragraph. Click here to add <br/>your own text and edit me.</h2>
               </div>
               <div className={`row ${styles.cocktail} `}>
                   <Link to='/ourCocktail'  className="col-md-4 col-sm-12 p-0 col-lg-4">
                       <img src="https://static.wixstatic.com/media/0b340f_512e2f0ae7944b549b65041de8149ac8~mv2.jpg/v1/fill/w_241,h_322,q_90/0b340f_512e2f0ae7944b549b65041de8149ac8~mv2.webp" />
                       <p>Oldies <br/> Remix</p>
                   </Link>
                   <Link   to='/ourCocktail' className="col-md-4 p-0 col-sm-12 col-lg-4">
                       <img src="https://static.wixstatic.com/media/0b340f_0c34e04e707e4eb4bc2bd8d72486670e~mv2.jpg/v1/fill/w_242,h_322,q_90/0b340f_0c34e04e707e4eb4bc2bd8d72486670e~mv2.webp" />
                       <p>Bitter <br/>Galore</p>
                   </Link>
                   <Link  to='/ourCocktail' className="col-md-4 p-0 col-sm-12 col-lg-4">
                       <img src="https://static.wixstatic.com/media/0b340f_347bc3ca4f444755bb295c916bf15602~mv2.jpg/v1/fill/w_241,h_322,q_90/0b340f_347bc3ca4f444755bb295c916bf15602~mv2.webp" />
                       <p>Floral<br/> Fusion</p>
                   </Link>
               </div>
                <img src="https://static.wixstatic.com/media/0b340f_3bdda046852942c3856438e9a1590c72~mv2.gif" className={`${styles.slogan}`}/>
                <div className={`${styles.text} text-black `}>
                    <h1 className="opacity-75">Apéritivo with Friends</h1>
                    <h2 className="opacity-75 lh-lg fs-4 mt-3 fw-normal">I'm a paragraph. Click here to add your own text and 
                    <br/> edit me. I’m a great place for you to tell a story and let 
                    <br/> your users know a little more about you.</h2>
                    <button className="btn btn-main ">Read More</button>
                </div>
            </div>
            <div className={`${styles.parallax} ${styles.parallax_1}`}></div>
            <div className={`${styles.collections} `}>
               <div className={`${styles.text} text-black opacity-75 mt-5 mb-5 `}>
                    <h1 className='mt-5 order_header'>It's Cocktail O'clock</h1>
                    <div className={`row ${styles.order}`}>
                   <div className="col-md-4 col-sm-12 p-0 col-lg-4">
                       <img src="https://icons.iconarchive.com/icons/graphicloads/food-drink/256/drink-2-icon.png" />
                     <h3>Choose Your Mix</h3>
                     <p>I'm a paragraph. Click <br/> here to add your own text and edit me.</p>
                   </div>
                   <div className="col-md-4 p-0 col-sm-12 col-lg-4">
                       <img src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/128/global-icon.png" />
                       <h3>Place Your Order</h3>
                         <p>I'm a paragraph. Click <br/> here to add your own text and edit me.</p>
                   </div>
                   <div className="col-md-4 p-0 col-sm-12 col-lg-4">
                       <img src="https://icons.iconarchive.com/icons/himacchi/sweetbox/128/ice-cream-icon.png" />
                       <h3>Add the Ice</h3>
                      <p>I'm a paragraph. Click <br/> here to add your own text and edit me.</p>
                   </div>
               </div>

               </div>     
            </div>
            <div className={`${styles.parallax} ${styles.parallax_2} `}></div>
        </div>
    )
}

export default Photograph
