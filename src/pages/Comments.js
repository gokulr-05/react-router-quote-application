import "./Comments.css";
import { Link, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
let Comments = () => {
  let [commentArr, setcommentArr] = useState([]);
  let [displayArr, setDisplayArr] = useState([]);
  let changeData;
  let [z, setZ] = useState(1);

  let url =
    "https://react-router-quote-app-default-rtdb.firebaseio.com/comment.json";

  let txt = useRef();

  let fetchHandler1 = async () => {
    try {
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error in adding comments ");
      }

      let data = await response.json();

      let arr = [];

      for (let key in data) {
        arr.push(data[key]);
      }

      setcommentArr(arr);

      let arr1 = [];

      for (let val of arr) {
        console.log("val=", val);
        if (val.quoteID === quoteID) {
          arr1.push(val.comment);
        }
      }

      console.log("arr1=", arr1);

      setDisplayArr(arr1);
    } catch (err) {
      console.log("error occured=", err);
    }
  };

  useEffect(() => {
    fetchHandler1();
  }, [z]);

  let params1 = useParams();
  let quoteID = params1.quoteID;

  console.log("quoteID=", quoteID);

  let fetchHandler = async (commentObj) => {
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(commentObj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error in adding comments ");
      }

      changeData = await response.json();
      setZ((prev) => {
        return !prev;
      });
    } catch (err) {
      console.log("error occured=", err);
    }
  };

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(txt.current.value);

    let commentObj = { quoteID: quoteID, comment: txt.current.value };
    console.log("commentObj=", commentObj);

    fetchHandler(commentObj);

    txt.current.value = "";
  };

  return (
    <div className="text-capitalize comments-bucket rounded">
      <div>
        <h3 className="text-capitalize  text-center">comments</h3>
      </div>
      <div className="text-center  p-3">
        <div className="collapse py-2" id="collapseExample">
          <div className="card card-body">
            <form onSubmit={submitHandler}>
              <textarea
                ref={txt}
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="mt-4 text-capitalize btn btn-primary"
              >
                add comment
              </button>
            </form>
          </div>
        </div>
        <button
          className="btn btn-primary text-capitalize "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          comments
        </button>
      </div>
      <div className="text-center py-2">
        <h5 className="text-capitalize fst-italic">
          <u>comments:</u>
        </h5>

        {displayArr.map((val) => {
          return <h6 key={Math.random()}>{val}</h6>;
        })}
      </div>
      <div className="text-center">
        <Link to={`/quote/${quoteID}`} className="btn btn-primary">
          toggle
        </Link>
      </div>
    </div>
  );
};

export default Comments;
