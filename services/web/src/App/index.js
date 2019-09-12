import React from "react"
import Helmet from "react-helmet"
import Style from "./style"
import profile from "./profile.jpg"
import FAIcon from "../components/FAIcon"

const App = () => {
  return (
    <Style className="app">
      <Helmet>
        <title>Yes Lee</title>
        {/* <meta charset="utf-8" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="%PUBLIC_URL%/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="%PUBLIC_URL%/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="%PUBLIC_URL%/favicon-16x16.png"
        />
        <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" /> */}
      </Helmet>
      {process.env.NODE_ENV === "production" && (
        <Helmet>
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-41378150-12"
          ></script>
          <script>
            {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-41378150-12');
`}
          </script> */}
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
