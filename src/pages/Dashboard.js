import React, { useContext, useState } from "react";
import logo from "../img/mediumLogo.png";
import loading from '../img/loading.gif'
import {
  BsBell,
  BsBookmarks,
  BsChevronRight,
  BsFilterSquare,
  BsHouseDoorFill,
  BsPencilSquare,
  BsPlus,
  BsXLg,
} from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiNoEntry } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { CiBookmarkPlus } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MediumContext } from "./MyContext";

function Dashboard() {
  const { user, reversePosts } = useContext(MediumContext);
  const [post_user, setPost_User]= useState([])
  const [postId, setPostId]= useState([])

  function findUser(id) {
    fetch(`http://localhost:4002/post/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          setPostId(data._id)
        })
      }
      
        fetch(`http://localhost:4002/user_post/${postId}`)
        .then((response) => response.json())
        .then((data) => {
          setPost_User(data)
        })
        console.log(post_user);

        function filterUsers(id) {
          const myUsers = reversePosts.filter(({user_id }) => user_id === id)
          return myUsers
      }
      console.log(filterUsers());

  return (
    <>
      <div className="dashboardContainer">
        <div className="dashBoardContent1">
          <Link to="/Dashboard" className="Link">
            <img src={logo} alt="" />
          </Link>
          <div className="dashboardContentIcon">
            <Link to="/Dashboard" className="Link">
              <p>
                <BsHouseDoorFill />
              </p>
            </Link>
            <p>
              <BsBell />
            </p>
            <p>
              <BsBookmarks />
            </p>
            <p>
              <BsFilterSquare />
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

        <div className="dashBoardContent2List pt-4">
          <div className="dashBoardContentList1">
            <p>
              <BsPlus />
            </p>
            <p style={{ fontStyle: "!important capitalize " }}>For you</p>
            <p className="dashBoardNav">following</p>
            <p className="dashBoardNav">business</p>
            <p className="dashBoardNav" style={{ display: "none" }}>
              philosophy
            </p>
            <p style={{ display: "none" }}>addition</p>
            <p>money</p>
            <b>
              <BsChevronRight />
            </b>
          </div>
          <hr />

          <div className="dasboardContainer">
            {reversePosts.length ? (
              reversePosts.map((posts) => {
                return (
                  <div>
                    <div>
                      {
                        filterUsers(posts._id)
                        // findUser(posts._id)
                      }
                      </div>
                    <div className="dashBoardContentList2 d-flex">
                      <div className="dashboardContentTitle" key={posts._id}>
                            <img
                              className="cntImg1"
                              src={`http://localhost:4002/uploads/${postId.userImage}`}
                              alt="image"
                            />
                        <Link to="/Content" className="Link">
                          <span>
                            BitcoinShrimps in Block6. {posts.date} ⭐
                            Member-only
                          </span>
                          <div className="dashBoardInformation mt-2">
                            <b>{posts.title}</b>
                            <p>{posts.body}</p>
                          </div>
                        </Link>

                        <div className="dashBoardContentExpand d-flex ">
                          <div className="d-flex gap-3">
                            <p className="Trending">trendring</p>
                            <p className="moreInfo">3 min read</p>
                            <p className="moreInfo">Because you follow Money</p>
                          </div>

                          <div className="d-flex functionIcon">
                            <p>
                              <FaRegBookmark />
                            </p>
                            <p>
                              <BiNoEntry />
                            </p>
                            <p>
                              <BiDotsHorizontalRounded />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="dashboardContentImage">
                        <Link to="/Content" className="Link">
                          <img
                            src={`http://localhost:4002/upload/${posts.post_image}`}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })
            ) : (
              <img className="error-fetch" src={loading} alt="" />
              // <i>Loading...</i>
            )}
          </div>
        </div>

        <div className="dashBoardContent3  mt-4">
          <button className="btnGetUnlimited">get unlimited access</button>

          <input
            type="text"
            placeholder="Search"
            className="search"
            style={{ paddingLeft: "20px" }}
          />
          <p
            style={{
              position: "absolute",
              marginTop: "-30px",
              paddingLeft: "5px",
            }}
          >
            <AiOutlineSearch />
          </p>

          <div style={{ display: "flex", marginTop: "50px", gap: "15px" }}>
            <p
              style={{
                backgroundColor: "green",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                marginTop: "9px",
              }}
            >
              &nbsp;
            </p>
            <b>Staff Picks</b>
          </div>

          <div style={{ display: "flex", gap: "3", lineHeight: "10px" }}>
            <img
              style={{ height: "20px", borderRadius: "50%" }}
              src="https://miro.medium.com/fit/c/20/20/0*bOVFN2_iLTHM5m2c.jpeg"
              alt=""
            />

            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              &nbsp; Carvell Wallace in Momentum
            </p>
          </div>
          <b style={{ fontSize: "15px" }}>
            Libreation and Power as a Black Writer
          </b>

          <div
            style={{
              display: "flex",
              gap: "3",
              lineHeight: "10px",
              marginTop: "30PX",
            }}
          >
            <img
              style={{ height: "20px", borderRadius: "50%" }}
              src="https://miro.medium.com/fit/c/24/24/1*cggPdLthLh1RjjAqUdX6Cg.png"
              alt=""
            />

            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              &nbsp; Jon Bell
            </p>
          </div>
          <b style={{ fontSize: "15px" }}>
            Some Perspective About the 2022 US Midterms
          </b>

          <div
            style={{
              display: "flex",
              gap: "3",
              lineHeight: "10px",
              marginTop: "30PX",
            }}
          >
            <img
              style={{ height: "20px", borderRadius: "50%" }}
              src="https://miro.medium.com/fit/c/24/24/1*cggPdLthLh1RjjAqUdX6Cg.png"
              alt=""
            />

            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              &nbsp; Julie Zhuo
            </p>
          </div>
          <b style={{ fontSize: "15px" }}>The Data-Informed Manifesto</b>

          <p
            className="mt-4"
            style={{ fontSize: "10px", fontWeight: "500", color: "blue" }}
          >
            See the full list
          </p>

          <div className="write">
            <div className="writeOnMwedium">
              <b>Writing on Medium</b>
              <span>
                <BsXLg />
              </span>
            </div>

            <p className="mt-4">New writer FAQ</p>
            <p>Expert writing advice</p>
            <p>Grow your readership</p>

            <button>Start writing</button>
          </div>

          <div className="d-flex mt-4" style={{ justifyContent: "center" }}>
            <img
              style={{ width: "35px", height: "40px", marginTop: "13px" }}
              src={logo}
              alt=""
            />
            <span style={{ fontSize: "25px", paddingTop: "10px" }}>
              <BsPlus />
            </span>
            <span style={{ color: "#55acee", fontSize: "35px" }}>
              <TiSocialTwitter />
            </span>
          </div>

          <div className="discover">
            <p style={{ display: "flex", justifyContent: "center" }}>
              Discover Medium writers you already
            </p>
            <p style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              follow on Twitter.
            </p>

            <button type="submit">Connect to Twitter</button>
            <p className="later">Maybe Later</p>
          </div>

          <div className="recommended">
            <p style={{ width: "110px" }}>programming</p>
            <p style={{ width: "100px" }}>data science</p>
            <p style={{ width: "100px" }}>technology</p>
            <p style={{ width: "135px" }}>self improvement</p>
            <p style={{ width: "80px" }}>writing</p>
            <p style={{ width: "100px" }}>relationships</p>
            <p style={{ width: "130px" }}>machine learning</p>
          </div>

          <b>Who to Follow</b>
          <div className="whoToFollow mt-3">
            <div className="whoToFollow1">
              <img
                src="https://miro.medium.com/fit/c/48/48/1*3STednUKL3lkYQxtw1Xavg.jpeg"
                alt="user_img"
              />
            </div>

            <div className="whoToFollow2">
              <div>
                <b>Ken Makimsy Middleton</b>
                <p>
                  Alcohol-conscious writer <br />
                  committed to helping...
                </p>
              </div>

              <div>
                <button>Follow</button>
              </div>
            </div>
          </div>

          <div className="whoToFollow">
            <div className="whoToFollow1">
              <img
                src="https://miro.medium.com/fit/c/48/48/1*MnbSSf7uZMRKSt8PIRGWCg.jpeg"
                alt="user_img"
              />
            </div>

            <div className="whoToFollow2">
              <div>
                <b>Darius Forous</b>
                <p>
                  Author of 'Think Straight', 'Do it <br /> Today','Win Your
                  Inner Battle...{" "}
                </p>
              </div>

              <div>
                <button>Follow</button>
              </div>
            </div>
          </div>

          <div className="whoToFollow">
            <div className="whoToFollow1">
              <img
                src="https://miro.medium.com/fit/c/32/32/0*zALaHF2sBsCsi5TB"
                alt="user_img"
              />
            </div>

            <div className="whoToFollow2">
              <div>
                <b>Jonathan Samuel Onoja</b>
                <p>
                  Decentralized bonds for a <br /> more efficient and stable
                  Defi...
                </p>
              </div>

              <div>
                <button>Follow</button>
              </div>
            </div>
          </div>

          <p
            style={{
              color: "#1a8917",
              fontSize: "12px",
              margin: "25px 0",
              fontWeight: "500",
            }}
          >
            see more suggestions
          </p>

          <div className="readingList">
            <h4>Reading list</h4>
            <p>
              Click the <CiBookmarkPlus /> on ant story to easily add it to your{" "}
              <br /> reading list or a custome list that you can share.
            </p>

            <p>
              Help Status Writers Blog Careers Privacy Terms About <br />
              Text to speech
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
