const express = require('express');
const router = express.Router();
const controller = require('../controller/index');

/* GET home page. */
router.route('/update')
.get(controller.temperature.get);

router.route('/dump')
.get(controller.data.get);

router.route('/graph')
.get(controller.graph.get);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
