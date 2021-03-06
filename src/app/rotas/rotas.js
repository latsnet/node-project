const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {

    app.get('/', (req, resp) => {
        let html = `
        <html>
            <head>
                <meta charset="utf-8" />
            </head>
            <body>
                <h1> Olá Casa do Código </h1>
            </body>
        </html>`;

        resp.send(html);
    });

    app.get('/livros', (req, resp) => {

        const livroDao = new LivroDao(db);
        livroDao.lista()
            .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros
                }
            ))
            .catch(erro => console.log(erro));

    });

    app.get('/livros/form', (req, resp) => {
        resp.marko(require('../views/livros/form/form.marko'));
    });

    app.post('/livros', (req, resp) => {
        console.log(req.body);

        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));

    });

    app.delete('/livros/:id', (req, resp) => {
        const id = req.params.id;
        const livroDao = new LivroDao(db);
        livroDao.remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));

    });

}