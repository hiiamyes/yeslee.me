import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Helmet from "react-helmet";
import FAIcon from "src/components/FAIcon";

import Style from "./style";

const title = "Blog | Yes";
const description = "Code . Outdoor";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { data: articles },
      } = await axios.request({
        url: `${process.env.STRAPI_BASE_URL}/api/articles`,
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      });
      setArticles(articles);
    })();
  }, []);

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
      <div className="blogs">
        {articles.map((article) => {
          const {
            id,
            attributes: { publishedAt, title },
          } = article;
          return (
            <div className="blog">
              <div className="date">
                {dayjs(publishedAt).format("YYYY-MM-DD")}
              </div>
              <Link to={`/blog/articles/${id}`}>{title}</Link>
            </div>
          );
        })}
      </div>
    </Style>
  );
};

export default BlogPage;
