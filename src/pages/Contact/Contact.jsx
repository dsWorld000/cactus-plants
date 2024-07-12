import "./Contact.css"
import contactCactus from "../../assets/contact-cactus.png"
import { RiWhatsappFill } from "@remixicon/react"
import { RiMessengerFill } from "@remixicon/react"
import { RiMailFill } from "@remixicon/react"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">
          YOU WANT A CACTUS <br />
          CONTACT US
        </h2>
        <div className="contact__container container grid">
          <img
            src={contactCactus}
            alt="image"
            className="contact__img"
          />

          <div className="contact__content">
            <div>
              <h3 className="contact__title">Write to us</h3>

              <div className="contact__social">
                <a href="https://whatsapp.com/dl/" target="_blank">
                  <i><RiWhatsappFill/></i>
                </a>
                <a href="https://m.me/dsrajput.0001" target="_blank">
                  <i><RiMessengerFill/></i>
                </a>
                <a href="https://my-portfolio-bcn6.vercel.app/" target="_blank">
                  <i><RiMailFill/></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="contact__title">Call us at the numbers</h3>
              <address className="contact__info">
                +91-8708797121 <br />
                +91-9306487410
              </address>
            </div>

            <div>
              <h3 className="contact__title">Find us here</h3>
              <address className="contact__info">
                Ateli - Haryana - India <br />
                PIN:- 123021
              </address>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact