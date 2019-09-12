const express = require("express")
const rendertron = require("rendertron-middleware")
const path = require("path")

const app = express()

app.use(
  rendertron.makeMiddleware({
    proxyUrl: "http://rendertron:3008/render",
  })
)

app.use(express.static(path.resolve(__dirname, "../", "build")))
app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../", "build", "index.html"))
})

app.listen(8088)
