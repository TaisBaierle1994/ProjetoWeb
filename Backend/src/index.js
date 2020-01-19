/**
 * Autor: Tais Baierle
 * Semana OmniStack 2020
 * inicio : 13/01/2020
 * Código principal da aplicação, onde feita a conexão
 * com o MongoBD na núvem
 */
const express = require('express');//Resposável pela conexão e roteamento
const mongoose = require('mongoose');//Responsavel pela manipulação do BD não relacional
const routes = require('./routes');//diretório das rotas

const app = express();//instanciando a variavel app com os recursos do express
mongoose.connect('mongodb+srv://admin:457896@cluster0-bvoyt.mongodb.net/devMap?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex: true});//Conexão com o MongoDB, atraves da URL de conexão do BD da núvem
app.use(express.json());//Configurando a aplicação para "entender" requisições/respostas em JSON
app.use(routes);//Adicionando as rotas na aplicação
app.listen(3333);//Determinando a porta que a aplicação irá utilizar
