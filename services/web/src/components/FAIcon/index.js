import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faMediumM,
  faFacebook,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

library.add(faMediumM)
library.add(faFacebook)
library.add(faYoutube)
library.add(faLinkedin)
library.add(faGithub)

const FAIcon = props => {
  const { style, icon } = props
  return (
    <FontAwesomeIcon
      style={{ width: "32px", height: "32px", ...style }}
      icon={icon}
    />
  )
}

export const FAIconButton = props => {
  const { className, style, icon, onClick } = props
  return (
    <button
      className={className}
      style={{
        width: "32px",
        height: "32px",
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export default FAIcon
