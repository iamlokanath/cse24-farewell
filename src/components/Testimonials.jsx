import React from "react";
import { Link } from "react-router-dom";
import "./css/Testimonials.css";
import Lokanath from "./Image/Lokanath.JPG";
import Lalit from "./Image/Lalit.jpg";
import Swadhin from "./Image/Swadhin.jpg";
import Jivan from "./Image/Jiban.jpg";
import Soumya from "./Image/Soumya.jpg";
import Swati from './Image/swati.jpg';
import Piyush from './Image/Piyush.jpg';
import Ashwin from './Image/Ashwin.jpg';
import Manua from './Image/Manua.jpg';
import Jogalaxmi from './Image/Joga.jpg';
import Subha from './Image/Subha.jpg';
const Testimonials = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* first row */}
          <div className="first-row">
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img
                    src={Lokanath}
                    alt="Robert Garrison"
                    className="profile"
                  />
                  <div className="pt-3 text-uppercase name">Lokanath Panda</div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                  "Dear seniors, thank you for everything. Your guidance and presence have meant the world to us, and we'll truly miss you as you move forward. Wishing you all the best for your future endeavors. A special note of gratitude to my dear brother Tanmay Bhai for his unwavering support and guidance. Thank you."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Lalit} alt="Jeffery Kennan" className="profile" />
                  <div className="pt-3 text-uppercase name">
                    Lalit Kumar Sethi
                  </div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    "As you embark on this new chapter of your life, we want to
                    express our heartfelt gratitude for all that you have done.
                    Your dedication, hard work, and positive attitude have made
                    a lasting impact on all of us. While we will miss your
                    presence and your contributions.Farewell, and best wishes
                    for a bright and prosperous future."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Swadhin} alt=" Mr Lorem" className="profile" />
                  <div className="pt-3 text-uppercase name">
                    Swadhin R Patra
                  </div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    "ଧନ୍ୟବାଦ ଆଜି ନଇଁ ଗଲା ମୋର କଲମ | କଣ ଅତୀତ ପ୍ରେମରେ ନା ସମୟ ଡର ରେ
                    ଅଧା ନିଦ କି ମିଛ ଅଳସ ରେ । ନଇଁ ଗଲା ବୋଧେ, ତାଙ୍କ ଅନୁଗ୍ରହ ତଳେ।
                    ତାଙ୍କ ସମ୍ମାନ ରେ ମୁଣ୍ଡ ଟେକିଥିଲା, ସାଥେ ଲେଖିବାକୁ ହାତ ବଢେଇଲା,
                    କିନ୍ତୁ, ଉତ୍ତର ମିଳିଲା ହାତ ଠାର ରେ। ପ୍ରତିଉତ୍ତରେ ଥିଲା ଧନ୍ୟବାଦ।
                    ଧନ୍ୟବାଦ, ସ୍ମୃତି, ଶକ୍ତି, ଆଉ ଶାନ୍ତି ପାଇଁ ଲେଖି ଯାଇ ଥିଲା
                    ଗୋଟେ ଭିଜା କାଗଜ ରେ।"
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="first-row">
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Jivan} alt="Mr Lorem" className="profile" />
                  <div className="pt-3 text-uppercase name">
                    Jivan Jyoti Satpathy
                  </div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    "Dear seniors, we will miss you all very much. You have been
                    an inspiration to us, and we wish you all the best in your
                    future endeavors. Thank you for every support!"
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Soumya} alt="Jeffery Kennan" className="profile" />
                  <div className="pt-3 text-uppercase name">Soumya R Sahoo</div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    "The most beautiful and gorgeous part of life is the college
                    life and we are happy to have you with us always, on this
                    beautiful journey of our college life.... Thank you seniors
                    for your affection and admiration...."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img
                    src=
                      {Swati}
                    
                    alt="Issac Maxwell"
                    className="profile"
                  />
                  <div className="pt-3 text-uppercase name">Swati Nath</div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                    "In your guidance, we found strength to grow, You nurtured us
                    with care, more than you'll ever know. As you leave, our
                    gratitude knows no bounds, Farewell, dear senior, your
                    presence will be missed around.All the best for all the
                    exciting challenges and opportunities ahead!! With regards 
                    Swati"
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
          </div>


          {/* 3rd row */}
          <div className="first-row">
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Jogalaxmi} alt="Mr Lorem" className="profile" />
                  <div className="pt-3 text-uppercase name">
                    Jogalaxmi Rath
                  </div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                  "Thank you, senior, for all the smiles and laughter. I hope we made your day special."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Manua} alt="Jeffery Kennan" className="profile" />
                  <div className="pt-3 text-uppercase name">Manoranjan Moharana</div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                  "With every step, you led us on the right path, Your wisdom and guidance spared us from any aftermath. As you bid adieu, we salute your contributions, Farewell, dear senior, you leave us with cherished memories and emotions."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img
                    src=
                      {Ashwin}
                    
                    alt="Issac Maxwell"
                    className="profile"
                  />
                  <div className="pt-3 text-uppercase name">Ashwin Lenka</div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                  "Goodbye, seniors! Your journey beyond inspires us all. May your futures be bright, your hearts light, and your memories everlasting. Farewell, and may success follow you always."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
          </div>


          {/* 4th row */}
          <div className="first-row">
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Piyush} alt="Mr Lorem" className="profile" />
                  <div className="pt-3 text-uppercase name">
                    Piyush Sharma
                  </div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                  "As we stand on the threshold of a new beginning, it's impossible not to pause and reflect on the journey that has brought us here. From the first day of freshman year, filled with uncertainty and excitement, to this moment, brimming with nostalgia and anticipation, we've grown in ways we never imagined. Each step, each triumph, and even each stumble has shaped us into the individuals we are today."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testm-card">
                <div className="face front-face">
                  <img src={Subha} alt="Mr Lorem" className="profile" />
                  <div className="pt-3 text-uppercase name">
                    Subhadarshan
                  </div>
                  <div className="designation">3rd Year, CSE</div>
                </div>
                <div className="face back-face">
                  <span className="fas fa-quote-left"></span>
                  <div className="testimonial">
                  "Life is a journey, and as you embark on your next chapter, remember the memories we've shared and the bonds we've forged. May your path be illuminated with success and happiness."
                  </div>
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
           
            
          </div>


          <button className="btn testimbtn">
            {" "}
            <Link to="/thankyou" className="click">Click Here</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
