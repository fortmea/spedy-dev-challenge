var express = require('express');
const PORT =  3001;
var app = express();
var mysql = require('mysql');
var cors = require('cors')
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(express.json({ limit: '25mb' }));
app.use(cors());
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vertrigo',
    database: 'spedy'
});
dbConn.connect();
app.post('/adicionar/', function (req, res) {
    let titulo = req.body.titulo;
    let valor = parseFloat(req.body.valor);
    let descricao = req.body.descricao;
    dbConn.query('INSERT INTO `classificados`(`TITULO`, `VALOR`, `DESCRICAO`) VALUES(?,?,?)',[titulo, valor, descricao], function(error, results){
        if (error) {
            console.log(error);
            return res.status(500).send({ message: 'erro interno' });
        }else{
            return res.send({ error: false, data: "Registro realizado com sucesso!", message: "Ok." });
        }
    });
});
app.post('/listar/', function (req, res) {
    dbConn.query('SELECT * FROM classificados ORDER BY id DESC', function (error, results, fields) { //seleciona todas as postagens
        if (error) { //caso ocorra erro:
            return res.status(500).send({ message: 'erro interno' }); //envia mensagem de erro
        }
        return res.send({ error: false, data: results }); //envia objeto com as postagens
    });

});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });