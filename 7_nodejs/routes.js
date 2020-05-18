const router = require('express').Router();

const user = require('./controllers/user')
const goods = require("./controllers/goods");
const check = require("./controllers/check");

router.use('/user',user)
router.use("/goods", goods);
router.use("/check", check)

router.all("*", (req,res,next) => {
    res.status(404).send("Not found")
})

module.exports = router