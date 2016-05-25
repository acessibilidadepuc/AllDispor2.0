var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

var InstituicaoSchema = new Schema({
  razao_social:String,
  cnpj:String,
  areaAtuacao:String,
  tipo:String,
  site:String,

  endereco:{
    rua:String,
    numero:Number,
    complemento:String,
    bairro:String,
    cep:String,
    cidade:String,
    estado:String
  },
  servicos:{
    nome:String,
    descricao:String
  },
  recursos:[{
    descricao:String,
    estrutura:String,
    quantidade:Number
  }],
  contato:{
    email:String,
    telefone:String
  },
  permissao:{
    nome:String,
    tipo:String
  },
  acesso:{
    login:String,
    senha:String,
    token:String
  }
});

//geração de token
InstituicaoSchema.methods.gerarToken = function(razao_social, cnpj){
  return jwt.sign({'razao_social':razao_social, 'cnpj':cnpj}, 'puc');
}

//método de cliptografia
InstituicaoSchema.methods.gerarSenha = function(senha){
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

//comparar senha
InstituicaoSchema.methods.validaSenha = function(senha){
    return bcrypt.compareSync(senha, this.acesso.senha);
}


module.exports = mongoose.model('Instituicao', InstituicaoSchema);
