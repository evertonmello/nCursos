module.exports = function (app) {
    var Curso = app.models.cursos;

    var cursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/menu', params);
        },
        cadastroCurso: function (request, response) {
            var usuario = request.session.usuario,
            params = { usuario: usuario }; 

            if(request.method == "GET"){
                response.render('cursos/cadCurso', params);            }
            if(request.method == "POST"){
                var curso = new Curso(request.body.curso);                
                curso.save(function (err) {
                    if (err) {
                        response.render('cursos/menu', params);                        
                        return handleError(err);                        
                    }else{                         
                        response.render('cursos/menu', params);
                    }                    
                  })
            }
            
        },        
        listacursos: function (request, response) {
            Curso.find(function (erro, cursos) {
                if (erro) {
                    response.render('/menu');
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('cursos/listaCursos', params);
                }
            });
        }
    };
    return cursosController;
};