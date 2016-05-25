var express = require('express');
var router = express.Router();
var instituicaoController = require('../controllers/instituicaoController');

function pegarToken(req, res, next){
  var header = req.headers['authorization'];

  if(typeof header !== 'undefined'){
    req.token = header;
    next();
  }else{
    res.sendStatus(403);
  }
}

router.post('/cadastrar', function(req, res){
  var razao_social = req.body.razao_social;
  var cnpj = req.body.CNPJ;
  var areaAtuacao = req.body.areaAtuacao;
  var tipo = req.body.tipo;
  var site = req.body.site;
  var rua = req.body.rua
  var numero = req.body.numero
  var complemento = req.body.complemento
  var bairro = req.body.bairro
  var cep = req.body.cep
  var cidade = req.body.cidade
  var estado = req.body. estado
  var nomeServ = req.body.nomeServ
  var descServ = req.body.descServ
  var recursos = req.body.recursos
  var email = req.body.email
  var telefone = req.body.telefone
  var nomePermissao = req.body.nomePermissao
  var tipoPermissao = req.body.tipoPermissao
  var login = req.body.login;
  var senha = req.body.senha;
  instituicaoController.save(  razao_social,
                          cnpj,
                          areaAtuacao,
                          tipo,
                          site,
                          rua, numero, complemento, bairro,
                          cep, cidade, estado, nomeServ, descServ,
                          recursos, email, telefone, nomePermissao,
                          tipoPermissao,
                          login,
                          senha, function(resp){
    res.json(resp);
  })
})

router.post('/login', function(req, res){

  var login = req.body.login;
  var senha = req.body.senha;
  instituicaoController.login(login, senha, function(resp){
    res.json(resp);
  })
})

/*
router.get('/listar', pegarToken, function(req, res){
  var token = req.token;
  acessoController.list(token, function(resp){
    res.json(resp);
  })
})
*/

module.exports = router;
