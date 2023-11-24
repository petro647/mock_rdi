var express = require('express');
var router = express.Router();
const { meccanicoEdile } = require('../jsons/meccanicoEdile');

router.get('/', (req, res, next) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.send(meccanicoEdile);
})

module.exports = router;
