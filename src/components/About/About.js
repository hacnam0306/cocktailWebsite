import styles from './About.module.scss'
const About = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <div className={styles.about}>
               <div className={styles.about_title}>
                    <img src="https://svgsilh.com/svg/47264.svg" />
                    <h1 className='mt-3 fw-normal'>About</h1>
               </div>
               <div className={`${styles.slogan} text-center`}>
                    <h2 className='mb-3 fs-4'>We Put Our Heart in Every Mix</h2>
                    <p>Could you have imagined a better sleep buddy?

                      <br/>  Ecstasy Objectified!

                      <br/>Beyond all material pleasures 

                      <br/>Taste of Heaven and a little bit of hell</p>
               </div>
               <div className="container-fluid">
                   <div className="row">
                        <div className={`col-md-6 col-lg-6 p-0 col-sm-12 ${styles.card1} ${styles.card_bg} `}>
                            <h1 className='fs-3 fw-light mb-3'>Aperitivo Box At Your Door</h1>
                            <p>I'm a paragraph. Click here to add <br/> your own text and edit me. Let <br/> your users get to know you.</p>
                            <button className="btn btn-main">Order Online</button>
                        </div>
                        <div className="col-md-6 col-lg-6 p-0 col-sm-12">
                            <img className="w-100" src="https://static.wixstatic.com/media/0b340f_50dd73c95ccb4f03a291213fb64cf169~mv2.jpg/v1/fill/w_926,h_866,al_c,q_85,usm_0.66_1.00_0.01/0b340f_50dd73c95ccb4f03a291213fb64cf169~mv2.webp"/>
                        </div>
                               </div>
               </div>
               <div className="container-fluid">
                        <div className="row">
                        <div className={`col-md-6 col-lg-6 p-0 col-sm-12  ${styles.card1} ${styles.card_bg}`}>
                            <h1 className='fs-3 fw-light mb-3'>Custom Services</h1>
                            <p>I'm a paragraph. Click here to add <br/> your own text and edit me. Let <br/> your users get to know you.</p>
                        </div>
                        <div className={`col-md-6 col-lg-6 p-0 col-sm-12 text-center ${styles.card_bg} ${styles.card_main}`}>
                            <form className="mt-10" onSubmit={handleSubmit}>
                            <h1 className='fs-3 fw-light mb-5'>Contact Us for Tailored Experience</h1>
                                <div className="row d-flex justify-content-around "> 
                                <div className="col-lg-6 w-25 col-md-6" > 
                                    <label for="f_name " className="text-muted fw-light">First Name</label>
                                    <input required type='text' id='f_name'  />
                                </div>
                                <div className="col-lg-6 w-25 col-md-6" >
                                    <label className="text-muted fw-light" for="l_name">Last Name</label>
                                     <input required type='text' id='l_name'  />  
                                </div>
                         
                                </div>
                                <div className="row d-flex justify-content-around mt-3 "> 
                                <div className="col-lg-6 w-25 col-md-6" > 
                                    <label for="email " className="text-muted fw-light">Email</label>
                                    <input required type='text' id='email'  />
                                </div>
                                <div className="col-lg-6 w-25 col-md-6" >
                                    <label className="text-muted fw-light" for="subject">Subject</label>
                                     <input required type='text' id='subject'  />  
                                </div>
                                <div className="row  mt-3 "> 
                                    <div className="col-lg-12 d-flex flex-column align-items-center  col-md-12" > 
                                        <label for="message " className="text-muted fw-light">Message</label>
                                        <textarea required rows="2" cols="50" id='messenger'  />
                                    </div>
                                </div>
                                </div>
                                <button className="btn btn-main w-75 mt-10">Submit</button>
                            </form>
                        </div>
                               </div>
                  
               </div>
            </div>
        </div>
    )
}

export default About
