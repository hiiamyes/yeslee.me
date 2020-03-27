import React from "react";
import { Link } from "react-router-dom";
import Style from "./style";
import Helmet from "react-helmet";
import cover from "./cover.jpg";

const peaks = [
  {
    name: "池有山",
    dates: ["2013-10-26", "2015-10-07"],
  },
  {
    name: "奇萊北峰",
    dates: ["2014-11-12"],
  },
  {
    name: "奇萊主峰",
    dates: ["2014-11-12"],
  },
  {
    name: "北大武",
    dates: ["2015-04-09"],
  },
  {
    name: "雪山東峰",
    dates: ["2015-05-26", "2015-08-25", "2016-11-20", "2019-02-27"],
  },
  {
    name: "雪山主峰",
    dates: [
      "2015-05-27",
      "2015-06-16",
      "2016-05-08",
      "2016-11-19",
      "2019-02-28",
    ],
  },
  {
    name: "合歡東峰",
    dates: ["2015-06-13"],
  },
  {
    name: "合歡主峰",
    dates: ["2015-06-13"],
  },
  {
    name: "合歡北峰",
    dates: ["2015-06-13", "2018-11-11"],
  },
  {
    name: "玉山西峰",
    dates: ["2015-07-02"],
  },
  {
    name: "玉山主峰",
    dates: ["2015-07-03", "2017-06-24", "2018-07-30"],
  },
  {
    name: "三叉山",
    dates: ["2015-08-04"],
  },
  {
    name: "品田山",
    dates: ["2015-10-08"],
  },
  {
    name: "西巒大山",
    dates: ["2016-04-03"],
  },
  {
    name: "郡大山",
    dates: ["2016-04-04"],
  },
  {
    name: "大霸尖山",
    dates: ["2016-12-05"],
  },
  {
    name: "小霸尖山",
    dates: ["2016-12-05"],
  },
  {
    name: "奇萊南峰",
    dates: ["2017-04-09"],
  },
  {
    name: "南華山",
    dates: ["2017-04-09"],
  },
  {
    name: "審馬陣山",
    dates: ["2017-05-19", "2018-04-05"],
  },
  {
    name: "南湖北山",
    dates: ["2017-05-20", "2018-04-05"],
  },
  {
    name: "南湖大山",
    dates: ["2018-04-06"],
  },
  {
    name: "南湖南峰",
    dates: ["2018-04-06"],
  },
  {
    name: "玉山北峰",
    dates: ["2018-07-30"],
  },
  {
    name: "雪山北峰",
    dates: ["2019-03-01"],
  },
  {
    name: "合歡西峰",
    dates: ["2019-10-12", "2019-12-01"],
  },
  {
    name: "畢祿山",
    dates: ["2019-12-14"],
  },
  {
    name: "羊頭山",
    dates: ["2020-03-21"],
  },
];

const HundredPeaksPage = () => {
  const title = `Yes - ${peaks.length} / 100 Peaks`;
  const description = title;
  return (
    <Style>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title}></meta>
        <meta property="og:url" content="https://yeslee.me/100-peaks" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={cover} />
      </Helmet>
      <div className="nav-bar">
        <Link to="/" className="home">
          Yes
        </Link>
        <div className="menus">
          <Link to="/100-peaks">100 Peaks</Link>
          <Link to="/trails">Trails</Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="cover">
        <img src={cover} alt="yes"></img>
      </div>
      <br></br>
      <div className="title">
        <div>百岳</div>
        <div>{`${peaks.length} / 100 Peaks`}</div>
      </div>
      <br></br>
      <div className="peaks">
        {peaks.map((peak) => {
          const { name, dates = [] } = peak;
          return (
            <div className="peak">
              <div>{name}</div>
              <div>{dates.join(", ")}</div>
            </div>
          );
        })}
      </div>
    </Style>
  );
};

export default HundredPeaksPage;
