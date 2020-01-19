/**
 * Autor: Tais Baierle
 * Semana OmniStack 2020
 * inicio : 14/01/2020
 * Código onde é criado a estrutura de dados
 * do dev para mandar para o MongoDB
 * 
 * ENTIDADE DEV
 */

const mongoose = require ('mongoose');//Importado para utilizar a função de criação de schema
const PointSchema = require('./utils/PointShema')//Outro schema importado para compor o dev

const DevSchema = new mongoose.Schema({//Schema padrão para todos os devs, compotamento de classe
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    //Acima temos atributos e tipos
    location: {
        type: PointSchema,//outro schema com as informações de latitude e longitude
        index: '2dsphere',//auxilia no cálculo das coordenadas
    //Acima temos uma estrutura de dados sendo chamada
    //o index: '2dsphere' referece a pontos/indices em um plano 2d
    }

})

module.exports = mongoose.model('dev', DevSchema);