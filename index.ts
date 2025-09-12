import { serve } from "bun";
import Home from "./src/pages/Home.html"
import "./src/static/jpfont.ttf"
import "./src/static/regular.ttf"
import "./src/static/style.css"
const server = serve({
  port: process.env.PORT || 3000,
  routes: {
    "/": Home
  },
  // development: {
  //   hmr: true,
  //   console: true
  // }

})


console.log(`Server running on ${server.hostname}:${server.port}`)
