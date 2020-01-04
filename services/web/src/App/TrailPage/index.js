import React from "react"
import { Link, useParams } from "react-router-dom"
import Style from "./style"
import Elevation from "./components/Elevation"
import Map from "./components/Map"
import Trail from "./components/Trail"
import chilaiMainNorthPeaks from "./datas/chilai-main-north-peaks.json"
import bilu from "./datas/bilu.json"
import hehuanWest from "./datas/hehuan-west.json"

const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`

const dataMap = {
  "chilai-main-north-peaks": chilaiMainNorthPeaks,
  bilu: bilu,
  "hehuan-west": hehuanWest,
}

const TrailPage = props => {
  const { name } = useParams()
  const { paths, nodes } = dataMap[name]
  return (
    <Style>
      <div>Trails</div>
      <div className="trails">
        <Link to="/trails/chilai-main-north-peaks">奇萊主北</Link>
        <Link to="/trails/bilu">畢祿單攻</Link>
        <Link to="/trails/hehuan-west">合歡西單攻</Link>
      </div>
      <div>
        <Elevation data={paths} nodes={nodes} />
        <div style={{ width: 640, height: 480 }}>
          <Map
            key="test"
            tileLayerUrl={tileLayerUrl}
            center={[
              paths[Math.floor(paths.length / 4)].lat,
              paths[Math.floor(paths.length / 4)].lng,
            ]}
            zoom={13}
          >
            <Trail paths={paths} />
          </Map>
        </div>
      </div>
    </Style>
  )
}

export default TrailPage
