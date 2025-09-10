import { serve } from "bun";
import Home from "./pages/Home.html"

const server = serve({
  port: 3000,
  routes: {
    "/": Home
  },
  development: {
    hmr: true,
    console: true
  }

})


console.log(`Server running on ${server.hostname}:${server.port}`)
