import "./NewQuote.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../component/LoadingSpinner";

let NewQuote = () => {
  let [isLoading, setIsLoading] = useState(false);
  let fetchHandler = async (obj) => {
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://react-router-quote-app-default-rtdb.firebaseio.com/quote.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json(response);

      console.log("data.name=", data.name);

      if (!response.ok) {
        throw new Error("Error in fetch : POST");
      }
      setIsLoading(false);
    } catch (err) {
      console.log("Error have Occured:", err.message);
    }
  };

  let navigate1 = useNavigate();
  let author = useRef("");
  let quote = useRef("");

  let submitHander = (e) => {
    e.preventDefault();
    console.log("author=", author.current.value);
    console.log("quote=", quote.current.value);

    if (localStorage.getItem("quoteID") === null) {
      localStorage.setItem("quoteID", 1);
    }

    let id = Number(localStorage.getItem("quoteID"));

    let obj = {
      id: id,
      author: author.current.value,
      quote: quote.current.value,
    };
    console.log("obj=", obj);

    localStorage.setItem("quoteID", id + 1);

    fetchHandler(obj);

    navigate1("/", { replace: true });
  };

  return (
    <div>
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
            <button className="text-capitalize btn btn-primary">
              add quote
            </button>
          </div>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default NewQuote;
