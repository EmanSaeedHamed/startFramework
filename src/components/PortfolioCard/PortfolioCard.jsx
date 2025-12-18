import './PortfolioCard.css'
import { useState } from 'react'

export default function PortfolioCard({image}) {
      const [layer, setlayer] = useState(false);
  return (
    <>
       <div className="col-md-6 col-lg-4">
                        <div className="portfolio-card">
                            <div className="img-card rounded-3 overflow-hidden position-relative">
                                <img className='w-100 rounded-3' src={image} alt="" />
                                <div onClick={(e) => {
                                    setlayer(!layer);
                                }} className="img-card-layer position-absolute start-0 top-0 h-100 w-100 d-flex align-items-center justify-content-center">
                                    <i className="bi bi-plus-lg text-white"></i>
                                </div>
                            </div>
                        </div>
                      </div>
                      {layer? <div onClick={()=>{
                          setlayer(false)
                      }} className="layer-full-img bg-primary bg-opacity-25 position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center m-0">
                            <div>
                              <img onClick={(e) => e.stopPropagation()} className="w-100 d-block m-auto" src={image} alt="" />
                            </div>
                    </div>  : ""}
         
        
    </>
  )
}
