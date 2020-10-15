const indexCtrl = {};

indexCtrl.renderIndex = ('/', (req, res) => {
    res.render('index')
});

indexCtrl.renderAbout = ('/about', (req, res) => {
    res.render('about')
});

module.exports = indexCtrl