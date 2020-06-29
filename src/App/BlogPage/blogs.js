// blog = [title, url, date]
const blogs = [
  [
    "Jun 3, 2020",
    "https://medium.com/@hiiamyes/use-git-submodule-to-publish-a-react-component-library-frontend-cookbook-6-f010c2cf358",
    `Use Git Submodule to Publish a React Component Library | Frontend Cookbook 6`,
    "準備一份 release.sh script，先進行打包後再把需要的檔案 cp 到 release submodule，commit 後再 push，release branch 就成為一個可以被當作 package 使用的 branch 啦。",
  ],
  [
    "Apr 5, 2020",
    "https://medium.com/@hiiamyes/tesseract-js-meets-national-park-captcha-hiiiike-265196ecb702",
    `當 tesseract.js 遇上國家公園入園申請驗證碼 (captcha)  | Hiiiike`,
    "結果如下，成功率 20%，好低哈哈哈，可能是因為驗證碼上的躁點比較多。雖然 20% 也是堪用，因為可以靠 retry 來達成自動化，但下次可以再加個預處理試試看，說不定成功率可以大幅上升哈哈。",
  ],
  [
    "Mar 12, 2020",
    "https://medium.com/@hiiamyes/2019-snowboard-course-2-3-4ff68ac1340d",
    `2019 Snowboard Course . 2/3`,
    "下午的課程一樣收穫滿滿，第一次嘗試 Switch，也第一次知道原來滑行不一定要 up-down！",
  ],
  [
    "Mar 6, 2020",
    "https://medium.com/@hiiamyes/nginx-plus-docker-as-a-cors-proxy-backend-cookbook-6-803a94ced66d",
    `Nginx plus Docker as a CORS proxy | Backend Cookbook 6`,
    `成功了～～ 我們從不同 Origin 的 Browser，用 Fetch 透過 Nginx 打到一個沒有開 CORS 的 API 了～～可喜可賀，可喜可賀。`,
  ],
  [
    "Feb 8, 2020",
    "https://medium.com/@hiiamyes/mavic-pro-drone-registration-taiwan-9aa58533161b",
    `Mavic Pro 空拍機註冊 (台灣) (待續)`,
    `根據 交通部的公告，從 2020–03–31 開始，遙控無人機管理規則 會開始實施，也就是空拍機要納管啦，而我手上就有一台常帶上山飛的 Mavic Pro，為了之後不被罰錢 (無誤)，該遵守的法規還是得遵守一下，而法規的其中一項就是空拍機的註冊。`,
  ],
  [
    "Feb 2, 2020",
    "https://medium.com/@hiiamyes/2020-snowboarding-expense-nozawa-myoko-b47147573557",
    `2020 雪季 . 12 滑 7 花費 . 野澤 . 妙高`,
    `第四個雪季，在一般雪道上還算游刃有餘後，覺得開始可以到不同地方探險了，於是先排了野澤溫泉和妙高高原，妙高很早就看上了一間不錯的 hostel (Myoko Powder Hostel)，處理起來沒啥問題，倒是野澤找不太到 hostel…`,
  ],
  [
    "Jan 17, 2020",
    "https://medium.com/@hiiamyes/narita-airport-to-nozawa-onsen-shuttle-bus-2020-snow-season-2db72045c7b0",
    `2020 雪季 . 機場巴士 . 成田機場 to 野澤溫泉`,
    `之前 3 個雪季不是坐新幹線往返雪場就是到新宿坐巴士，這次覺得沒有特別想再進東京新宿逛，所以就改搭機場巴士比較一下。`,
  ],
  [
    "Dec 31, 2019",
    "https://medium.com/@hiiamyes/quarterly-investment-routine-f5abe566bb2a",
    `Quarterly Investment Routine`,
    `回想起來我是 2015 年底進入職場的，然後直到 2018 年初才開始進行投資，理由很單純，就是從數據上來看，把部分儲蓄拿來做點投資是件有 C/P 值的事，所以就開始碰碰看了。`,
  ],
  [
    "Dec 10, 2019",
    "https://medium.com/@hiiamyes/2020-雪季前-surf-snow-買日本雪場早鳥電子雪票-スマリフ-smart-lift-27c59fc2d763",
    `2020 雪季前 . SURF&SNOW 買日本雪場早鳥電子雪票 . スマリフ . Smart Lift`,
    `SURF&SNOW 是日本的滑雪網站，我是去年雪季發現它的，因為上面會賣便宜的早鳥電子雪票 スマリフ (Smart Lift)，這對於懶得找方法買實體票的我來說非常適合！所以去年我就在上面買了不少白馬和湯澤地區的票，也真的都有便宜到，比日本民宿賣的還便宜一點這樣。`,
  ],
  [
    "Nov 17, 2019",
    "https://medium.com/@hiiamyes/draw-elevation-profile-based-on-osm-ways-frontend-cookbook-5-fa5d889572a3",
    `Draw Elevation Profile Based On OSM Ways | Frontend Cookbook 5`,
    `在比較登山路線難易度的時候，高度圖是個常用的指標，在我過去的經驗裡，取得高度圖最快的作法就是上網 google 別人已經做好的圖，不過這樣有個缺點，就是別人做好的圖不一定會完全和你的行程相同，以嘉明湖為例有些人會先上向陽山，有些人會後上，這樣子畫出來的高度圖就會有些微不同。`,
  ],
  [
    "Nov 5, 2019",
    "https://medium.com/@hiiamyes/user-authentication-with-node-js-jwt-and-google-oauth-2-0-backend-cookbook-5-e54f40dce0e5",
    `User Authentication with Node.js, JWT and Google OAuth 2.0 | Backend Cookbook 5`,
    `User Authentication（Log in、Sign up、Log out）對 Stateful Application 來說是個必要的功能，而目前市面上的 App 幾乎都有提供 Log in with Google 這樣子的 OAuth-based…`,
  ],
  [
    "Oct 26, 2019",

    "https://medium.com/@hiiamyes/feb-2019-my-3rd-snowboard-lesson-part-1-e2a90778d6d8",
    `Feb. 2019 My 3rd Snowboard Lesson Part 1`,

    `我滿喜歡滑雪這項運動的，但越滑越多後也會發現這真的是個有一定風險的運動，一個摔、一個扭、一個撞，一不小心是都有可能受比較嚴重的傷的，所以知道該怎麼正確地滑、怎麼掌握細節來讓自己能滑的安全對我來說就很重要，撇開想滑遍各種地形的企圖心，安全就是我為什麼會想上課的原因。`,
  ],
  [
    "Oct 15, 2019",

    "https://medium.com/@hiiamyes/bundle-publish-and-use-a-react-component-library-frontend-cookbook-4-8e7792b187e8",
    `Bundle, Publish and Use A React Component Library | Frontend Cookbook 4`,

    `最近在試著建一個 React Component Library，一來是要當作 Design System 用，方便把自製的 Component 統一管理，二來則是想要有 Host 一個 Library 的經驗。`,
  ],
  [
    "Oct 8, 2019",

    "https://medium.com/@hiiamyes/absolute-paths-import-frontend-cookbook-3-2db1c8c498e9",
    `Absolute paths import | Frontend Cookbook 3`,

    `Refactor Folder Structure 時會迷失在 ../../../../ 中`,
  ],
  [
    "Sep 18, 2019",

    "https://medium.com/@hiiamyes/customize-your-bash-prompt-ps1-5aae9e6f788e",
    `Customize Your Bash Prompt (PS1)`,

    `前幾天我 Terminal 上的 git-completion 壞了，之前都是無腦按照別人的 Tutorial 安裝，這次在修的同時多研究了一點別人的 Script，才發現原來 Bash Prompt 很容易地就能調整成自己想要的樣子！`,
  ],
  [
    "Sep 10, 2019",

    "https://medium.com/@hiiamyes/backend-cookbook-4-restore-postgresql-database-992983a2b519",
    `Backend Cookbook 4: Restore PostgreSQL Database`,

    `有了 Backup 之後，當意外發生時就有辦法做 Restore 的動作了。由於大部分的 Infrastructure 都在實作 Backup 時都已經建立好了，所以基於其上要再來做 Restore 時就變得很輕鬆。`,
  ],
  [
    "Sep 8, 2019",

    "https://medium.com/@hiiamyes/backup-dockerized-postgresql-database-to-aws-s3-1729c566cdf0",
    `Regularly Backup Dockerized PostgreSQL Database to AWS S3`,

    `曾經有兩次不小心把 Side Project 的 Production Database 弄掉，一次是 Linode 被更新，一次是對 Docker 的 Volume 不熟，所以覺得應該從現在開始有個自動備份。`,
  ],
  [
    "Sep 2, 2019",

    "https://medium.com/@hiiamyes/2020-hokkaido-snowboarding-flight-tpe-to-cts-195e3ec1c0f3",
    `2020 北海道滑雪機票: 桃園 > 札幌`,

    `今年 7 月初就排好了明年 228 連假要去 Niseko 滑，而因為先跟了想去住的 Hostel（Tabi-tsumugi Backpackers）的老闆說好了 8 月底會確認訂房，所以最後沒等到樂桃直飛札幌開賣（8/28）就先買了華航（去轉機回直飛）。`,
  ],
  [
    "Aug 21, 2019",

    "https://medium.com/@hiiamyes/backend-cookbook-2-build-a-weather-bot-with-slack-and-glitch-f31eb83494d7",
    `Backend Cookbook 2: Build A Weather Bot with Slack and Glitch`,

    `平常上下班、旅行和爬山前我都會看氣象局的 定量降水預報，剛好最近有機會玩玩 Slack Bot，就想說順手做一個 Weather Bot。`,
  ],
  [
    "Aug 19, 2019",

    "https://medium.com/@hiiamyes/bill-archiver-my-first-zapier-zap-d6a426de18e2",
    `Bill Archiver: My First Zapier Zap`,

    `一直以來我的信用卡費都是自動扣繳，收電子帳單備查，用 Mac 的 Mail 做管理，缺點是換到不同的 mail client 上時就看不到那些 filter 了。`,
  ],
  [
    "Jun 9, 2019",

    "https://medium.com/@hiiamyes/backend-cookbook-1-uploading-aws-s3-objects-using-presigned-urls-1d134e9cbeef",
    `Backend Cookbook 1: Uploading AWS S3 Objects Using Presigned URLs`,

    `上傳照片或檔案是應用程式中基本的功能之一，如果後端是用 Firebase 類的服務的話那是有現成的 API 和 Storage 可以用，但如果要自己從頭做起的話 AWS S3 就是一個常見的選擇，而透過 presigned url 上傳是其中一種方式。`,
  ],
  [
    "Jun 2, 2019",

    "https://medium.com/@hiiamyes/frontend-cookbook-2-timezone-name-select-v1-0-92f866cff850",
    `Frontend Cookbook 2: TimezoneNameSelect v1.0`,

    `Timezone 是 Application 中的細節之一，例如一個 cronjob 要在每天 08:00 執行，這個 08:00 究竟是哪個時區？沒有處理好線上就很容易爆炸。`,
  ],
  [
    "May 27, 2019",

    "https://medium.com/@hiiamyes/how-to-do-database-migration-with-docker-58d4ccefb58c",
    `How to do Database Migration with Docker`,

    `光有一個 database 是不夠的，application 通常都會有頻繁的 database migration 需求，所以這篇會紀錄我是怎麼用 Docker 做 database migration 的。`,
  ],
  [
    "May 18, 2019",

    "https://medium.com/@hiiamyes/github-api-a-shell-script-to-get-latest-tag-on-a-branch-6aa9c737c260",
    `GitHub API: A Shell Script to Get Latest Tag on a Branch`,

    `最近在做 Automation Testing，過程中會需要從 GitHub 上拿到某 branch 最新的 tag name，所以做了個這樣的練習。`,
  ],
  [
    "May 12, 2019",

    "https://medium.com/@hiiamyes/ci-cd-2-add-ci-cd-for-a-node-js-api-server-with-docker-circleci-and-linode-4d6ac449098b",
    `CI/CD 2: Add CI/CD for a Node.js API Server with Docker, CircleCI and Linode`,

    `之前在 CI/CD 1: Add CI/CD for side project website 裡做過了 Frontend 的 CI/CD，這次則要來做 Backend 的。`,
  ],
  [
    "Apr 9, 2019",

    "https://medium.com/@hiiamyes/ski-resort-5-echigo-yuzawa-ishiuchi-maruyama-8d416f7cba78",
    `日本滑雪 . 雪場 #5 . 越後湯澤 . 石打丸山 . Ishiuchi Maruyama`,

    `2019 雪季的第一天去了舞子高原，第二天去了也在越後湯沢，幾個朋友都很推的石打丸山，1/30 星期三，有點熱的大晴天。`,
  ],
  [
    "Apr 6, 2019",

    "https://medium.com/@hiiamyes/data-visualization-2-d3-line-chart-26be6773216e",
    `Data Visualization 2: 用 D3.js 畫出雨量折線圖`,

    `透過 Data Visualization 1: 取得歷史雨量資料，我們有了一個能拿到歷史雨量資料的 GraphQL API Server，下一步就是做一個前端網站來將資料視覺化成圖表了。`,
  ],
  [
    "Mar 30, 2019",

    "https://medium.com/@hiiamyes/data-visualization-1-fetch-history-rainfall-data-304dd69e0b6c",
    `Data Visualization 1: 取得歷史雨量資料`,

    `用真資料來做 data visualization 總是比較有趣的，加上一直以來都沒找到好查歷史雨量的地方，所以就決定練習這個主題了。`,
  ],
  [
    "Mar 6, 2019",

    "https://medium.com/@hiiamyes/run-postgresql-in-docker-c12ff64a80c6",
    `Run PostgreSQL in Docker`,

    `因為每次要在不同 OS 上 install/uninstall PostgreSQL 的時候方法可能都不太一樣有點麻煩，所以想說練習一下用 Docker，這樣在不同 OS 上就都可以用同樣的方法把 PostgreSQL 跑起來了。`,
  ],
  [
    "Feb 19, 2019",

    "https://medium.com/@hiiamyes/ski-resort-4-echigo-yuzawa-maiko-kogen-567400fb6cbc",
    `日本滑雪 . 雪場 #4 . 越後湯澤 . 舞子高原 . Maiko Kogen`,

    `早就聽說越後湯澤附近有很多雪場，車站到雪場之間都有免費接駁車，雪票、食物和附近住宿又相對便宜，是個 CP 值不錯的地方，因此今年雪季第一站就跑來這，並挑了個雪道圖看起來不錯的舞子高原當作開季雪場！`,
  ],
  [
    "Feb 13, 2019",

    "https://medium.com/@hiiamyes/2019-snowboarding-expenses-44b37dbbda59",
    `2019 滑雪 .  17 滑 12 花費 . 越後湯澤 . 苗場 . 白馬`,

    `這是我第三個滑雪雪季，因為在季前把所有裝備都買齊了，想說要扛裝備出國也是滿累的所以這季就只排了這趟，但把天數拉長。`,
  ],
  [
    "Jan 29, 2019",

    "https://medium.com/@hiiamyes/snowboarding-number-1-insurance-60ecd051288",
    `滑雪 #1 保險`,

    `因為刷信用卡買機票附的旅平險有效期間只有搭飛機的過程中，而且也沒有不便險，所以出國時我都會再多保個有含不便險的旅平險。`,
  ],
  [
    "Jan 12, 2019",

    "https://medium.com/@hiiamyes/docker-postgresql-ed41b6f369a",
    `Docker + PostgreSQL`,

    `Different OS, same docker image, same docker command.`,
  ],
  [
    "Nov 27, 2018",
    "https://medium.com/@hiiamyes/snowboard-waxing-2df942da138e",
    `Snowboard Waxing . 雪板打蠟`,
    `可以這樣幫自己要用的板子上蠟感覺就很棒，就像羽球拍要自己纏握把布一樣啊！`,
  ],
  [
    "Nov 4, 2018",
    "https://medium.com/@hiiamyes/movie-shoplifters-26161016ef30",
    `電影 . 小偷家族 . Shoplifters`,
    `剛好發現二輪電影院晚上有這部，就跑去看了。`,
  ],
  [
    "Sep 25, 2018",
    "https://medium.com/@hiiamyes/surfing-5-surf-forecase-wushi-harbor-yilan-taiwan-5f3330dc9bea",
    `衝浪日誌 #5 . 浪況預報 . 烏石北提 . 宜蘭`,
    `鑑於上一衝只有 0.3 m 的浪真的有點小，所以這次出發前有特別 google 了一下別人都是怎麼看浪況預報的。`,
  ],
  [
    "Sep 9, 2018",
    "https://medium.com/@hiiamyes/surfing-4-wushi-harbor-yilan-taiwan-c3a25d940e97",
    `衝浪日誌 #4 . 宜蘭烏石港`,
    `出門前看預報，烏石這天的浪高只有 0.3m，風速忘了看，結果果然是個風平浪靜的日子呢。`,
  ],
  [
    "Sep 1, 2018",
    "https://medium.com/@hiiamyes/cooking-frontend-image-uploader-upload-image-to-s3-through-aws-javascript-sdk-e5a1f2793318",
    `Cooking Frontend . Image Uploader . Upload Image to S3 through AWS Javascript SDK`,
    `上傳照片是軟體服務裡很常見的一種功能，做法也百百種，而利用 AWS S3 的空間和 SDK 來實作是很常見的做法，這裡我們就是要用 AWS Javascript SDK 來實作從 Browser 直接將照片上傳到 AWS S3。`,
  ],
  [
    "Aug 20, 2018",
    "https://medium.com/@hiiamyes/e-board-taiwan-website-release-and-tutorial-c69a6cc45eeb",
    `選舉看板 . 上線公告 . 使用說明`,
    `路上的選舉看板越來越多，選舉的季節又到了，於是這次開始好奇，究竟自己選區裡的候選人們都張貼了多少看板呢？`,
  ],
  [
    "Aug 19, 2018",
    "https://medium.com/@hiiamyes/mountain-yushan-north-peak-north-north-peak-3-days-2-nights-itinerary-food-plan-expense-a5261d0e7686",
    `玉山北峰北北峰 . 3 天 2 夜 . 行程 . 糧食計畫 . 花費`,
    `以後還要繼續吃尾西的乾燥飯！`,
  ],
  [
    "Aug 18, 2018",
    "https://medium.com/@hiiamyes/upgrade-a-react-project-from-webpack-3-to-webpack-4-7b53b715a38",
    `Upgrade a React Project from Webpack 3 to Webpack 4`,
    `Webpack 4 早在今年 2 月就 release 了，不過一直沒有親手升級過，直到最近手邊有個用 webpack 3 的 project 穩定了下來，因此才有機會試試！會想升級的原因主要是想看 build time 會變快多少，至於其他 feature…`,
  ],
  [
    "Aug 5, 2018",
    "https://medium.com/@hiiamyes/ski-resort-3-hakuba-tsugaike-e496b7661a55",
    `日本滑雪 . 雪場#3 . 栂池高原 . Hakuba Tsugaike Ski Resort`,
    `栂池高原，我在日本滑過的第三個雪場，應該也是滑了最多紅線的一天。`,
  ],
  [
    "Jul 31, 2018",
    "https://medium.com/@hiiamyes/bose-soundlink-mini-ii-battery-indicator-red-can-not-charge-b7f6c16d0c7e",
    `Bose . SoundLink Mini II . 電池指示燈紅燈 . 無法充電`,
    `根據官網的 Troubleshooting，把 Bose SoundLink Mini II 設定成 運送模式 後，再重新接上電源可以了，電池指示燈會從紅燈變成閃爍黃燈，按了會有反應！`,
  ],
  [
    "Jul 26, 2018",
    "https://medium.com/@hiiamyes/ski-resort-2-hakuba-iwatake-6c95045911c4",
    `日本滑雪 . 雪場#2 . 白馬岩岳 . Hakuba Iwatake Ski Resort`,
    `岩岳是我在日本滑過的第二個雪場，也是今年年初滑雪時最喜歡的雪場。`,
  ],
  [
    "Apr 16, 2018",
    "https://medium.com/@hiiamyes/add-ci-cd-for-side-project-website-179bf805da39",
    `CI/CD 1: Add CI/CD for side project website`,
    `一直以來 Side Project 的 Website (React-Based) 我都是 deploy 到 Linode 上的，由於沒有做 CI/CD，所以每次不是 ssh 進 Linode 做 git pull + build，就是在 local 做 build + scp…`,
  ],
  [
    "Apr 14, 2018",
    "https://medium.com/@hiiamyes/mt-nanhu-all-peaks-trail-record-db89d64c4d24",
    `南湖群峰 5 天 5 夜紀錄 - 行程、公裝公糧、花費`,
    `這是我第一次開 + 走 5 天 4 夜的行程，在體力退步但卻背了更多東西的情況下簡直累到不要不要，還好 Day 4 天氣不好可以在圈谷耍廢一整天 (?)。`,
  ],
  [
    "Mar 25, 2018",
    "https://medium.com/@hiiamyes/ks-house-hakuba-alps-2018-snowboarding-accommodation-14cfc457a8d2",
    `K’s House Hakuba Alps - 2018 白馬滑雪。住宿`,
    `在安排 17 年滑雪的時候就注意到這間 Hostel 了，但後來沒有去住，反而是在 17 年中爬富士山的時後跑去試住了同集團在河口湖旁的 K’s House…`,
  ],
  [
    "Mar 9, 2018",
    "https://medium.com/@hiiamyes/conference-note-mountaineering-france-c9a6d1ba336d",
    `聽講座筆記 - 法國登山旅遊相關法規及山林管理制度`,
    `很久沒有聽一場講座過程中幾乎沒分心甚至筆記做好做滿了，前天臨時看到這個活動，又看到講者有 20 年的 IT 背景，立馬就報名了。（對我就是被 IT 背景這點吸引到的ＸＤ）。`,
  ],
  [
    "Mar 3, 2018",
    "https://medium.com/@hiiamyes/prerender-io-for-handling-sharing-of-your-react-spa-b777e19695be",
    `Prerender.io for handling SHARING of your React SPA`,
    `用 React 寫 SPA (Single Page Application) 的開發體驗很棒，但用這樣的方式寫了幾個 to-Customer 的 Side Project 後…`,
  ],
  [
    "Feb 27, 2018",
    "https://medium.com/@hiiamyes/leaflet-featuregroup-bounds-operation-for-showing-all-markers-on-the-map-5c88301cbb49",
    `[Leaflet] FeatureGroup - bounds operation for showing all markers on the map`,
    `由於每份行程會包含的地圖範圍並不同（也就是呈現出地圖上所有 marker 所需要的 center 和 zoom 並不同），所以 fixed center & zoom 就無法滿足行程製作上的需求…`,
  ],
  [
    "Feb 20, 2018",
    "https://medium.com/@hiiamyes/2018-snowboarding-expenses-133b1ea0f7c9",
    `2018 白馬滑雪 - 花費`,
    `這趟算是有想實驗一下，在刻意省點錢 (?) 的情況下滑一趟雪會花約多少，像是住了 5 天 Hostel 的 4-Bed Dormitory (但其實沒要省錢我也會這樣住)、最後一晚睡在機場、在白馬的晚餐都自己煮等。`,
  ],
  [
    "Feb 19, 2018",
    "https://medium.com/@hiiamyes/2017-feb-snowboarding-101-hakuba-goryu-japan-cbcc95dd872f",
    `2017 Feb. Snowboarding 101 @ Hakuba Goryu, Japan`,
    `2017 日本學滑雪 @ 白馬五龍`,
  ],
  [
    "Jan 21, 2018",
    "https://medium.com/@hiiamyes/paiyun-auto-apply-is-deprecated-af0e9b05304",
    `排雲山莊申請工具 - 服務停止公告`,
    `因為從今年開始（2018/01/01），玉山線的申請已經整合進了臺灣國家公園入園入山線上申請服務網，所以排雲山莊申請工具就暫時失去作用囉，非常謝謝這幾個月來所有使用過和分享過的朋友！`,
  ],
  [
    "Jan 15, 2018",
    "https://medium.com/@hiiamyes/winter-hiking-expense-f5a850ccccf",
    `Winter Hiking - Expenses 雪訓花費`,
    `這次雪訓說要記花費… 這不就記下來了嗎～！`,
  ],
  [
    "Jan 13, 2018",
    "https://medium.com/@hiiamyes/winter-hiking-8359213f1a2b",
    `Winter Hiking 雪訓`,
    `所以今年就飛到日本來了。`,
  ],
  [
    "Jan 7, 2018",
    "https://medium.com/@hiiamyes/transform-multiple-ways-from-osm-into-geojson-1a817116ddc0",
    `Transform multiple ways from OSM into GeoJSON`,
    `我需要一個 Transformer 來將多條 ways 的資料合併成一個 GeoJSON`,
  ],
  [
    "Sep 28, 2017",
    "https://medium.com/@hiiamyes/use-selenium-ide-in-firefox-to-help-booking-railway-ticket-cadfe9480790",
    `搶台鐵火車票 - 使用 Firefox 上的 Selenium IDE 幫忙搶票`,
    `每天凌晨 00:00 的時候，台鐵都會把 14 天後的火車票開放訂票，這個時候就是大家上網搶票的時刻啦…`,
  ],
  [
    "Sep 27, 2017",
    "https://medium.com/@hiiamyes/how-to-analyze-gpx-file-with-javascript-part-1-8111ec2a3b6e",
    `How to analyze GPX file with JavaScript - Part 1`,
    `上山的時候我習慣會用手機的 GPS 記錄行程，下山後再把匯出的 GPX 檔丟到 Google Earth 上分析，看看整趟行程的距離、時間、海拔變化等，就像上圖，是前一陣子去水漾森林的記錄。`,
  ],
  [
    "Sep 18, 2017",
    "https://medium.com/@hiiamyes/use-puppeteer-to-crawl-trails-info-of-taiwan-national-park-part-ii-a0b4e4fa3a39",
    `用 puppeteer 爬出國家公園登山路線資料 (Part 2)`,
    `接續 Part 1，這篇要繼續寫國家公園入園申請系統裡關於路線規劃中地點的爬蟲，上圖是爬蟲的演算法流程圖，是用很酷的 code2flow 畫出來的。`,
  ],
  [
    "Sep 16, 2017",
    "https://medium.com/@hiiamyes/use-puppeteer-to-crawl-trails-info-of-taiwan-national-park-562270b01beb",
    `用 puppeteer 爬出國家公園登山路線資料 (Part 1)`,
    `為了做出入園申請的輔助工具， 我決定要把主路線、次路線、登山總天數和路線規劃，這幾 4 項資料用 Puppeteer 爬出來放進資料庫。`,
  ],
  [
    "Aug 24, 2017",
    "https://medium.com/@hiiamyes/a-crawler-powered-by-puppeteer-to-get-the-verification-code-image-from-website-57f98ba61495",
    `利用 Puppeteer 抓出網站裡的驗證碼圖片`,
    `意外也不意外的，前陣子做的 排雲山莊申請工具 成為我做過的 side project 中使用度和互動度最高的，也因此有了比較強的動力進行進一步的開發 XD。`,
  ],
  [
    "Aug 9, 2017",
    "https://medium.com/@hiiamyes/way-on-osm-geojson-leaflet-fd0968423674",
    `Way on OSM => GeoJSON => Leaflet`,
    `標題的中文是 把 OSM 上的路線 (way) 轉成 GeoJSON 後再用 Leaflet 畫到網頁上。`,
  ],
  [
    "Jul 29, 2017",
    "https://medium.com/@hiiamyes/rock-climbing-101-c00772b7dc15",
    `Rock Climbing 101 - 攀岩體驗`,
    `去年接觸過抱石後，就開始計劃著想上攀岩課了，一來是想著以後如果要走聖稜線的話，有確保的知識應該比較好，二來是因為我玩抱石其實在稍微爬高後會有點怕，所以想來試試有繩的會比較不怕還是更怕 XD`,
  ],
  [
    "Jul 26, 2017",
    "https://medium.com/@hiiamyes/paiyun-auto-apply-tool-fc0c3b1bc147",
    `排雲山莊申請工具 - 使用說明`,
    `因為排雲山莊的申請並沒有會員系統，所以每一次新的申請都必須把所有人的資料重新填過一遍，再加上排雲又特別難抽中，所以勢必得連續申請好幾次，更不要提抽籤沒中還要再重填一次資料了。`,
  ],
  [
    "Jul 14, 2017",
    "https://medium.com/@hiiamyes/go-headless-chrome-chrome-debugging-protocol-browser-automation-tool-d5d078802056",
    `Go + Headless Chrome + Chrome Debugging Protocol = Browser Automation Tool`,
    `這幾天又因為覺得，只是想做到 Browser Automation 的話應該不需要用到像 Selenium、Nightwatch 這樣偏向 testing 的解決方案，或許只要個 Headless Chrome 和能操作它的工具就行了，於是研究了幾天後試出了一個解決方案如下：`,
  ],
  [
    "Jul 6, 2017",
    "https://medium.com/@hiiamyes/paiyun-auto-apply-async-await-chrome-extension-1-f695dd9b0750",
    `排雲山莊申請 + async/await + chrome extension ( 1 )`,
    `考慮了自己申請排雲山莊的使用情境後，覺得自動申請小工具先以 Chrome Extension 的方式來做應該比較適合，因此之前嘗試的 Nightmare.js 等 Automation 的方法就不適用了，得改成自己寫 DOM 的操作。`,
  ],
  [
    "Jun 28, 2017",
    "https://medium.com/@hiiamyes/apply-paiyun-lodge-automatically-by-nightmare-js-124f9a6c3c7e",
    `Apply Paiyun Lodge automatically by Nightmare.js`,
    `利用 Nightmare.js 自動化申請排雲山莊`,
  ],
  [
    "Jun 16, 2017",
    "https://medium.com/@hiiamyes/d3-js-donut-chart-travel-expense-report-e9039201f902",
    `d3.js - Donut Chart - Travel Expense Report`,
    `再加上常常一趟旅行回來後都會被問說，你去了哪些點呀？總共花了多少？之類的問題，所以就想來做一個 旅行後的花費報表工具。`,
  ],
  [
    "Jun 3, 2017",
    "https://medium.com/@hiiamyes/things-about-postgresql-before-going-into-production-6179ee324105",
    `Things about PostgreSQL before and after going into production`,
    `登山預定行程產生器的資料庫用的是 PostgreSQL，架在一台 Linode 上，關於 PostgreSQL service 的架設之前已經寫過了，所以這篇會寫的是在開發和上線過程中用到的 SQL、pg_dump、psql 等查詢語言和指令。`,
  ],
  [
    "May 23, 2017",
    "https://medium.com/@hiiamyes/make-the-site-printing-friendly-f9f13c5fc9d",
    `Make the Site Printing Friendly`,
    `因為上山前都習慣會把預定行程做成 PDF 存起來或印出來，所以在寫登山預定行程產生器的時候，一直都把 Printing Friendly 當成重要的 Feature 之一，實作上則考慮了以下兩點：`,
  ],
  [
    "May 11, 2017",
    "https://medium.com/@hiiamyes/利用-selenium-自動化申請排雲山莊-ea88c0e7fa26",
    `利用 Selenium 自動化申請排雲山莊`,
    `最近，終於又多出了一點時間，所以決定從一直都想做的自動化申請排雲山莊下手，練習一下 Testing 的同時順便解決惱人的申請山屋流程。`,
  ],
  [
    "May 11, 2017",
    "https://medium.com/@hiiamyes/amazon-lex-aws-ios-sdk-bc0e28a88246",
    `Amazon Lex + AWS iOS SDK`,
    `花了一個晚上和朋友試玩了 Amazon Lex 和 iOS App 的結合，大部分的地方沒有太多問題，但最後卻在 IAM 的部分大卡關 XD。`,
  ],
  [
    "May 8, 2017",
    "https://medium.com/@hiiamyes/use-font-awesome-icons-in-sketch-6e12190cdd58",
    `Use Font Awesome Icons in Sketch`,
    `Sketch 是我拿來做 UI mockup 的工具，但 Sketch 本身並沒有內建任何 icon，所以有時候需要個 “+” 號之類的 icon 時，就會自己簡單畫一下之類的。`,
  ],
  [
    "Apr 20, 2017",
    "https://medium.com/@hiiamyes/custom-ui-dropdown-with-animation-24b8bd3de772",
    `Custom UI - Dropdown with Animation`,
    `雖然說用 Bootstrap 或任何一個 UI Library 就能夠輕易做出 Dropdown，但為了好好熟悉細節及應付未來 Customization 的需求，還是嘗試用自己的方式實作了一遍。`,
  ],
  [
    "Mar 30, 2017",
    "https://medium.com/@hiiamyes/custom-ui-time-input-f02273591dd0",
    `Custom UI - Time Input`,
    `所以，網路上總是能找到各式各樣和時間輸入相關的 Library，但卻不一定能完全滿足產品的需求。`,
  ],
  [
    "Mar 24, 2017",
    "https://medium.com/@hiiamyes/openstreetmap-overpass-api-637958466a54",
    `OpenStreetMap - Overpass API`,
    `做一個 GIS 服務，一開始常會遇到資料的獲取、建立問題，例如我現在需要一張台灣百岳的名稱、經緯度、海拔高度清單，該去那找？`,
  ],
  [
    "Mar 14, 2017",
    "https://medium.com/@hiiamyes/prepare-postgresql-on-linode-part-2-d1c6f382c598",
    `Prepare PostgreSQL on Linode - part 2`,
    `但因為我不太懂 SSL 和 SSH，試了一下後還是決定先用最笨的 ip + port + password 登入好了。`,
  ],
  [
    "Mar 8, 2017",
    "https://medium.com/@hiiamyes/prepare-postgresql-on-linode-part-1-1f04453e372e",
    `Prepare PostgreSQL on Linode — part 1`,
    `所以最近決定以後 Backend 的事情都直接 deploy 或連到 server 做好了。`,
  ],
  [
    "Jan 10, 2017",
    "https://medium.com/@hiiamyes/deploy-2-domain-name-virtual-host-46511fdbe2b6",
    `Deploy (2)：Domain Name & Virtual Host`,
    `domain name 我是在 GoDaddy 買的，想名字又花了不少時間 XD`,
  ],
  [
    "Jan 1, 2017",
    "https://medium.com/@hiiamyes/using-ffmpeg-to-make-time-lapse-video-391f5ea8cc6b",
    `用 FFmpeg 減少製作縮時影片的時間`,
    `import 的部分最崩潰，因為縮時的照片動輒幾百上千張，所以每次 import 時 Final Cut Pro 都會頓到死。`,
  ],
  [
    "Nov 29, 2016",
    "https://medium.com/@hiiamyes/linode-59e7787e31c",
    `Linode`,
    `身為一位工程師有一台 VPS 也是很合理的事嘛～`,
  ],
  [
    "Nov 27, 2016",
    "https://medium.com/@hiiamyes/react-hot-loader-和-react-router-a46fd3217b6b",
    `react-hot-loader 3.0`,
    `記得年初時碰到的專案是這麼做 react 的 hot reload 的`,
  ],
  [
    "Nov 11, 2016",
    "https://medium.com/@hiiamyes/腿了很久的-graphql-97c7074e4bce",
    `腿了很久的 GraphQL`,
    `1 年前第一次聽說了 GraphQL，第一次寫了 ajax 戳了同事的 GraphQL API 2015 年的時候 GraphQL open source 了 2012 年的時候 Facebook 說他們開始用它`,
  ],
  [
    "Sep 17, 2016",
    "https://medium.com/@hiiamyes/嘉明湖山屋爬蟲-part-1-2fddf097cf74",
    `嘉明湖山屋爬蟲 : part 1`,
    `沒想到檜谷山莊/營地、嘉明湖山屋、向陽山屋的申請網站竟然換地方了，記得 2015 年的時候，都還是在 台灣山林悠遊網 裡頭的，現在竟然分成了 2 個網站，然後分別屬於屏東林管處和台東林管處的…`,
  ],
  [
    "Sep 15, 2016",
    "https://medium.com/@hiiamyes/date-of-ubuntu-f93352d87deb",
    `date of ubuntu`,
    `最近買了一台 linode 來玩，在上面裝了最常見的 ubuntu。裝了一些軟體後，從 log 中才發現，date 怎麼看起來怪怪的。`,
  ],
  [
    "Sep 14, 2016",
    "https://medium.com/@hiiamyes/evolution-of-my-crawler-asynchronous-20cd16f01516",
    `Evolution of my crawler — asynchronous`,
    `山屋的爬蟲在 7 月時又壞了，應該是因為入園申請網站的 HTML 有變吧。生活、工作，也終於在最近慢慢沈澱下來了，開始有空修 bug了。`,
  ],
  [
    "Sep 7, 2016",
    "https://medium.com/@hiiamyes/locale-of-ubuntu-abe289299689",
    `locale of Ubuntu`,
    `覺得被 Mac 的 Homebrew 慣壞了，不管是 MongoDB 還是 ElasticSearch，直接 brew install 後就都可以用了。`,
  ],
  [
    "Aug 31, 2016",
    "https://medium.com/@hiiamyes/bidirectional-scrollable-table-with-fixed-header-part-1-c3f75ee73d23",
    `Bidirectional Scrollable Table with Fixed Header — Part 1`,
    `後來，我又繼續在做公司內部給非 RD Team 的同事們使用的工具網站了。`,
  ],
  [
    "Jul 5, 2016",
    "https://medium.com/@hiiamyes/不確定資料庫該怎麼設計-2a0b9c654544",
    `不確定資料庫該怎麼設計`,
    `登山計畫書產生器，是個說了很久一直想開始進行的 site project，不過卻一直卡在幾個點而遲遲做不出 prototype，資料庫的設計就是其中一個。`,
  ],
  [
    "May 22, 2016",
    "https://medium.com/@hiiamyes/在-aws-ec2-上裝-mongodb-db4fd3d2002f",
    `在 AWS EC2 上裝 MongoDB`,
    `台灣山屋餘額查詢網，原本的架構是用`,
  ],
  [
    "May 17, 2016",
    "https://medium.com/@hiiamyes/js-小技巧-0-c117481abd88",
    `js 小技巧 #0: merge multiple arrays by concat apply()`,
    `今天剛好有個 case，是要用 Promise.all() 去非同步取三筆 array 資料回來，然後再組合成一個 array 吐出去。`,
  ],
  [
    "May 11, 2016",
    "https://medium.com/@hiiamyes/用-promise-代替-async-js-2f79541611bc",
    `用 Promise 代替 Async.js`,
    `一年前用 node 寫山屋爬蟲的時候，還不知道 ES6 和 Promise，所以一些需要 sequential 執行的動作，當時就用了 async.js 提供的 waterfall() 來做。`,
  ],
];

export default blogs;
