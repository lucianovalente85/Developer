SEQUENCIA PARA CRIAR O PROJETO

Criar o arquivo package.json
### npm init -y(Essa tag -y, aceita as configurações padrões de um projeto node.js)

Instalar um pacote para gerenciamento das requisições, rotas e URLs
###  npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte.
### npm install nodemon -g

Instalar o banco de dados MongoDB
### npm install mongodb

Instalar o Mongoose - traduz os dados do banco para objetos javascript
### npm install mongoose 

Permitir o acesso da API
### npm install cors

Gerar o backup do banco de dados MongoDB
### mongodump --db api --out C:\data\db

Restaurar o backup do banco de dados Mongodb
### mongorestore --db api C:\data\db\api


