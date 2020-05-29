const router = require('express').Router();

const withAuth = require('./middleware/auth')

const auth = require('./controllers/auth')
const user = require('./controllers/user')
const check = require('./controllers/check')

router.use('/auth', auth)
router.use('/user', withAuth, user)
router.use('/check', withAuth, check)

router.all("*", (req,res,next) => {
    res.status(404).send("Not found")
})

module.exports = router