
API Restful DevMap

BackEnd 
-------------------------------------------------------------
- Configuração da conexão com o MongoDB
- Configuração das rotas de conexão
- Métodos http: POST, GET, DELETE, PUT
- Abstração das funções de requisição/resposta
- Configuração das entidades - estruturas de dados dos componentes/dev
- Trabalhando no Windows, com os gerenciadores de pacotes
  - Chocolatey,
  - Yarn,
- Bibliotecas utilizadas no Backend
  - Express - Roteamento e conexões http
  - Mongoose - Manipulação do MongoDB
  - Nodemon - para automatizar a conexão com o server
  - Axios - Para requisitar dados de outras APIs
- validação para não duplicar informações no BD
- Utilização do método GET para listar os devs
- REGRAS DRY - DON'T REPEAT YOURSELF
  - Lógicas que podem ser reautilizadas em demais partes do código, pode ser isoladas e reutilizadas
 não sendo necessário copiar e colar
 
 Front-End
 ------------------------------------------------------------
Existem duas abordagens:
- Abordagem Tradicional
  - Na abordagem tradicional, a cada requisição o servidor retorna o conteudo completo da página, contendo
    todo o HTML e CSS;
  - Essa abordagem limita o front-end para o browser,  já que o aplicativo mobile ou serviços externos não vão conseguir interpretar o HTML;
  - O browser faz uma requisição ao backend, os receber a requsição, o backend busca o conteudo, e devolve como HTML/CSS/JS(usando os Templates engines), ou seja devolve a pagina completa. Portanto o Backend faz toda a parte "pesada", regra de negocio, montar as páginas, apresentação.

- Abordagem de SPA - Single-page Application
  - Na abordagem de SPA, as requisições trazem apenas dados como respostas, com esses dados, o front-end pode preencher as informações em tela;
  - A página nunca recarrega, otimizando a performance e dando vida ao conceito de SPA. Retornando apenas JSON podemos ter quantos front-ends quisermos;
  - O HTML/CSS/JS da interface fica a encargo do próprio front-end, não encarregando o servidor por essa parte visual;
  - Quando o front-end com o React faz uma requisição, o backend devolve um JSON que é tratado pelo front-end, e monta a tela;
