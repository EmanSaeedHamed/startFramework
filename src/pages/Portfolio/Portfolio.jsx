import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard"
import profile1 from '../../assets/poert1.png'
import profile2 from '../../assets/port2.png'
import profile3 from '../../assets/port3.png'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <>
          <Navbar/>
          <section className="contact-section mt-5 py-5">
                    <div className="container">
                      <div className="d-flex flex-column align-items-center justify-content-center text-center pt-4">
                          <h2 className='text-uppercase mb-3 pt-5 pt-sm-0'>portfolio component</h2>
                          <div className="star-icon position-relative mb-3">
                              <i className="bi bi-star-fill"></i>
                          </div>
                      </div>
                     <div className="row g-5">
                       <PortfolioCard image={profile1}/>
                       <PortfolioCard image={profile2}/>
                       <PortfolioCard image={profile3}/>
                       <PortfolioCard image={profile1}/>
                       <PortfolioCard image={profile2}/>
                       <PortfolioCard image={profile3}/>
                     </div>
                    </div>
                    </section>
          <Footer/>
        </>
  )
}
