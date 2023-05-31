import React from "react";
import Nav from './Nav'

function Home() {
  return (
    <>
      <Nav/>
      <div className="homeContainer">
        <div className="homeContent1">
          <h5>Stay curious.</h5>
          <p>
            Discover stories, thinking and expertise <br /> from writers on any
            topic.
          </p>
          <button className="btnStartReading">Start reading</button>
        </div>
        <div className="homeContent2">
          <h5>Just one small positive thought in the morning </h5>
          <h5>can change your whole day. </h5>
        </div>
      </div>
      {/* Section */}
      <div className="homeSection">
        <div className=" d-flex">
          <h5>01</h5>
          <div className="homeSection1">
            <div className="homeTitle">
              <img
                src="https://miro.medium.com/fit/c/20/20/0*IhFWxnZvjY6BvYeN"
                alt=""
              />
              <span>Dave Troy</span>
            </div>

            <p>No, Elon and Jack are not "competitors."</p>
            <p>They're collaborating.</p>
          </div>
        </div>

        <div className="homeSection1 d-flex">
          <h5>02</h5>
          <div className="homeSection1">
            <div className="homeTitle">
              <img
                src="https://miro.medium.com/fit/c/20/20/0*ohRxgNPUyuFod_kY.jpeg"
                alt=""
              />
              <span>Brad Gerstner @altcap</span>
            </div>

            <p>Time to Get Fit — an Open Letter from</p>
            <p>Altimeter to Mark Zuckerberg (and the...</p>
          </div>
        </div>

        <div className="homeSection1 d-flex">
          <h5>03</h5>
          <div className="homeSection1">
            <div className="homeTitle">
              <img
                src="https://miro.medium.com/fit/c/20/20/1*0oIJdWxqjL9Y6P0B0J6Syw.jpeg"
                alt=""
              />
              <span>Tom Cooper</span>
            </div>

            <p>Ukraine War, 29 October, 2022: Q&A</p>
            <p>They're collaborating.</p>
          </div>
        </div>

        <div className="homeSection1 d-flex">
          <h5>04</h5>
          <div className="homeSection1">
            <div className="homeTitle">
              <img
                src="https://miro.medium.com/fit/c/40/40/1*5D9oYBd58pyjMkV_5-zXXQ.jpeg"
                alt=""
              />
              <span>Simon Holdorf in Level Up Coding</span>
            </div>

            <p>10 Must-Read Books for Software</p>
            <p>Engineers</p>
          </div>
        </div>

        <div className="homeSection1 d-flex">
          <h5>05</h5>
          <div className="homeSection1">
            <div className="homeTitle">
              <img
                src="https://miro.medium.com/fit/c/20/20/0*IhFWxnZvjY6BvYeN"
                alt=""
              />
              <span>Tom Cooper</span>
            </div>

            <p>Ukrain war 29,october 2022: Q&A</p>
            <p>They're collaborating.</p>
          </div>
        </div>

        <div className="homeSection1 d-flex">
          <h5>06</h5>
          <div className="homeSection1">
            <div className="homeTitle">
              <img
                src="https://miro.medium.com/fit/c/40/40/1*CJe3891yB1A1mzMdqemkdg.jpeg"
                alt=""
              />
              <span>Natassha Selvaraj in Towards Data Science</span>
            </div>

            <p>Meet Julia: The Future of Data Science</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
