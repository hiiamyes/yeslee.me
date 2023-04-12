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
        url: `${process.env.STRAPI_BASE_URL}/api/articles/${id}`,
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      });
      setData(data);
    })();
  }, []);
  // if (!data) return <div>Loading...</div>;
  if (!data) return null;
  return (
    <Style>
      <div>{data.attributes.title}</div>
      <ReactMarkdown className="content">
        {data.attributes.content}
      </ReactMarkdown>
    </Style>
  );
};

export default BlogPage;
