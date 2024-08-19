import React from "react";
import "./Coverletter.css";

const Coverletter = () => {
  return (
    <div className="coverletter-page">
      <div className="coverletter-heading">
        <h1>Cover Letter</h1>
      </div>
      <div className="container">
        <div className="coverletter-content">
          <div className="coverletter-picture">
            <img src="CoverLetter.png"></img>
          </div>
          <div className="coverletter-text">
            <h1>Create Letter that Showcase your skills.</h1>
            <p>
              Craft a cover letter that highlights your skills, experience, and
              passion for the job you're applying for. A well-written cover
              letter can set you apart from other candidates and make a strong
              first impression.

            </p>
            <div className="create-letter-link">
                <a href="#">Create Cover Letter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coverletter;
