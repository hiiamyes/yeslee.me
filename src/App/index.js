import React from "react";
import Helmet from "react-helmet";
import Style from "./style";
import profile from "./profile.jpg";
import HomePage from "./HomePage";
import HundredPeaksPage from "./HundredPeaksPage";
import TrailPage from "./TrailPage";
import BlogPage from "src/App/BlogPage";
import BlogPage2 from "src/App/BlogPage2";
import BlogArticlePage from "src/App/BlogPage/BlogArticlePage";

// import PeakPage from "./PeakPage";
import { Switch, Route, Redirect } from "react-router-dom";

const title = "Yes";
const description = "Frontend Engineer in Taiwan";

const App = () => {
  return (
    <Style>
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
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
        <Route path="/blog-cms" exact>
          <BlogPage2 />
        </Route>
        <Route path="/blog/articles/:id" exact>
          <BlogArticlePage />
        </Route>
        <Route path="/100-peaks" exact>
          <HundredPeaksPage />
        </Route>
        <Route path="/trails/:name" exact>
          <TrailPage />
        </Route>
        <Redirect from="/trails" to="/trails/yangtou" />
      </Switch>
    </Style>
  );
};

export default App;
