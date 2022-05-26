import { useParams, Outlet, Link, Route, Routes } from "react-router-dom";
import "./QuoteDetail.css";
let DUMMY_DATA = [
  { id: "q1", title: "trust the process", author: "guru" },
  { id: "q2", title: "believe in yourself ", author: "guru" },
];

let QuoteDetail = () => {
  let params = useParams();
  let quoteid = params.quoteID;

  let [data] = DUMMY_DATA.filter((val) => {
    return val.id === quoteid;
  });

  if (!data) {
    return (
      <div className="text-center quoteDetail-bucket-2">
        <h3 className="text-capitalize ">quote detail not found</h3>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="quoteDetail-bucket-1">
          <div className="d-flex align-items-center justify-content-center">
            <h3 className="text-capitalize">{data.title}</h3>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="text-capitalize fw-bolder  fst-italic">{`-${data.author}`}</span>
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route
          to=":quoteID"
          element={ */}
      <div className="text-center">
        <Link to="comments" className="btn btn-primary text-capitalize">
          load comments
        </Link>
      </div>
      {/* }
        ></Route>
      </Routes> */}

      <Outlet />
    </div>
  );
};

export default QuoteDetail;
