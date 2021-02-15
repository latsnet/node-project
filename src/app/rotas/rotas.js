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
        let html = `
        <html>
            <head>
                <meta charset="utf-8" />
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body>
        </html>`;

        resp.send(html);
    });
    
}