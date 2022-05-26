import "./Comments.css";
import { Link } from "react-router-dom";
let Comments = () => {
  return (
    <div className="text-capitalize comments-bucket rounded">
      <div>
        <h3 className="text-capitalize  text-center">comments</h3>
      </div>
      <div className="text-center  p-3">
        <div className="collapse py-2" id="collapseExample">
          <div className="card card-body">
            <textarea name="" id="" cols="30" rows="5"></textarea>
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
          add comments
        </button>
      </div>
      <div className="text-center py-2">
        <h6 className="text-capitalize">comments...</h6>
        {/* <Link to="/quote">link</Link> */}
      </div>
    </div>
  );
};

export default Comments;
