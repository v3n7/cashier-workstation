const router = require('express').Router();

const user = require('./controllers/user')
const goods = require("./controllers/goods");

router.use('/user',user)
router.use("/goods", goods);

router.all("*", (req,res,next) => {
    res.status(404).send("Not found")
})

module.exports = router