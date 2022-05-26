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
  let navigate2 = useNavigate();
  let location = useLocation();
  let [searchParams] = useSearchParams();

  let getSearchParams = searchParams.get("sort") === "asc";
  console.log("location=", location);
  console.log("searchParams=", searchParams);
  console.log("getSearchParams=", getSearchParams);

  let DUMMY_DATA = [
    { id: "q1", title: "trust the process", author: "guru" },
    { id: "q2", title: "believe in yourself ", author: "guru" },
  ];

  let sortHandler = (e) => {
    navigate2(`/quote?sort=${getSearchParams ? "des" : "asc"}`, {
      replace: true,
    });
  };

  return (
    <div className="allquote-bucket-1">
      <div>
        <button
          onClick={sortHandler}
          className="text-capitalize btn btn-primary"
        >
          sort {getSearchParams ? "Descending" : "Ascending"}
        </button>
      </div>
      <hr />
      {DUMMY_DATA.map((val) => {
        return (
          <QuoteItem
            key={val.id}
            id={val.id}
            title={val.title}
            author={val.author}
          />
        );
      })}

      <Outlet />
    </div>
  );
};

export default AllQuote;
