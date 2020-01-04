import { useEffect } from "react"
import Leaflet from "leaflet"

let layer = null

const Trail = props => {
  const { map, paths } = props
  useEffect(() => {
    if (layer) layer.remove()
    const qq = paths.map(({ lat, lng }) => [lng, lat])
    layer = Leaflet.geoJSON(
      [
        {
          type: "LineString",
          coordinates: qq,
        },
      ],
      {
        style: () => ({
          className: "trail",
        }),
      }
    )
    layer.addTo(map)
  }, [paths])
  return null
}

export default Trail
