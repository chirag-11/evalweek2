const express = require('express');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
let  bp  =  require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const opn = require("opn");

let app = express();


app.use(express.static('./images'));

app.use(bp.json());
app.use(bp.urlencoded({
  extended: true
}));
if (process.env.NODE_ENV == 'production') {
  console.log(process.env.NODE_ENV);
  config = require('./webpack.config.prod')
} else {
  config = require('./webpack.config')
}
const compiler = webpack(config);
app.use(webpackHotMiddleware(compiler));
let middlewareDev = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
});
app.use(middlewareDev);
app.get("/apiGetData", function (req, res) {

  fs.readFile("data/data.json", 'utf-8', (error , data) => {
    let r = error ? error : data;
    res.send(JSON.parse(r));
  });
});


app.post('/apiPostData', function (req, res) {  
  let  fileData;  
  fs.readFile('data/data.json', 'utf-8', function (err, data) {      
    newdata = JSON.parse(data);      
    let  edited = req.body;      
    for (let  i = 0; i < newdata.length; i++) {     
      if (edited.id == newdata[i].id) {      
        newdata[i] = edited;          
        break;        
      }      
    }      
    fs.writeFile('data/data.json', JSON.stringify(newdata), function (err) {        
      if (err)
        return  console.log(err);         
      res.send(newdata);      
    });  
  });
});

app.get("*", function (req, res) {
  res.write(middlewareDev.fileSystem.readFileSync(path.join(__dirname, "/public/index.html")));
  res.end();
})

app.listen(3000, function () {
  opn("http://localhost:3000");
  console.log('Example app listening on port 3000!\n');
});