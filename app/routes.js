const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/views/index', function(req, res) {
    res.render('views/index.html', { 'name' : 'Foo' });
});
router.get('/views/index1', function(req, res) {
    res.render('views/index1.html', { 'name' : 'Foo' });
});

router.get('/views/index2', function(req, res) {
    res.render('views/index2.html', { 'name' : 'Foo' });
});
module.exports = router
