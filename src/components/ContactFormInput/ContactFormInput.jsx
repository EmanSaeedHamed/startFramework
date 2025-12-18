import { useRef, useState } from "react";

export default function ContactFormInput({ labelName, placeholderInput , key , type}) {
    const [input, setInput] = useState("");
  const labelRef = useRef(null);
  return (
    <>
        <div className="mb-3">
                <div className="overflow-hidden">
                  <label
                    ref={labelRef}
                    htmlFor={key}
                    className="form-label animate-label-before"
                  >
                    {labelName}
                  </label>
                </div>
                <input
                  type={type}
                  className="form-control border-0 border-bottom py-3"
                  id={key}
                  aria-describedby="emailHelp"
                  placeholder={placeholderInput}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (e.target.value === "") {
                      labelRef.current.classList.remove("animate-label");
                      labelRef.current.classList.add("animate-label-before");
                    } else {
                     labelRef.current.classList.add("animate-label");
                      labelRef.current.classList.remove("animate-label-before");
                    }
                    
                  }}
                />
              </div>
    </>
  )
}
