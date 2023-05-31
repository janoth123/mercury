import React, { useContext } from "react";
import logo from "../img/mediumLogo.png";
import {
  BsBell,
  BsBookmarkPlus,
  BsBookmarks,
  BsBoxArrowUp,
  BsChat,
  BsFilterSquare,
  BsHouseDoorFill,
  BsPencilSquare,
  BsReception0,
} from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { IoHandLeftSharp } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import {
  TbAntennaBars1,
  TbBookmark,
  TbBrandLinkedin,
  TbInfinity,
} from "react-icons/tb";
import { FaHandHoldingHeart, FaRegBookmark } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiMessageAdd } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MediumContext } from "./MyContext";

function Content() {
  const { comment, setComment, like, setLike } = useContext(MediumContext);

  return (
    <>
      <div className="contentContainer">
        <div className="Content1">
          <Link to="/Dashboard" className="Link">
            <img style={{ backgroundColor: "white" }} src={logo} alt="" />
          </Link>
          <div className="ContentIcon">
            <Link to="/" style={{ color: "white" }}>
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
            <Link to="/Write" style={{ color: "white" }}>
              <p style={{ marginBottom: "70px" }}>
                <BsPencilSquare />
              </p>
            </Link>
            <b>User</b>
          </div>
        </div>

        <div className="Content2List pt-4">
         
          <div className="ContentList1">
            <div className="img">
              <img
                src="https://miro.medium.com/fit/c/48/48/0*zyHb8yqCDszgfGj3"
                alt=""
              />
            </div>
            <div className="contentName_Logo">
              <div className="d-flex cnt1">
                <p className="authorName">Irtiza Hafiz</p>
                <div className="d-flex gap-3 logo">
                  <p>
                    <TiSocialTwitter />
                  </p>
                  <p>
                    <CiFacebook />
                  </p>
                  <p>
                    <TbBrandLinkedin />
                  </p>
                  <p>
                    <TbInfinity />
                  </p>
                  <p>
                    <TbBookmark />
                  </p>
                  <p>
                    <TbAntennaBars1 />
                  </p>
                </div>
              </div>
              <p className="autoPostDate" style={{ fontSize: "13px" }}>
                Nov6 . 6min read. ⭐ Member-only.{" "}
              </p>
            </div>
          </div>

          <div className="ContentList2">
            <h2>3 Things You Shouldn't Buy During A Recession</h2>
            <p>
              With interest rate hiled and rising inflation, our economy is in
            </p>
            <p>
              uncharted territories. Do your future self a favor and prepare for
              the{" "}
            </p>
            <p>worst by cutting these expenses</p>

            <img
              className="mt-4"
              style={{ width: "98%" }}
              src="https://miro.medium.com/max/720/0*nEGJXTdUwwC5S_R3"
              alt=""
            />

            <p
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "12px",
                color: "#425454",
              }}
            >
              Photo by <u>engin akyurt</u> on <u>Unsplash</u>
            </p>

            <b>
              The US and World economu has been very messed up recently. We
              don't know <br /> where it's going.
            </b>

            <p
              style={{ lineHeight: "30px", color: "#ece9e9", fontSize: "25px" }}
            >
              How to read this story from Irtiza Hafiz - and everything <br />
              else on Medium.
            </p>
            <p
              style={{
                lineHeight: "20px",
                fontSize: "13px",
                fontFamily: "cursive",
                color: "#d9d6d6",
              }}
            >
              You've read all your free member-only stories, become a memver to
              get unlimited access. Your <br />
              mwmbership fee supports the voices you want to hear more from.
            </p>
            <button className="upgrade">Upgrade</button>

            <div className="respond">
              <div className="d-flex gap-4">
                <p style={{ fontSize: "11px", cursor: "pointer" }}>
                  <IoHandLeftSharp style={{ fontSize: "18px" }} /> &nbsp;{" "}
                  {like.length}
                </p>
                <p style={{ fontSize: "11px", cursor: "pointer" }}>
                  <BsChat style={{ fontSize: "18px" }} />
                  &nbsp; {comment.length}
                </p>
              </div>

              <div className="d-flex gap-4">
                <p>
                  <BsBoxArrowUp />
                </p>
                <p>
                  <BsBookmarkPlus />
                </p>
                <p>
                  <BsReception0 />
                </p>
              </div>
            </div>
            <hr
              style={{
                marginBottom: "20px",
                width: "102%",
                marginLeft: "-15px",
              }}
            />
            <b
              style={{ color: "#d9d6d6", fontSize: "22px", fontWeight: "500" }}
            >
              Enjoy the read? Reward the writer.{" "}
              <sup style={{ fontSize: "10px" }}>Beta</sup>
            </b>
            <div className="givAtip">
              <p>
                Your tip will go to Irtiza Hafiz through a thirs-party platform
                of their <br /> choice, letting them know you appreciate their
                story.
              </p>

              <button className="tip">
                <FaHandHoldingHeart />
                &nbsp; Give a tip
              </button>
            </div>

            <div className="more">
              <div className="moreAboutUser">
                <h4>More from Irtiza Hafiz</h4>
                <div className="d-flex gap-2">
                  <button
                    style={{ width: "70px", fontWeight: "400", height: "35px" }}
                  >
                    Follow
                  </button>
                  <button
                    style={{
                      width: "35px",
                      borderRadius: "50%",
                      fontWeight: "400",
                      height: "35px",
                    }}
                  >
                    <BiMessageAdd />
                  </button>
                </div>
              </div>
              <div className=" moreAboutUser2">
                <p>
                  4x Top Writer. I write about Tech, Personal Finance, Health &
                  Lifestyle Design
                </p>
                <p style={{ paddingTop: "40px" }}> Nov 4 ⭐ Member-only</p>

                <div>
                  <div className="d-flex  moreBooks">
                    <div>
                      <b>How I Become a Little Smarter Every Day</b>
                      <p>
                        Use this app to grow intellectually while saving your
                        hard-earned money.
                      </p>
                      <p>
                        -One of the best was you can grow inrellectually is by
                        reading bools.
                      </p>
                      <p>
                        Non-fiction books, expecially, can teach tou a ton about
                        ant topic you...
                      </p>
                    </div>
                    <img
                      src="https://miro.medium.com/fit/c/112/112/0*Vgjmrhc9aazXptVc"
                      alt=""
                    />
                  </div>
                </div>

                <div className="ContentExpand d-flex ">
                  <div className="d-flex gap-3">
                    <p className="Trending">Books</p>
                    <p>4 min read</p>
                  </div>

                  <div className="d-flex functionIcon">
                    <p>
                      <FaRegBookmark />
                    </p>
                    <p>
                      <BiDotsHorizontalRounded />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Content3  mt-4">
          <button className="access">Get unlimited access</button>
          <input className="search1" type="text" placeholder="Search" />
          <p
            style={{
              position: "absolute",
              marginTop: "-30px",
              paddingLeft: "5px",
            }}
          >
            <AiOutlineSearch />
          </p>

          <img
            style={{ borderRadius: "50%", margin: "30px 0" }}
            src="https://miro.medium.com/fit/c/88/88/0*zyHb8yqCDszgfGj3"
            alt=""
          />

          <p style={{ fontSize: "17px", fontWeight: "600" }}>Irtiza Hafiz</p>
          <p style={{ color: "#b1aeae", marginTop: "-15px", fontSize: "13px" }}>
            1.5k Followers
          </p>

          <p style={{ color: "#b1aeae", fontSize: "13px" }}>
            4x Top Writer. I write aout Tech, Personal Fonance, <br />
            Health & Lifestyle Design
          </p>
          <div className="d-flex gap-2" style={{ marginTop: "25px" }}>
            <button
              style={{
                width: "70px",
                fontWeight: "400",
                height: "35px",
                borderRadius: "30px",
                fontSize: "12px",
                border: "none",
              }}
            >
              Follow
            </button>
            <button
              style={{
                width: "35px",
                borderRadius: "50%",
                fontWeight: "400",
                height: "35px",
                border: "none",
              }}
            >
              <BiMessageAdd />
            </button>
          </div>

          <h4 style={{ color: "#e3e0e0", margin: "20px 0", fontSize: "15px" }}>
            More from medium
          </h4>

          <div className="writers">
            <div>
              <img
                className="img1"
                src="https://miro.medium.com/fit/c/24/24/1*1V8zE96CwGT_ImoqLmoZOQ.jpeg"
                alt="writerImg"
              />
              <span style={{ fontSize: "12px", paddingLeft: "15px" }}>
                Neeramitra Raddy in Publishous
              </span>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h5
                style={{ fontSize: "16px", color: "#d9d6d6", margin: "15px 0" }}
              >
                I've Watched 600+ Youtube <br />
                Channels so Far- These 6 Are <br />
                the Best
              </h5>

              <img
                style={{ height: "60px" }}
                src="https://miro.medium.com/focal/56/56/50/50/1*nZmN9YldcCJa2t0E8r2EIA.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="writers mt-2">
            <div>
              <img
                className="img1"
                src="https://miro.medium.com/fit/c/32/32/1*LagkZVOWSkjAJuzVJI6zSA.jpeg"
                alt="writerImg"
              />
              <span style={{ fontSize: "12px", paddingLeft: "15px" }}>
                Akshad Singi in Better Humans
              </span>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h5
                style={{ fontSize: "16px", color: "#d9d6d6", margin: "15px 0" }}
              >
                4Unsexy One-Minute Habits That <br /> Save Me 30+ Hours Every
                Week
              </h5>

              <img
                style={{ height: "60px" }}
                src="https://miro.medium.com/focal/56/56/50/50/1*2IjWavPYnLqdEHOkQ-w_QQ.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="writers mt-4">
            <div>
              <img
                className="img1"
                src="https://miro.medium.com/fit/c/24/24/1*-HRsnXCsoRUAg61Kc5OK_Q.jpeg"
                alt="writerImg"
              />
              <span style={{ fontSize: "12px", paddingLeft: "15px" }}>
                Ossiana Tepfenhart
              </span>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h5
                style={{ fontSize: "16px", color: "#d9d6d6", margin: "15px 0" }}
              >
                6 Things Thant Are Way Less <br /> Attractive Than People Assum{" "}
                <br />
                They Are
              </h5>

              <img
                style={{ height: "60px" }}
                src="https://miro.medium.com/focal/56/56/50/50/0*VU72l8utLkQVEwoj"
                alt=""
              />
            </div>
          </div>

          <div className="writers mt-4">
            <div>
              <img
                className="img1"
                src="https://miro.medium.com/fit/c/20/20/1*9e7erSQoCR3vjxtOZh28Jw.jpeg"
                alt="writerImg"
              />
              <span style={{ fontSize: "12px", paddingLeft: "15px" }}>
                Chris David... in In Fitness And In He...
              </span>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <h5
                style={{ fontSize: "16px", color: "#d9d6d6", margin: "15px 0" }}
              >
                9 Ways To Stop Looking & Feeling <br />
                Like Sh*t in Your 40s
              </h5>

              <img
                style={{ height: "60px" }}
                src="https://miro.medium.com/focal/56/56/50/50/1*9yk0vSHx-FGZq6CDaB-CDg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
