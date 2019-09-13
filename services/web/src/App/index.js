import React from "react"
import Helmet from "react-helmet"
import Style from "./style"
import profile from "./profile.jpg"
import FAIcon from "../components/FAIcon"

const title = "Yes Lee (Tsung Yeh Lee)"
const description = "Frontend Engineer in Taiwan"

const App = () => {
  return (
    <Style className="app">
      <Helmet>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={title}></meta>
        <meta property="og:url" content={`https://yeslee.me`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={profile} />
        
      </Helmet>
      {process.env.NODE_ENV === "production" && (
        <Helmet>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-41378150-9"
          ></script>
          <script>
            {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-41378150-9');
`}
          </script>
        </Helmet>
      )}
      <img className="profile" src={profile} alt="profile" />
      <h1 className="title">Yes Lee</h1>
      <p>Frontend Engineer in Taiwan</p>
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
