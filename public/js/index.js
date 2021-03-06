const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5004; 

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: true }));
//to link css and image folder
app.use(express.static(__dirname + '/public/image'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));

//To define templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index')
});

app.listen(port, () => console.log(`App is running on port ${5005}!`));