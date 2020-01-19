/**
 * Função que tranforma uma string num array de string
 * que pode ser chamada em qualquer parte do projeto
 */

module.exports = function ParseStringAsArray(ArrayAsString){

    return ArrayAsString.split(',').map(tech => tech.trim());
}