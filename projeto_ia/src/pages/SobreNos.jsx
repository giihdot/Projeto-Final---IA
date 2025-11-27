import "./SobreNos.css";
import Julia from '../assets/Julia.jpeg';
import Giovanna from '../assets/Giovanna.jpeg';
import Duarte from '../assets/Duarte.jpeg';
import Kamilly from '../assets/Kamilly.jpeg';
import Footer from "../components/Footer";



const integrantes = [
  {
    nome: "GIOVANNA FERREIRA",
    imagem: Giovanna,
    cls: "cards-1"
  },
  {
    nome: "MARIA CLARA DUARTE",
    imagem: Duarte,
    cls: "cards-3"
  },
  {
    nome: "JULIA PIAZZOLI  DOMENEGHETTI",
    imagem: Julia,
    cls: "cards-2"
  },
  {
    nome: "KAMILLY EDUARDA SILVA BARRA",
    imagem: Kamilly,
    cls: "cards-0"
  },
];

function Us() {
  return (
    <>
    <div className="contnr">
      <h1 className="tit"> INTEGRANTES DO GRUPO </h1>
      <br/>
      <p className="subtit">
        As gatitas são um grupo cheio de vida, risadas e cumplicidade. 
        Cada uma tem seu jeitinho único — e juntas, formam uma mistura perfeita de carinho, fé e amizade verdadeira. 
        Entre conversas, sonhos e planos, elas se apoiam, se divertem e tornam cada momento mais especial.
      </p>

      <br/>
      

      <div className="gridd">
  {integrantes.map((pessoa, index) => (
    <div key={index} className={`cards card-${pessoa.cls}`}>
      <div className="imag-conter">
         <span className="glow" />
        <img src={pessoa.imagem} alt={pessoa.nome} />
      </div>
      <br/>
        <br/>
      <h2 className="nome">{pessoa.nome}</h2>
    </div>
        ))}

        <br />

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Us