import { useParams, Outlet, Link, Route, Routes } from "react-router-dom";
import "./QuoteDetail.css";
import LoadingSpinner from "../component/LoadingSpinner";
import { useState, useEffect } from "react";

let QuoteDetail = () => {
  let [isLoading, setIsLoading] = useState(false);
  let [dataArr, setDataArr] = useState([]);

  // console.log("dataArr=", dataArr);

  let fetchDataHandler = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://react-router-quote-app-default-rtdb.firebaseio.com/quote.json"
      );

      if (!response.ok) {
        throw new Error("error occured");
      }

      let data = await response.json();

      let arr = [];

      for (let key in data) {
        let obj = data[key];
        arr.push(obj);
      }
      // console.log("arr=", arr);
      setDataArr(arr);
      setIsLoading(false);
    } catch (err) {
      console.log("error=", err.message);
    }
  };
  useEffect(() => {
    fetchDataHandler();
  }, []);

  let params = useParams();
  let quoteid = params.quoteID;
  // console.log("quoteid=", quoteid);

  let [data] = dataArr.filter((val) => {
    return val.id.toString() === quoteid.toString();
  });

  // console.log("data=", data);

  if (!isLoading && !data) {
    return (
      <div className="text-center quoteDetail-bucket-2">
        <h3 className="text-capitalize ">quote detail not found</h3>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div>
        <div className="quoteDetail-bucket-1">
          <div className="d-flex align-items-center justify-content-center">
            <h3 className="text-capitalize">{data.quote}</h3>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="text-capitalize fw-bolder  fst-italic">{`-${data.author}`}</span>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default QuoteDetail;
