import React from "react";
import { Link } from "react-router-dom";
import FAIcon from "src/components/FAIcon";
import profile from "src/App/profile.jpg";
import Style from "./style";

const App = () => {
  return (
    <Style>
      <img className="profile" src={profile} alt="profile" />
      <h1 className="title">Yes Lee</h1>
      <p>Frontend Engineer in Taiwan</p>
      <p>
        <Link to="/blog">Blog</Link>
        {`: My blog.`}
      </p>
      <p>
        <Link to="/blog-cms">Blog-CMS</Link>
        {`: My blog.`}
      </p>
      <p>
        <a href="https://paaaack.com" target="_blank" rel="noopener noreferrer">
          Paaaack
        </a>
        {`: A website for personal asset management.`}
      </p>
      <p>
        <a
          href="https://hiiiike.yeslee.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hiiiike
        </a>
        {`: Tools for hiking.`}
      </p>
      {/* <p>
        <a
          href="https://pangolin.yeslee.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pangolin
        </a>
        {`: A website for querying weather history.`}
      </p> */}
      <p>
        <a
          href="https://hiking-itinerary.hiiamyes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hiking Itinerary Generator
        </a>
        {`: A website for hikers to plan their mountain hike itinerary in Taiwan.`}
      </p>
      <p>
        <Link to="/100-peaks">100 Peaks</Link>
        {`: 100 Peaks of Taiwan.`}
      </p>
      <p>
        <Link to="/trails">Trails</Link>
        {`: Hiking trails in Taiwan.`}
      </p>
      <p>
        <a
          href="https://frontend-cookbook.yeslee.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Cookbook
        </a>
        {`: A frontend UI components cookbook powered by React and Storybook.`}
      </p>
      <div>
        <a
          className="contact-link"
          href="https://www.instagram.com/yeeeees.lee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "instagram"]}></FAIcon>
        </a>
        <a
          className="contact-link"
          href="https://www.facebook.com/profile.php?id=100000254874042"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "facebook"]}></FAIcon>
        </a>
        <a
          className="contact-link"
          href="https://line.me/ti/p/OMLy1Jb-tC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "line"]}></FAIcon>
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/tsung-yeh-lee-3a558172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "linkedin"]}></FAIcon>
        </a>
        <a
          className="contact-link"
          href="https://github.com/hiiamyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "github"]}></FAIcon>
        </a>
        <a
          className="contact-link"
          href="https://medium.com/@hiiamyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "medium-m"]}></FAIcon>
        </a>
        <a
          className="contact-link"
          href="https://www.youtube.com/playlist?list=PL0hFmSBG9QBEaBbQNdjdXoj3mo0TXJeZ9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "youtube"]}></FAIcon>
        </a>
      </div>
    </Style>
  );
};

export default App;
