import avatar from '../../assets/avataaars.svg';
import './StartFramework.css';
export default function StartFramework() {
  return (
    <>
        <section className='start-framework mt-5 pt-5 d-flex justify-content-center align-items-center text-white'>
            <div className='py-5 d-flex flex-column align-items-center'>
                <img className='d-block mb-4' src={avatar} alt="" />
                <h2 className='text-uppercase mb-3'>start Framework</h2>
                <div className="star-icon position-relative mb-3">
                    <i className="bi bi-star-fill"></i>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
    </>
  )
}
