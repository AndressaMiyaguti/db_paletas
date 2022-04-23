/* Service
O Service será nossa camada mais interna e responsável pelo tratamento das informações, lidando com regras de negócio e contato com o banco de dados (no nosso caso um array de objetos).
Assim vamos trazer nossos dados para esse arquivo e criar as respectivas funções que são chamadas pelo Controller.
Nessas funções, vamos utilizar a mesma estrutura que criamos na primeira aula, portanto:
No findPaletasService apenas retornaremos o array com todas as paletas;
No findPaletaByIdService receberemos o id do controller e realizaremos o .find() para encontrar;
Com o registro localizado, retornarmos a paleta escolhida. */

const paletas = [
  //Simulação do banco de dados
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: './assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

const findPaletasService = () => {
  //No findPaletasService retornamos o array com todas as paletas;
  return paletas;
};

const findPaletaByIdService = (id) => {
  // Receberemos o id do controller e usamos o .find() para encontrar; id vindo do idpParam
  const paleta = paletas.find((objeto) => {
    objeto.id == id;
  }); //retorno da paleta escolhida

  if (paleta === undefined) {
    console.log('Nenhuma paleta foi encontrada');
  }
  return paleta;
};

const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;

  if(newPaleta.preco < 0 ){
    return null;
  }
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
 
  if(paletaIndex === undefined ){
    return { message: "Nenhuma paleta encontrada."};
  }

  paletas[paletaIndex] = paletaEdited;

  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
