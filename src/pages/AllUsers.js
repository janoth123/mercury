import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { BsBookmarks, BsHouseDoorFill, BsPencilSquare } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MediumContext } from "./MyContext";

function AllUsers() {
  const { user, setUser } = useContext(MediumContext);
  return (
    <div className="adminContainer">
      <div className="section1">
        <div>
          <Link to="/AllUsers" className="Link">
            <p>
              <IoPersonCircleSharp />
            </p>
          </Link>

          <div className="dashBoardContent1">
            <div className="dashboardContentIcon">
              <Link to="/Dashboard" className="Link">
                <p>
                  <BsHouseDoorFill />
                </p>
              </Link>
              <p>
                <BsBookmarks />
              </p>
              <hr />
              <Link to="/Write" className="Link">
                <p style={{ marginBottom: "70px" }}>
                  <BsPencilSquare />
                </p>
              </Link>
              <b>User</b>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 container-fluid">
        {user.length ? (
          user.map((user) => {
            return (
              <div className="usersDetails " key={user._id}>
                <div className="">
                  <img
                    className=""
                    src={`http://localhost:4002/upload/${user.userImage}`}
                    alt="img"
                  />
                  <p>Fullname: {user.fullname}</p>
                  <p>Email: {user.userEmail}</p>
                  <p>Phone: {user.userPhone}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default AllUsers;
