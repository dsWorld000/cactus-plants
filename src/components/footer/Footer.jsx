import React from 'react'
import "./Footer.css"
import { RiCactusLine } from '@remixicon/react'
import { RiFacebookCircleFill } from '@remixicon/react'
import { RiInstagramFill } from '@remixicon/react'
import { RiTwitterXLine } from '@remixicon/react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container container grid">
      <div>
        <a href="" className="footer__logo">
          <i><RiCactusLine/></i> Cactus
        </a>

        <p className="footer__description">
          Choose the best <br />
          plants for your home.
        </p>
      </div>

      <div className="footer__content grid">
        <div>
          <h3 className="footer__title">COMPANY</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">About us</a>
            </li>
            <li>
              <a href="#" className="footer__link">Products</a>
            </li>
            <li>
              <a href="#" className="footer__link">Features</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">INFORMATION</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Blogs & News</a>
            </li>
            <li>
              <a href="#" className="footer__link">Contact us</a>
            </li>
            <li>
              <a href="#" className="footer__link">FAQs</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer__title">SOCIAL MEDIA</h3>
          <div className="footer__social">
            <a href="https://www.facebook.com/dsrajput.0001?mibextid=ZbWKwL" className="footer__social-link">
              <i><RiFacebookCircleFill/></i>
            </a>
            <a href="https://www.instagram.com/ds.rajput01?igsh=OTFqYzFya2xscnZy" className="footer__social-link">
              <i><RiInstagramFill/></i>
            </a>
            <a href="https://x.com/dsrajput01?t=0vAM9jVahQCHeO7aT1lZfQ&s=09" className="footer__social-link">
              <i><RiTwitterXLine/></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <span className="footer__copy">
      &#169; All Rights Reserved By <span className="deepak">DEEPAK</span>
    </span>
  </footer>
  )
}

export default Footer