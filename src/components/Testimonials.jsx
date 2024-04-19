import React from 'react'
import { Link } from 'react-router-dom'
import './css/Testimonials.css';
import Lokanath from './Image/Lokanath.JPG';
import Lalit from './Image/Lalit.jpg';
import Swadhin from './Image/Swadhin.jpg';
import Jivan from './Image/Jiban.jpg';
import Soumya from './Image/Soumya.jpg';
const Testimonials = () => {
  return (
   <>
    <div className="container">
        <div className="row">

            <div className="first-row">
            <div className="col-lg-4">
                <div className="testm-card">
                    <div className="face front-face">
                        <img src= {Lokanath}
                            alt="Robert Garrison" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                           Lokanath Panda
                        </div>
                        <div className="designation">3rd Year, CSE</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                            pleasant.
                            The service was execellent. I will refer everyone I know.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testm-card">
                    <div className="face front-face">
                        <img src={Lalit}
                            alt="Jeffery Kennan" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Lalit Kumar Sethi
                        </div>
                        <div className="designation">3rd Year, CSE</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                        As you embark on this new chapter of your life, we want to express our heartfelt gratitude for all that you have done. Your dedication, hard work, and positive attitude have made a lasting impact on all of us. While we will miss your presence and your contributions.Farewell, and best wishes for a bright and prosperous future.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testm-card">
                    <div className="face front-face">
                        <img src={Swadhin}
                            alt=" Mr Lorem" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Swadhin R Patra
                        </div>
                        <div className="designation">3rd Year, CSE</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                                ଧନ୍ୟବାଦ
                                ଆଜି
                                ନଇଁ ଗଲା ମୋର କଲମ |
                                କଣ
                                ଅତୀତ ପ୍ରେମରେ
                                ନା ସମୟ ଡର ରେ
                                ଅଧା ନିଦ
                                କି ମିଛ ଅଳସ ରେ ।
                                ନଇଁ ଗଲା ବୋଧେ,
                                ତାଙ୍କ ଅନୁଗ୍ରହ ତଳେ।
                                ତାଙ୍କ ସମ୍ମାନ ରେ ମୁଣ୍ଡ ଟେକିଥିଲା,
                                ସାଥେ ଲେଖିବାକୁ ହାତ ବଢେଇଲା,
                                କିନ୍ତୁ,
                                ଉତ୍ତର ମିଳିଲା ହାତ ଠାର ରେ।
                                ପ୍ରତିଉତ୍ତରେ ଥିଲା  ଧନ୍ୟବାଦ।
                                ଧନ୍ୟବାଦ,
                                ସ୍ମୃତି, ଶକ୍ତି, ଆଉ ଶାନ୍ତି ପାଇଁ
                                ଲେଖି ଯାଇ ଥିଲା 
                                ଗୋଟେ ଭିଜା କାଗଜ ରେ।

                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>




        <div className="first-row">
            <div className="col-lg-4">
                <div className="testm-card">
                    <div className="face front-face">
                        <img src={Jivan}
                            alt="Mr Lorem" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Jivan Jyoti Satpathy
                        </div>
                        <div className="designation">3rd Year, CSE</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                        Dear seniors, we will miss you all very much. You have been an inspiration to us, and we wish you all the best in your future endeavors. Thank you for every support!
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testm-card">
                    <div className="face front-face">
                        <img src={Soumya}
                            alt="Jeffery Kennan" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Soumya R Sahoo
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                        The most beautiful and gorgeous part of life is the college life and we are happy to have you with us always, on this beautiful journey of our college life.... 
                        Thank you seniors for your affection and admiration......
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testm-card">
                    <div className="face front-face">
                        <img src={"https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                            alt="Issac Maxwell" className="profile"/>
                        <div className="pt-3 text-uppercase name">
                            Issac Maxwell
                        </div>
                        <div className="designation">Finance Director</div>
                    </div>
                    <div className="face back-face">
                        <span className="fas fa-quote-left"></span>
                        <div className="testimonial">
                            Account keeper is the most valuable business research we have EVER purchased. Without
                            electrician, we would ahave gone bankrupt by now.
                        </div>
                        <span className="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>



        <button className="btn testimbtn"> <Link to="/thankyou">Click Here</Link></button>
    </div>

    </div>

    
   </>
  )
}

export default Testimonials
