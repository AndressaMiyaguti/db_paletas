/* Rotas
Começando pelo paletas.route.js, a ideia desse arquivo é manter organizado todas as rotas pelo qual serão enviadas as requisições.
Para trazer as rotas fazemos o require do express e
 criar uma constante router e chamar o método .Router() e a partir dele, recriaremos as rotas.
Como esse arquivo é responsável somente pelas rotas, montaremos uma requisição para trazer as funções do controller e chamaremos as respectivas funções.
Ao fim vamos adicionar um module.exports para deixar essas rotas disponíveis para o nosso arquivo `index.js``. */
const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paletas.controller');

router.get('/find-paletas', paletasController.findPaletasController);//Get para encontrar as paletas
router.get('/find-paleta/:id', paletasController.findPaletaByIdController);//Get paleta por id
router.post('/create', paletasController.createPaletaController);
router.put('/update/:id', paletasController.updatePaletaController);
router.delete('/delete/:id', paletasController.deletePaletaController);

module.exports = router;
