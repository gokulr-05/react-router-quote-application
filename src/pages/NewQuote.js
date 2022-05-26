import "./NewQuote.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
let NewQuote = () => {
  let navigate1 = useNavigate();
  let author = useRef("");
  let quote = useRef("");

  let submitHander = (e) => {
    e.preventDefault();
    console.log("author=", author.current.value);
    console.log("quote=", quote.current.value);
    navigate1("/", { replace: true });
  };

  return (
    <form onSubmit={submitHander}>
      <div className="newquote-bucket-1">
        <div className="d-flex flex-row align-items-center justify-content-center gap-3 m-3">
          <div>
            <label className="text-capitalize" htmlFor="author">
              author:
            </label>
          </div>
          <div>
            <input ref={author} className="form-control" type="text" />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-center gap-3 m-3">
            <div className="align-self-start">
              <label className="text-capitalize" htmlFor="author">
                quote:
              </label>
            </div>
            <div>
              <textarea
                ref={quote}
                className="form-control"
                cols="22"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="text-capitalize btn btn-primary">add quote</button>
        </div>
      </div>
    </form>
  );
};

export default NewQuote;
