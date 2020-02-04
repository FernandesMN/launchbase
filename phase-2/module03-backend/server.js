const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res){
    const data = {
        avatar_url: "https://avatars2.githubusercontent.com/u/51912507?s=400&u=4473f830348c529299e0f1d9265a087222ad2546&v=4",
        name: "Matheus Fernandes",
        role: 'Diretor Administrativo Financeiro - <a href="https://www.catiuespi.com.br/" target="_blank">CATI</a>',
        description: 'Estudante - Ciência da Computação na Universidade Estadual do Piauí(<a href="https://www.uespi.br/site/" target="_blank">UESPI</a>)',
        links: [
            {name: 'Github', url: 'https://github.com/FernandesMN'},
            {name: 'Instagram', url: 'https://www.instagram.com/eifernandess/'},
            {name: 'Linkedin', url: 'https://www.linkedin.com/in/matheus-fernandes-nascimento/'},
        ]
    }

    return res.render("about", {about: data});
});

server.get('/portfolio', function(req, res) {
    return res.render("portfolio", {items: videos});
});

server.listen(5000, function(){
    console.log("server is running");
});