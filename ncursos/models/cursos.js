module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var curso = Schema({
        nome: { type: String, required: true },
        desc: { type: String, required: true },
        ch: { type: String },
        cat: { type: String }
        
    });
    return mongoose.model('cursos', curso);
}; 