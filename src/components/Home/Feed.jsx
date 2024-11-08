import "./Feed.css";
import Bee from "./assets/Bee";
import React from "react";
import Kay from "./img/kay.png";
import PaperPlane from "./img/aviãoDePapel.png";
import Heart from "./img/Coração.png";
import Ballon from "./img/balão.png";
import Verify from "./img/verify.png";

const Feed = () => {
  return (
    <section className="feed">
      <div className="feedLayout">
        <div className="post">
          <div className="postHeader">
            <div className="imagePerfil">
              <Bee />
            </div>
            <div className="namePerfil">
              <p>Kay_boujour</p>
            </div>
            <div className="decorationNamePerfil">
              <p>.</p>
            </div>
            <div className="explication">
              <p>Atingiu a marca de 5 dias em primeiro lugar em nosso pódio!</p>
            </div>
          </div>
          <div className="publication">
            <img src={Kay} alt="Imagem exemplo de uma publicação" />
            <div className="iconComents">
              <div className="leftIcons">
                <img src={Heart} alt="icone de coração" />
                <img src={Ballon} alt="icone de balão de diálogo" />
                <img src={PaperPlane} alt="icone de avião de papel" />
              </div>
              <div className="rightIcon">
                {/* Se precisar de ícone adicional, adicione aqui */}
              </div>
            </div>
            <div className="coments">
              <div className="nameComents">
                <p>Kay_bonjour</p>
                <img src={Verify} alt="icone de verificado" className="verificatedIcon" />
              </div>
              <div className="comentsText">
                <p>
                  Muito feliz de seguir em primeiro, gratidão a deus e a frase é:
                  “9,5 não me contenta quero o maldito primeiro lugar do pódio”.
                  #TantasBrigasSemNescessidade
                </p>
              </div>
            </div>
            <div className="moreComents">
              <p>Ver todos os 1250 comentários</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;
