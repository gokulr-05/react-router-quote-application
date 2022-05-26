import "./MainHeader.css";
import { NavLink } from "react-router-dom";
let MainHeader = () => {
  return (
    <div className="row header-bucket-1 bg-primary">
      <div className="col-6">
        <div className="ms-4">
          <NavLink to="/" className="title ">
            <h1 className="text-capitalize   ">quote app</h1>
          </NavLink>
        </div>
      </div>
      <div className="col-6 d-flex align-items-center justify-content-end">
        <div className="header-bucket-2 d-flex align-items-center justify-content-around">
          <div>
            <NavLink
              to="/quote"
              className={({ isActive }) => {
                return isActive ? "active" : "unactive";
              }}
            >
              <h4 className="text-capitalize m-0  ">All Quote</h4>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/newquote"
              className={({ isActive }) => {
                return isActive ? "active" : "unactive";
              }}
            >
              <h4 className="text-capitalize m-0  ">new Quote</h4>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
