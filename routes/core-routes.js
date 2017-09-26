module.exports = function(app) {

   app.get('/', function(req, res){
    var title = 'Starter app';
    res.render('base.html');
  });

  app.get('/*', function(req, res) {
    res.redirect('/');
  });

}