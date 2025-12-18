import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import './Contact.css'
import ContactForm from "../../components/ContactForm/ContactForm"
export default function Contact() {
  return (
   <>
         <Navbar/>
          <section className="contact-section mt-5 py-5">
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center text-center pt-4">
                <h2 className='pt-5 pt-sm-0 text-uppercase mb-3'>conatct section</h2>
                <div className="star-icon position-relative mb-3">
                    <i className="bi bi-star-fill"></i>
                </div>
            </div>
            <ContactForm/>
          </div>
          </section>
         <Footer/>
       </>
  )
}
