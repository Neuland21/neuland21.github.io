module.exports = function(app) {

   app.get('/', function(req, res){
    var title = 'Neuland 21 Coming Soon';
    res.render('base.html');
  });

  app.get('/*', function(req, res) {
    res.redirect('/');
  });

}