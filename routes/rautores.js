module.exports = function(app, swig) {


    app.get("/autores", function(req, res) {

        let autores = [{
            "nombre": "Axl Rose",
            "grupo": "Guns N' Roses",
            "rol": "Lead vocalist"
        }, {
            "nombre": "Slash",
            "grupo": "Guns N' Roses",
            "rol": "Lead guitarist"
        }, {
            "nombre": "Duff McKagan",
            "grupo": "Guns N' Roses",
            "rol": "Bassist"
        }, {
            "nombre": "Rob Gardner",
            "grupo": "Guns N' Roses",
            "rol": "Drummer"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Lista de autores',
            autores : autores
        });

        res.send(respuesta);
    });


    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });


    app.post('/autor', function(req, res) {
        res.send("Autor agregador: "+req.body.nombre+"<br>"
            +" grupo: "+req.body.grupo+"<br>"
            +" rol: "+req.body.rol);
    });

    app.get('/autores/*', function (req, res) {
        res.redirect("/autores");
    })



};