const router = require("express").Router();

router.get('/', (req, res) => {
    res.json('I WORK!');
});

module.exports = router;