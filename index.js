/* Require do arquivo de rotas (paletas.route.js)  e definir que as rotas exportadas no route.js serão utilizadas como nossos endpoints. 
 */
const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/paletas.route');

app.use(cors());
app.use(express.json());

app.use('/paletas', route); //Instância da Rota padrão

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
