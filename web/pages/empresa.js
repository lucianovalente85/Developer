import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


function Empresa({ data }) {

  return (
    <>
    <Head>
      <title>Sobre Empresa </title>
      <meta name="description" content="Sobre a empresa..." />
      <meta name="author" content="Luciano Valente" />
    </Head>
    
    <Menu />

    <Jumbotron fluid className="descr-top">
      <style>
        {`.descr-top{
          background-color: #000;
          color: #fed136;
          padding-top: 100px;
          padding-bottom: 50;
          margin-bottom: 0rem !important;
        }`}
      </style>
      <Container className="text-center">
        <h1 className="display-4">Sobre Empresa</h1>
      </Container>
    </Jumbotron>
    
    <Jumbotron fluid className="emp">
      <style>
          {`.emp{
            background-color: #FFF;
            padding-top: 180px;
            padding-bottom: 180px;
            margin-bottom: 0rem !important;
          }.circulo{
            width: 140px;
            height: 140px;
            background-color: #fed136;
            font-size: 52px;
            padding-top: 24px;
            color: #fff;
          }.centralizar{
            margin: 0 auto !important;
            float: none !important;
          }`}
      </style>
      <Container className="text-center">
        <div>
          <h2 className="display-4">{data.empresa.name}</h2>
          <p className="lead pb-4">{data.empresa.description}</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-6 mb-6">{data.empresa.we}</h2>
          </div>
          <div className="col-md-6">
            <h2 className="mt-6 mb-6">{data.empresa.technology}</h2>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-4">
            <div className="rounded-circle circulo centralizar">
              <FontAwesomeIcon icon={data.empresa.icone1} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-circle circulo centralizar">
              <FontAwesomeIcon icon={data.empresa.icone2} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-circle circulo centralizar">
              <FontAwesomeIcon icon={data.empresa.icone3} />
            </div>
          </div>
        </div>  */}
      </Container>
    </Jumbotron>
    <Rodape />
    </>
  );
}

export async function getServerSideProps(){
  const response = await fetch(`http://localhost:8080/empresa`);
  const data = await response.json();
  return {props: { data }};
}

export default Empresa;