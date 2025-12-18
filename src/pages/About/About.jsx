import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import './About.css';
export default function About() {
  return (
    <>
      <Navbar/>
      <section className="about-section mt-5 py-sm-5 text-white">
        <div className="container py-sm-5">
            <div className="d-flex flex-column align-items-center justify-content-center text-center pt-5">
                <h2 className='text-uppercase mb-3 pt-5'>about component</h2>
                <div className="star-icon position-relative mb-3">
                    <i className="bi bi-star-fill"></i>
                </div>
            </div>
            <div className="row pb-5">
                <div className="col-md-6 ps-md-5 px-5 pe-md-2">
                    <div>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
                <div className="col-md-6 pe-md-5 px-5 ps-md-2">
                    <div>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
