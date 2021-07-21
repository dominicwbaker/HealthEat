const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
// API Routes
router.use("/api", apiRoutes);
console.log("look here")

// If no API routes are hit, send the React app
router.get("/search/:query", (req, res) => {
  console.log("see")
  const BASEURL = "https://api.edamam.com/search?q=";
  console.log("me")
  const APPKEY = process.env.REACT_APP_API_KEY
  const APPID = process.env.REACT_APP_API_ID
  const query = req.params.query
  console.log(BASEURL + query + "&app_id=" + APPID + "&app_key=" + APPKEY)

  axios.get(BASEURL + query + "&app_id=" + APPID + "&app_key=" + APPKEY).then(( response ) =>{
    console.log(response.data.hits)
    console.log("see you")
    res.json(response.data.hits)
  }

)
console.log("see them")
})
console.log("look see")

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
  console.log("look look")
});
console.log("hi hi")

module.exports = router;