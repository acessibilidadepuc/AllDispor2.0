var Instituicao = require('../models/instituicao');

exports.save = function(razao_social, cnpj, areaAtuacao, tipo,
                        site, rua, numero, complemento, bairro,
                        cep, cidade, estado, nomeServ, descServ,
                        recursos, email, telefone, nomePermissao,
                        tipoPermissao, login, senha, callback){

  Instituicao.findOne({'acesso.login':login}, function(erro, instituicao){
    if(erro){
      callback('Deu Erro')
    }else if(instituicao){
      callback('Instituicao ja existe')
    }else{
      //var obj = JSON.parse(recursos);
      var novaInstituicao = new Instituicao();
          novaInstituicao.razao_social = razao_social;
          novaInstituicao.cnpj = cnpj;
          novaInstituicao.areaAtuacao = areaAtuacao;
          novaInstituicao.tipo = tipo;
          novaInstituicao.site = site;

          novaInstituicao.endereco.rua = rua;
          novaInstituicao.endereco.numero = numero;
          novaInstituicao.endereco.complemento = complemento;
          novaInstituicao.endereco.bairro = bairro;
          novaInstituicao.endereco.cep = cep;
          novaInstituicao.endereco.cidade = cidade;
          novaInstituicao.endereco.estado = estado;

          novaInstituicao.servicos.nome = nomeServ;
          novaInstituicao.servicos.descricao = descServ;
        //  console.log(obj);

          //novaInstituicao.recursos = obj;

          novaInstituicao.contato.email = email;
          novaInstituicao.contato.telefone = telefone;

          novaInstituicao.permissao.nome = nomePermissao;
          novaInstituicao.permissao.tipo = tipoPermissao;

          novaInstituicao.acesso.login = login;
          novaInstituicao.acesso.senha = novaInstituicao.gerarSenha(senha);
          novaInstituicao.acesso.token = novaInstituicao.gerarToken(login);

      novaInstituicao.save(function(erro, instituicao){
        if(erro){
          callback('deu erro');
        }else{
          callback(instituicao);
        }
      })
    }
  })
}

exports.login = function(login, senha, callback){
  Instituicao.findOne({'acesso.login':login}, function(erro, instituicao){
    if(erro){
      callback('Deu erro');
    }else if(instituicao){
      if(instituicao.validaSenha(senha)){
        callback(instituicao.acesso.token);
      }else{
        callback('dados incorretos');
      }
    }else{
      callback('Sem instituicao');
    }
  })
}


exports.list = function(token, callback){
  Instituicao.findOne({'acesso.token':token}, function(erro, instituicao){
    if(erro){
      callback('Deu erro');
    }else if(instituicao){
      callback({'instituicao.acesso.login':instituicao.acesso.login});
    }else{
      callback('Acesso não encontrado!');
    }
  })
}

exports.authorize = function(token, callback){
  Instituicao.findOne({'acesso.token':token}, function(erro, instituicao){
    if(erro){
      callback(false);
    }else if(instituicao){
      callback(true);
    }else{
      callback(false);
    }
  })
}
