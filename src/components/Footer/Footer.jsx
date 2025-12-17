import './Footer.css';
export default function Footer() {
  return (
    <>
       <footer>
         <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h3>AROUND THE WEB</h3>
                        <div className="footer-icons d-flex justify-content-center gap-2">
                            <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle">
                                <i className="bi bi-facebook"></i>
                            </div>
                            <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle">
                                <i className="bi bi-twitter"></i>
                            </div>
                            <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle">
                                <i className="bi bi-linkedin"></i>
                            </div>
                            <div className="footer-icon d-flex align-items-center justify-content-center rounded-circle">
                                <i className="bi bi-globe"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
         </div>
         <div className="footer-bottom">
                <p className='pt-3'>Copyright © Your Website 2021</p>
            </div>
       </footer>
    </>
  )
}
