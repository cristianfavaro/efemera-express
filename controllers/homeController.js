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
    }
};

module.exports = homeController;