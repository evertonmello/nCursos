module.exports = function (app) {
    var valida = require('./../middlewares/valida');     
    var cursos = app.controllers.cursos;
    app.get('/menu', valida , cursos.menu);        
    app.post('/cadcurso', valida, cursos.cadastroCurso);
    app.get('/cadcurso', valida, cursos.cadastroCurso);
    app.get('/listacursos', valida, cursos.listacursos);
}; 