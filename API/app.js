const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('./models/home');
const Home = mongoose.model('Home');

require('./models/contato');
const Contato = mongoose.model('Contato');

require('./models/empresa');
const Empresa = mongoose.model('Empresa')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");

  app.use(cors());

  next();
})

mongoose.connect('mongodb://localhost/api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com o banco realizada com sucesso!!");
}).catch((err) => {
  console.log("Erro: coneão com o banco não foi realizada" + err);
});

// app.get('/', (req, res) => {
//   res.json({name: "Luciano"});
// });

app.get('/home', async (req, res) => {
  
  await Home.findOne({}).then((home) => {
    return res.json({
      error: false,
      home
    });
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum registro encontrado!"
    });
  });
});


app.post('/home', async (req, res) => {

  const dados = {
      "topTitulo": "Temos a solução que sua empresa precisa!",
      "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
      "topTextoBtn": "Entre em contato",
      "topLinkBtn": "http://localhost:3000/", 
      "serTitulo": "Serviços",
      "serSubtitulo": "Featured content or information",
      "serUmIcone": "code",
      "serUmTitulo": "Serviço 1",
      "serUmDesc": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullan id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetyr ac, vestibulum at eros. Praesent cmmodo cursus magna",
      "serDoisIcone": "laptop-code",
      "serDoisTitulo": "Serviço 2",
      "serDoisDesc": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      "serTresIcone": "mobile-alt",
      "serTresTitulo": "Serviço 3",
      "serTresDesc": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mayris condimentum nibh, ut fermentum massa justo sit amet risus.",
  }

  const homeExiste = await Home.findOne({});
  if(homeExiste){
    return res.status(400).json({
      error: true,
      message: "Erro: Página home já possui um registro!"
    });
  }

  await Home.create(dados, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Erro: Página home não cadatrada com sucesso!"
    });
  });

    return res.json({
      error: false,
      message: "Contéudo da página home cadastrada com sucesso!"
    });
});

app.post('/contato', async(req, res) => {
  await sleep(3000);

  function sleep(ms){
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  await Contato.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Erro: Mensagem de contato não cadastrada com sucesso!"
    });
  });

  return res.json({
    error: false,
    message: "Mensagem de contato cadastrado com sucesso!"
  });

});

app.get('/empresa', async (req, res) => {
  await Empresa.findOne({}).then((empresa) => {
    return res.json({
      error: false,
      empresa
    });
  }).catch((err) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum registro encontrado!"
    });
  });
});


app.post('/empresa', async(req, res) => {
  
  const dados = {
    "name": "Luciano Serviços Web",
    "description": "Uma empresa inovadora em serviços web para todos o tipos de clientes, e prestamos diversos serviços web e mobile",
    "we": "Uma empresa focada nas melhores práticas e tecnologias para prestar a sua solução",
    "technology": "Utilizamos NodeJs, Reactjs, React Native, JavaScript e MongoDb",
    "icone1": "javascript",
    "icone2": "node",
    "icone3": "react",

  }

  const empresaExite = await Empresa.findOne({});
  if(empresaExite){
    return res.status(400).json({
      error: true,
      message: "Erro: Página empresa já possui um registro!"
    });
  }

  await Empresa.create(dados, (err) => {
    if(err) return res.status(400).json({
      error: true,
      message: "Erro: Empresa não cadastrada!"
    });
  });

  return res.json({
    error: false,
    message: "Empresa cadastrada com sucesso!"
  });
});


app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080🚀: http://localhost:8080")
});


