/* Controller
Criar as funções que serão chamadas pelo route.js, como esse arquivo é responsável pelas respostas das requisições e o tratamento básico dos dados,
a única coisa que faremos nessas funções é chamar as funções que serão preparadas no nosso service.
Montando um require para o Service e em cada função chamaremos a função responsável, dessa maneira guardaremos o resultado em uma constante para
enviar como resposta da requisição. */

const paletasService = require('../services/paletas.service');

const findPaletasController = (req, res) => {
  const allPaletas = paletasService.findPaletasService();//Acessa o paletasService trazendo todas as paletas
  res.send(allPaletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletasService.findPaletaByIdService(idParam);//Acessa o paletasService trazendo uma paleta.
  res.send(chosenPaleta);//Informação enviada para o fronend
};

const createPaletaController = (req, res) => { //Chamada da função do Service e separar o JSON com a paleta para enviar na função.
  const paleta = req.body;
  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {//Chama da função e enviar o id e a paleta editada.
  const idParam = +req.params.id;// OU PODE SER USADO O parseInt para converter em número
  const paletaEdit = req.body;
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {//Chama a função e enviar o id para identificarmos no service o objeto que será deletado.
  const idParam = req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
