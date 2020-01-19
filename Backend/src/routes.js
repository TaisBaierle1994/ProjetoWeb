/**
 * Autor: Tais Baierle
 * Semana OmniStack 2020
 * inicio : 15/01/2020
 * Código onde são criadas as rotas
 * de requisição e resposta do banco de dados
 */

const DevController = require('./controllers/DevController')//inportando a função requisição/resposta
const SearchController = require('./controllers/SearchController')
const {Router} = require('express')//importando função de roteamento do express

const routes = Router();//criando uma constante que é intanciada com a propriedade de roteamento do express
/**
 * usando a constante routes, utilizando o métodd post, não qual envia informações
 * é passado como paramentro a rota '/dev'
*/
routes.post('/devs',DevController.store);//passando o DevController para a rota
routes.get('/devs',DevController.index); //Rota para listar os devs cadastrados, como o método http é diferente pode ser a mesma rota

routes.get('/search',SearchController.index);
module.exports = routes;
