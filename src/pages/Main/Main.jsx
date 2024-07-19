import React from 'react'
import "./Main.css"
import { RiArrowRightLine } from '@remixicon/react'
import homeCactusImg from "../../assets/home-cactus.png";



const Main = () => {

  

  return (
    <>
    <section className="home section" id="home">
    <div className="home__container container grid">
      <img src={homeCactusImg} alt="img" class="home__img" />

      <div className="home__data">
        <h1 className="home__title">
          ORNAMENTAL <br />
          <span>PLANTS </span>FOR <br />
          YOUR HOME <br />
        </h1>

        <p className="home__description">
          We design ornamental plants for your home in-house for an original
          style and quality you won't find anywhere else.
        </p>

        <div className="home__buttons">
          <a href="#shop" className="button">
            <span><i><RiArrowRightLine/></i></span>
            Go TO SHOP
          </a>
          <a href="#" className="button__link">MORE DETAILS</a>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Main