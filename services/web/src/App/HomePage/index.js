import React from "react"
import Style from "./style"
import profile from "../profile.jpg"
import FAIcon from "../../components/FAIcon"

const App = () => {
  return (
    <Style>
      <img className="profile" src={profile} alt="profile" />
      <h1 className="title">Yes Lee</h1>
      <p>Frontend Engineer in Taiwan</p>
      <p>
        <a href="https://paaaack.com" target="_blank" rel="noopener noreferrer">
          Paaaack
        </a>
        {`: A website for personal asset management.`}
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
        <a href="/100-peaks" target="_blank" rel="noopener noreferrer">
          100 Peaks
        </a>
        {`: Yes's 100 Peaks.`}
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
          href="https://www.facebook.com/profile.php?id=100000254874042"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "facebook"]}></FAIcon>
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
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/tsung-yeh-lee-3a558172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "linkedin"]}></FAIcon>
        </a>
      </div>
    </Style>
  )
}

export default App
