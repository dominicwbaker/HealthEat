const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.get("/search?q=", (req, res) => {
  const BASEURL = "https://api.edamam.com/search?q=";
  const APPKEY = process.env.REACT_APP_API_KEY
  const APPID = process.env.REACT_APP_API_ID
  const query = req.query.q
  axios.get(BASEURL + query + "&app_id=" + APPID + "&app_key=" + APPKEY).then(( response ) =>{
    console.log(response)
    res.json(response)
  }
)
})

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;