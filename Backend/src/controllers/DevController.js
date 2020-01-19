
/**
 * Autor: Tais Baierle
 * Semana OmniStack 2020
 * inicio : 18/01/2020
 * Controllers são camadas de abstração, onde 
 * cada entidade terá o seu onde entra a requsição e é devolvida a resposta
 * 
 * CONTROLE DA ENTIDADE DEV
 * 
 * FUNÇÕES PRINCIPAIS DENTRO DE UM CONTROLLER
 * INDEX, SHOW, STORE, UPDATE, DESTROY
 * INDEX: Listar devs - um index por controller
 * SHOW: Mostrar um dev
 * STORE: Criar um dev
 * UPDATE: Modificar um dev
 * DESTROY: Excluir um dev
 */
const Dev = require('../models/dev');//importando a estrutura de dados do dev
const axios = require('axios');//axios é um pacote que faz conexões com outras apis
const ParseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {//exportando uma função para que fique as funções abstraidas
    //async - função de requisição e resposta não são assincrinas, portanto o async entende esses processos
    async index(request,response){
        const devs = await Dev.find();//como a função vai retornar todos os devs, não é passado filtros no find

        return response.json(devs);//retorna um vetor de devs, cada dev é um objeto
    },

    async store(request, response) {//Named function
        const { github_username, techs, latitude, longitude } = request.body;//O corpo da requisição vai passar as informações que são solicitas o preenchimento

        let dev = await Dev.findOne({ github_username });//buscar no banco de dados um dev já existente
        if (!dev) {/**Se a variavel dev não retornar respostar no banco
            vair retornar nulo e vai entrar no if para casdastrar no banco */
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);//criada a variavel que vai armazenar a resposta da api
            //Aqui que utilizamos o axios, passamos o endereço da api concatenado com o usuario do github
            const { name = login, avatar_url, bio } = apiResponse.data;//pegando as informações selecionadas dentro dos dados de resposta
            const techsArray = ParseStringAsArray(techs);
            /**
             * Os dados inseridos como tecnologias no cadastro do dev entram como string no campo textual
             * precisamos tratá-las com um array, para isso, e subdividido a string com o split, usado a função 
             * map para percorrer o vetor recém criado e utilizamos o trim para tirar os espaçamentos que podem haver
             */
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            /**
             * Criada a contante passando a 
             * nomenclatura do enumerador
             * Passando as coordenadas conforme são aceitas pelo mongoDB
             * primeiro latitude depois longitude
             */

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(dev);
    }
    /**Aqui criamos o a estrutura de dados do dev, onde reunimos toda a informação
     * e enviamos as informações via JSON
     */

};
