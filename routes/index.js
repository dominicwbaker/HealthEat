const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.get("/search/:query", (req, res) => {
  const BASEURL = "https://api.edamam.com/search?q=";
  const APPKEY = process.env.REACT_APP_API_KEY
  const APPID = process.env.REACT_APP_API_ID
  const query = req.params.query
  console.log(BASEURL + query + "&app_id=" + APPID + "&app_key=" + APPKEY)

  axios.get(BASEURL + query + "&app_id=" + APPID + "&app_key=" + APPKEY).then(( response ) =>{
    console.log(response.data.hits)
    res.json(response.data.hits)
  }

)
})

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;