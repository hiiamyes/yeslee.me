import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import Style from "./style";

const BlogPage = (props) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.request({
        url: `http://localhost:1337/api/articles/${id}`,
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      });
      setData(data);
    })();
  }, []);
  if (!data) return <div>Loading...</div>;
  return (
    <Style>
      <div>{data.attributes.Title}</div>
      <ReactMarkdown className="content">
        {data.attributes.Content}
      </ReactMarkdown>
    </Style>
  );
};

export default BlogPage;
