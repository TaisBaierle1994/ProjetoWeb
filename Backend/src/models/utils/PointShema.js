
/**
 * Autor: Tais Baierle
 * Semana OmniStack 2020
 * inicio : 15/01/2020
 *Estrutura de dados para pegar as informações de
 latitude e longitude
 MongoDB doc : https://docs.mongodb.com/manual/geospatial-queries/
 GeoJson Object: Objetos que armazenam coordenadas
 */
const mongoose= require('mongoose');
//estrutura de dados em javascript
const PointSchema = new mongoose.Schema({//Criando o schema
    type: {//item ponto com coordenadas = cordinates
        /**Coluna do tipo string */
        type: String,//especificação de um GeoJson Object
        enum : ['Point'],//Nomenclatura do item
        require: true,//Obrigatoriedade da informação 
    },
    coordinates: {
        /**coluna do tipo array number */
        type: [Number],//array de numeros que vão conter as coordenadas [long, lat]
        require: true,//obrigatoriedade da informação
    },
});

module.exports = PointSchema;