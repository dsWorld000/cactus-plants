import React from 'react'
import './Shop.css'
import shopCactus1 from "../../assets/shop-cactus-1.png"
import shopCactus2 from "../../assets/shop-cactus-2.png"
import shopCactus3 from "../../assets/shop-cactus-3.png"
import shopCactus4 from "../../assets/shop-cactus-4.png"
import shopCactus5 from "../../assets/shop-cactus-5.png"
import { RiShoppingBagLine } from '@remixicon/react'
import Care from '../Care/Care'

const Shop = () => {
  return (
    <>
    <section className="shop section" id="shop">
    <h2 className="section__title">THE BEST PLANTS</h2>
    <div className="shop__container container grid">
      <article className="shop__card">
        <img
          src={shopCactus1}
          alt="image"
          className="shop__img"
        />
        <h3 className="shop__title">
          Gymnocalycium <br />
          Cactus
        </h3>
        <span className="shop__price">$15</span>
        <button className="shop__button">
          <i><RiShoppingBagLine/></i>
        </button>
      </article>
      <article className="shop__card">
        <img
          src={shopCactus2}
          alt="image"
          className="shop__img"
        />
        <h3 className="shop__title">
          Echeveria <br />
          Succulent
        </h3>
        <span className="shop__price">$10</span>
        <button className="shop__button">
        <i><RiShoppingBagLine/></i>
        </button>
      </article>
      <article className="shop__card">
        <img
          src={shopCactus3}
          alt="image"
          className="shop__img"
        />
        <h3 className="shop__title">
          Ferocactus <br />
          Cactus
        </h3>
        <span className="shop__price">$15</span>
        <button className="shop__button">
        <i><RiShoppingBagLine/></i>
        </button>
      </article>
      <article className="shop__card">
        <img
          src={shopCactus4}
          alt="image"
          className="shop__img"
        />
        <h3 className="shop__title">
          Key Lime Pie <br />
          Succulent
        </h3>
        <span className="shop__price">$10</span>
        <button className="shop__button">
        <i><RiShoppingBagLine/></i>
        </button>
      </article>
      <article className="shop__card">
        <img
          src={shopCactus5}
          alt="image"
          className="shop__img"
        />
        <h3 className="shop__title">
          Melocactus <br />
          Cactus
        </h3>
        <span className="shop__price">$15</span>
        <button className="shop__button">
        <i><RiShoppingBagLine/></i>
        </button>
      </article>
    </div>
  </section>
  <Care />
  </>
  )
}

export default Shop