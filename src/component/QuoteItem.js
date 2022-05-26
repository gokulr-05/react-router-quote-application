import "./Quote.css";
import { Link, NavLink } from "react-router-dom";
import "./QuoteItem.css";

let QuoteItem = ({ id, title, author }) => {
  return (
    <div className="d-flex align-items-center justify-content-around p-3 quote-item-bucket-1 my-3 rounded-2 ">
      <div>
        <h4 className="text-capitalize">{title}</h4>
        <div className="d-flex align-items-center justify-content-end pe-3">
          <span className="text-muted fst-italic text-capitalize ">{`-${author}`}</span>
        </div>
      </div>
      <div>
        <Link to={`${id}`} className="btn btn-primary text-capitalize">
          view fullscreen
        </Link>
      </div>
    </div>
  );
};

export default QuoteItem;
