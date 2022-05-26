import { Link } from "react-router-dom";

let LoadComment = () => {
  return (
    <div className="text-center">
      <Link to="comments" className="btn btn-primary text-capitalize">
        load comments
      </Link>
    </div>
  );
};

export default LoadComment;
