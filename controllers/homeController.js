const path = require('path');
const fs = require('fs');

const homeController = {
    index: (req, res) => {
        let servicos = [
            {nome: 'Desenvolvimento Web', imagem:"imagens/undraw_dev_focus.svg"},
            {nome: 'Consultoria UX', imagem:"imagens/undraw_social_dashboard.svg"},
            {nome: 'Marketing Digital', imagem:"imagens/undraw_mobile_apps.svg"},
        ]

        let carousel = [
            {nome: 'imagem1', imagem:"imagens/banner.jpg"},
            {nome: 'imagem2', imagem:"imagens/you-x-ventures-tHO1_OuKbg0-unsplash.jpg"},
            {nome: 'imagem3', imagem:"imagens/austin-distel-wD1LRb9OeEo-unsplash.jpg"},
            {nome: 'imagem4', imagem:"imagens/austin-distel-wawEfYdpkag-unsplash.jpg"},
        ]
        res.render('index', {title: 'Home', listaServicos: servicos, carousel: carousel});
    },
    contato: (req, res) => {
        let {nome, email, mensagem} = req.body;

        //novo conteúdo 
        let infoContato = {nome, email, mensagem};

        let fileContato = path.join('db', 'contatos.json');

        let listaContato = []
        
        
        if(fs.existsSync(fileContato)){
            // trazer informacoes do arquivo
            listaContato = fs.readFileSync(fileContato, {encoding: 'utf-8'});
            listaContato = JSON.parse(listaContato);
        }

        // adicionar o arquivo novo
        listaContato.push(infoContato)

        //converter arquivo em json

        listaContato = JSON.stringify(listaContato) 
        //salvar arquivo 
        fs.writeFileSync(fileContato, listaContato);
        
        res.render('contato', {nome, email, mensagem, title: 'Contato',});
    },
    newsletter: (req, res) =>{
        let {nome, email} = req.body;

        //novo conteúdo 
        let infoNews = {nome, email, data: new Date()};

        let fileNews = path.join('db', 'newletter.json');

        let listaNews = [];
        
        
        if(fs.existsSync(fileNews)){
            // trazer informacoes do arquivo
            listaNews = fs.readFileSync(fileNews, {encoding: 'utf-8'});
            listaNews = JSON.parse(listaNews);
        }

        listaNews.push(infoNews);

        listaNews = JSON.stringify(listaNews); 

        console.log(listaNews);
        
        //salvar arquivo 
        fs.writeFileSync(fileNews, listaNews);

        // get = req.query
        // post = req.body
        // pelo url req.params

        res.render('newsletter', {nome, email, title: 'Newsletter'});
    }
};

module.exports = homeController;