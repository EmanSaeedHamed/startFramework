import './NotFound.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found-container">
        <div className="not-found-content text-center">
          <h2>Not Found</h2>
          <p>This page doesn’t exist.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
