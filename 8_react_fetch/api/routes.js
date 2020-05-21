const router = require('express').Router();

const withAuth = require('./middleware/auth')

const auth = require('./controllers/auth')
const user = require('./controllers/user')

router.use('/auth', auth)
router.use('/user', withAuth, user)

router.all("*", (req,res,next) => {
    res.status(404).send("Not found")
})

module.exports = router