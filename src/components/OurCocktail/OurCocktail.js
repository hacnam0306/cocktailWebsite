import styles from './OurCocktail.module.scss'
import {useContext} from 'react'
import { StoreContext } from '../../store'
// 
const Recipe = ({title,item1={},item2={},item3={},item4={}}) =>{
 
    return (
        <div className='container'>
            <h1 className="text-center mt-10 text-danger fw-light underline ">{title}</h1>
            <div className='mt-5 text-center'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-xs-1 '>
                        <h2>{item1.name}</h2>
                        <p className='text mt-5'>{item1.description}</p>
                        <h3 className="text-danger mb-5 fw-light mt-5">{item1.price}</h3>
                    </div>
                    <div className='col-lg-6 col-md-6 col-xs-1 '>
                    <h2>{item2.name}</h2>
                        <p className='text mt-5'>{item2.description}</p>
                        <h3 className="text-danger mb-5 fw-light mt-5">{item2.price}</h3>
                    </div>  
                </div>
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-xs-1'>
                        <h2>{item3.name}</h2>
                        <p className='text mt-5'>{item3.description}</p>
                        <h3 className="text-danger mb-5 fw-light mt-5">{item3.price}</h3>
                 </div>
                 <div className='col-lg-6 col-md-6 col-xs-1'>
                        <h2>{item4.name}</h2>
                        <p className='text mt-5'>{item4.description}</p>
                        <h3 className="text-danger mb-5 fw-light mt-5">{item4.price}</h3>
                </div>
                </div>
            </div>
        </div>
    )
}

const OurCocktail = () => {
    const [state,dispatch]= useContext(StoreContext)
   
    return (
        <div className={`${styles.ourCocktail} container-fluid`}>
            <img className={styles.cocktail} src="https://svgsilh.com/svg/303520.svg" />
            <h1 className='mt-3 fw-normal'>Our Cocktails</h1>
            <Recipe title='Oldies Remix' item1={state.OldiesRemix.item1} item2={state.OldiesRemix.item2} item3={state.OldiesRemix.item3} item4={state.OldiesRemix.item4}/>
            <Recipe title='Bitter Galore' item1={state.BitterGalore.item1} item2={state.BitterGalore.item2} item3={state.BitterGalore.item3} item4={state.BitterGalore.item4}  />
            <Recipe  title='Floral Fusion' item1={state.FloralFusion.item1} item2={state.FloralFusion.item2} item3={state.FloralFusion.item3} item4={state.FloralFusion.item4}  />
            <Recipe title='Hnamtivo Box' item1={state.HnamtivoBox.item1} item2={state.HnamtivoBox.item2} item3={state.HnamtivoBox.item3} item4={state.HnamtivoBox.item4}  />

        </div>
    )
}

export default OurCocktail
