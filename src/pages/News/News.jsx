import React from 'react'
import "./News.css"
import newCactus1 from "../../assets/new-cactus-1.png"
import newCactus2 from "../../assets/new-cactus-2.png"
import newCactus3 from "../../assets/new-cactus-3.png"

const News = () => {
  return (
    <>
    <section className="new section" id="news">
    <div className="new__container container grid">
      <div className="new__data">
        <h2 className="section__title">
          NEW PLANTS FOR <br />
          YOUR HOME
        </h2>
        <p className="new__description">
          Select new ornamental plants for home decoration and obtain an
          atmosphere of harmony and freshness.
        </p>
      </div>
      <div className="new__content grid">
        <article className
        ="new__card">
          <img
            src={newCactus1}
            alt="image"
            class="new__img"
          />
          <h2 className="new__title">Gymnocalycium Cactus</h2>
        </article>
        <article className="new__card">
          <img
            src={newCactus2}
            alt="image"
            className="new__img"
          />
          <h2 className="new__title">Lily Pad Succulent</h2>
        </article>
        <article className="new__card">
          <img
            src={newCactus3}
            alt="image"
            className="new__img"
          />
          <h2 className="new__title">Rebutia Cactus</h2>
        </article>
      </div>
    </div>
  </section>
  </>
  )
}

export default News