import { useEffect, useState } from "react";
import LoadingSpinner from "../component/LoadingSpinner";

import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
  Outlet,
} from "react-router-dom";

import QuoteItem from "../component/QuoteItem";
import "./AllQuote.css";

let AllQuote = () => {
  let [isLoading, setIsLoading] = useState(false);
  let [dataArr, setDataArr] = useState([]);

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
      console.log("arr=", arr);
      setDataArr(arr);
      setIsLoading(false);
    } catch (err) {
      console.log("error=", err.message);
    }
  };

  let navigate2 = useNavigate();
  let location = useLocation();
  let [searchParams] = useSearchParams();

  let getSearchParams = searchParams.get("sort") === "asc";

  let sortHandler = (e) => {
    navigate2(`/quote?sort=${getSearchParams ? "des" : "asc"}`, {
      replace: true,
    });
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div className="allquote-bucket-1">
      {isLoading && <LoadingSpinner />}
      <div>
        <button
          onClick={sortHandler}
          className="text-capitalize btn btn-primary"
        >
          sort {getSearchParams ? "Descending" : "Ascending"}
        </button>
      </div>
      <hr />
      {dataArr.map((val) => {
        return (
          <QuoteItem
            key={val.id}
            id={val.id}
            title={val.quote}
            author={val.author}
          />
        );
      })}

      <Outlet />
    </div>
  );
};

export default AllQuote;
