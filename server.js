var express = require('express');
var app = express();
var serveStatic = require('serve-static')
var staticAssets = new serveStatic(__dirname+"/web", { 'index': ['default.html', 'default.htm'] })
const fs = require("fs");

var variablesFolder = __dirname+"/variables";

// set the port of our application
var port = process.env.PORT || 2708;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',__dirname+"/web");
// use .html instead .ejs
app.engine('html', require('ejs').renderFile);

/*Optional security*/
if(process.env.ENABLE_SECURITY == "true"){

  const basicAuth = require('express-basic-auth');
  var userName = process.env.AUTH_USER;
  var users = {};
  users[userName] = process.env.AUTH_PASSWORD;
  app.use(basicAuth({
      users: users,
      challenge: true
  }))
}


/**
 * If your html is About.html, just create a file About.json in
 * variables folder in a path equal of your html real location. Sample
 * web/About.html
 * web/About.json
 *
 * framework will find your html and its variables in order to render it using ejs
 */
// set routes and assets
app.get('*', function(req, res, next) {

    if(req.url === "/"){
      // render home page
      res.render('index.html', require(variablesFolder+"/index.json"));
    }else if(req.url.endsWith(".html")){
      // render another pages
      console.log("requested resource:"+req.url);
      var relativeResourcePath = req.url.substring(1,req.url.length);
      console.log("requested resource relative path: "+relativeResourcePath);
      var resourceVariablesPath = variablesFolder + "/"+ relativeResourcePath.replace(".html",".json")
      if (fs.existsSync(resourceVariablesPath)) {
        res.render(relativeResourcePath, require(resourceVariablesPath));
      }else{
        res.render(relativeResourcePath, {});
      }

    }else{
      return staticAssets(req, res, next);
    }

});



app.listen(port, function() {
    console.log('Our app is running on port: ' + port);
});
