import React from "react";
import { Link } from "react-router-dom";
import Style from "./style";
import Helmet from "react-helmet";
import cover from "./cover.jpg";

const peaks = [
  {
    name: "池有山",
    dates: ["2013-10-26", "2015-10-07", "2020-05-16"],
  },
  {
    name: "奇萊北峰",
    dates: ["2014-11-12", "2020-08-15"],
  },
  {
    name: "奇萊主峰",
    dates: ["2014-11-12", "2020-08-15"],
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
      "2022-07-14",
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
    dates: ["2015-06-13", "2018-11-11", "2023-03-11"],
  },
  {
    name: "玉山西峰",
    dates: ["2015-07-02", "2023-03-11"],
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
    dates: ["2015-10-08", "2020-05-17"],
  },
  {
    name: "西巒大山",
    dates: ["2016-04-03", "2022-12-24"],
  },
  {
    name: "郡大山",
    dates: ["2016-04-04", "2020-09-19"],
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
    dates: ["2017-04-09", "2020-04-19"],
  },
  {
    name: "南華山",
    dates: ["2017-04-09", "2020-04-19"],
  },
  {
    name: "審馬陣山",
    dates: ["2017-05-19", "2018-04-05", "2020-10-09"],
  },
  {
    name: "南湖北山",
    dates: ["2017-05-20", "2018-04-05", "2020-10-09"],
  },
  {
    name: "南湖大山",
    dates: ["2018-04-06", "2020-10-10"],
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
    dates: ["2020-03-21", "2022-09-17"],
  },
  {
    name: "屏風山",
    dates: ["2020-05-03", "2022-11-20"],
  },
  {
    name: "桃山",
    dates: ["2020-06-20"],
  },
  {
    name: "喀拉業山",
    dates: ["2020-06-21"],
  },
  {
    name: "志佳陽大山",
    dates: ["2020-07-25", "2021-02-28"],
  },
  {
    name: "南湖東峰",
    dates: ["2020-10-10"],
  },
  {
    name: "閂山",
    dates: ["2020-11-28"],
  },
  {
    name: "鈴鳴山",
    dates: ["2020-11-29"],
  },
  {
    name: "能高主峰",
    dates: ["2021-03-19"],
  },
  {
    name: "能高南峰",
    dates: ["2021-03-20"],
  },
  {
    name: "光頭山",
    dates: ["2021-03-20"],
  },
  {
    name: "白石山",
    dates: ["2021-03-21"],
  },
  {
    name: "安東軍山",
    dates: ["2021-03-21"],
  },
  {
    name: "白姑大山",
    dates: ["2022-05-27"],
  },
  {
    name: "火石山",
    dates: ["2022-07-15"],
  },
  {
    name: "頭鷹山",
    dates: ["2022-07-16"],
  },
  {
    name: "大雪山",
    dates: ["2022-07-16"],
  },
  {
    name: "玉山前峰",
    dates: ["2022-08-27"],
  },
  {
    name: "八通關山",
    dates: ["2023-03-19"],
  },
  {
    name: "秀姑巒山",
    dates: ["2023-03-20"],
  },
  {
    name: "大水窟山",
    dates: ["2023-03-20"],
  },
  {
    name: "庫哈諾辛山",
    dates: ["2023-04-29"],
  },
  {
    name: "塔關山",
    dates: ["2023-04-30"],
  },
  {
    name: "關山嶺山",
    dates: ["2023-04-30"],
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
