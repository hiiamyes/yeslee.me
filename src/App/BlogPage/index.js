import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import blogs from "./blogs";

import Style from "./style";

const title = "Blog | Yes";
const description = "Programming x Outdoor Activities";

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
      </div>
      <br></br>
      <br></br>
      <div>
        {blogs.map((blog) => {
          return (
            <div>
              <span>{blog.date}</span>{" "}
              <a href={blog.url} target="_blank">
                {blog.title}
              </a>
            </div>
          );
        })}
      </div>
    </Style>
  );
};

export default BlogPage;
