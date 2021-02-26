import React, { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import Helmet from "react-helmet";

import Style from "./style";

const title = "台鐵訂票小工具 | Yes";
const description = "方便的台鐵訂票小工具";

const TaiwanRailwayToolsPage = (props) => {
  const [startDate, setStartDate] = useState(null)
  return (
    <Style>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title}></meta>
        <meta property="og:url" content="https://yeslee.me/taiwan-railway-tools" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <div className="nav-bar">
        <div>
          <Link to="/" className="home">
            Yes
          </Link>
          <span> / 台鐵訂票小工具</span>
        </div>
        <div>
          <div>乘車日</div>
          <input type="date" onChange={e => {
            // console.log(e.target.value)
            /**
             * 非乘車當日訂票：
             * 乘車前四週（二十八天）開始預訂，即週一可預訂至四週之後的週一期間內之乘車票
             * 但每逢週五可多預訂二天至四週後之週日乘車票（即逢週五可預訂至四週後之週五、六、日之乘車票）。
             * 如因不可抗力、國定假日或特殊情事需調整開放時間，本局將另行公告。
             */
            const departureDate = dayjs(e.target.value)
            switch (departureDate.day()) {
              case 0: // Sunday
                setStartDate(departureDate.subtract(2, 'day').subtract(4, 'week'))
                break;
              case 6: // Saturday
                setStartDate(departureDate.subtract(1, 'day').subtract(4, 'week'))
                break;
              default:
                setStartDate(departureDate.subtract(4, 'week'))
                break;
            }
          }} />
          <a href="https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC12/view10">Reference</a>
          <div>開放訂票時間日期</div>
          <div>{startDate && startDate.format('YYYY-MM-DD HH:mm:ss')}</div>
          <button>加入行事曆</button>
        </div>
      </div>

    </Style>
  );
};

export default TaiwanRailwayToolsPage;
