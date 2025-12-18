import "./ContactForm.css";
import ContactFormInput from "../ContactFormInput/ContactFormInput";
import { data } from "react-router";
export default function ContactForm() {
  
  return (
    <>
      <div className="contact-form row">
        <div className="col-md-7 m-auto">
          <div>
            <form onSubmit={e => e.preventDefault()}>
              <ContactFormInput labelName="userName :" placeholderInput="userName" key={1} type="text"/>
              <ContactFormInput labelName="userAge :" placeholderInput="userAge" key={2} type="text"/>
              <ContactFormInput labelName="userEmail :" placeholderInput="userEmail" key={3} type="email"/>
              <ContactFormInput labelName="userPassword :" placeholderInput="userPassword" key={4} type="password"/>


              <button type="submit" className="btn mt-4 text-white ">
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
