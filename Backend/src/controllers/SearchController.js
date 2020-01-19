/**
 * Autor: Tais Baierle
 * Semana OmniStack 2020
 * inicio : 18/01/2020
 * Controllers são camadas de abstração, onde 
 * cada entidade terá o seu onde entra a requsição e é devolvida a resposta
 * 
 * CONTROLE DE BUSCA 
 */
const Dev = require('../models/dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        //Buscar devs num raio 10km, buscar devs por tecnologia
        const { latitude, longitude, techs } = request.query;//valores de busca
        const techsArray = ParseStringAsArray(techs);

        const devs = await Dev.find({
            //filtros da busca, podem ser vários parametros de busca, são objetos passados para a busca
            techs: {
                $in: techsArray,//tecnologias que estão dentre as citadas no in
                //$in: operador lógico do MongoDB 
                //Documentação: https://docs.mongodb.com/manual/reference/operator/query/
            },
            location: {
                $near: {//operador que busca resultados próximos
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,latitude],
                        //operador onde passamos os pontos de referencia da busca
                    },
                    $maxDistance: 10000, //Raios de busca em metros
                },
            },
        });

        return response.json({ devs });
    }
}