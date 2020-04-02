const path = require('path');
const fs = require('fs');


const inscritosController = {
    newsletter: (req, res) => {
        let file = path.join('db', 'newletter.json');
        lista = fs.readFileSync(file, {encoding: 'utf-8'});
        lista = JSON.parse(lista);

        console.log(lista)

        res.render('inscritos', {title: 'Newsletter', cadastros: lista})
    },
    contatos: (req, res) => {
        let file = path.join('db', 'contatos.json');
        lista = fs.readFileSync(file, {encoding: 'utf-8'});
        lista = JSON.parse(lista);

        console.log(lista)

        res.render('inscritos', {title: 'Contato', cadastros: lista})
    }
        
}

module.exports = inscritosController;