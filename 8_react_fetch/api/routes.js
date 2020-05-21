const router = require('express').Router();

const user = require('./controllers/user')

router.use('/user',user)

router.all("*", (req,res,next) => {
    res.status(404).send("Not found")
})

module.exports = router