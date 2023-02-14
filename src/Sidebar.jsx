import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();

  let logout = () => {
    navigate("/");
  };
  return (
    <>
      <h1 style={{ color: "black", paddingLeft: "30%" }}>
        Student & Teacher Management
      </h1> 
     

      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Topbar Navbar --> */}
        <div className="row">
        <Link className="nav-link" to="/portal/dashboard">
          {" "}
          <span>
            {" "}
            <h4 style={{ color: "blue" }}>DASHBOARD</h4>{" "}
          </span>
        </Link>

        <Link className="nav-link" to="/portal/teacher">
          <span>
            <h4 style={{ color: "orange" }}>TEACHER</h4>
          </span>
        </Link>

        <Link className="nav-link" to="/portal/student">
          <span>
            <h4 style={{ color: "darkgreen" }}>STUDENTS</h4>
          </span>
        </Link>
      </div>
        <ul class="navbar-nav ml-auto">

          {/* <!-- Nav Item - User Information --> */}
          <li class="nav-item dropdown no-arrow">
            <button
              onClick={logout}
              class="mr-2 d-none d-lg-inline text-gray-600 small"
              style={{}}
            >
              LOG OUT
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
