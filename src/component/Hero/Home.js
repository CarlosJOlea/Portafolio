import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Carlos Olea</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer.",]} loop true cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p> <Typewriter words={["I am a person who likes to learn new technologies, to improve the development of my work "]} loop true cursor cursorStyle='_' typeSpeed={100} deleteSpeed={50} delaySpeed={1000} /> </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'> 
                <a  href="https://www.facebook.com/carlosjesus.oleadiaz" >
                  <button id="facebook" className='btn_shadow'>
                   <i class='fab fa-facebook-f'></i> 
                  </button>
                  </a>
                  <button className='btn_shadow' >
                  <a  href="https://www.instagram.com/carlos_olea_3/" > <i class='fab fa-instagram'></i></a>
                   
                  </button>
                  <button className='btn_shadow' >
                  <a href="https://www.linkedin.com/in/carlos-olea-5a493a22a/" ><i class='fab fa-linkedin-in'></i></a>
                   
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='fasdf' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='fasdf' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='fasdf' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
