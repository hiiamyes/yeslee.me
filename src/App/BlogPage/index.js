import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Helmet from "react-helmet";
import FAIcon from "src/components/FAIcon";
import blogs from "./blogs";

import Style from "./style";

const title = "Blog | Yes";
const description = "Code . Outdoor";

const BlogPage = (props) => {
  return (
    <Style>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title}></meta>
        <meta property="og:url" content="https://yeslee.me/blog" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <div className="nav-bar">
        <div>
          <Link to="/" className="home">
            Yes
          </Link>
          <span> / Blog</span>
        </div>
        <a
          className="contact-link"
          href="https://medium.com/@hiiamyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FAIcon icon={["fab", "medium-m"]}></FAIcon>
        </a>
      </div>
      <br></br>
      <br></br>
      <div className="blogs">
        {blogs.map((blog) => {
          const [date, url, title] = blog;
          return (
            <div className="blog">
              <div className="date">{dayjs(date).format("YYYY-MM-DD")}</div>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
              {/* <div>{description}</div> */}
            </div>
          );
        })}
      </div>
    </Style>
  );
};

export default BlogPage;
