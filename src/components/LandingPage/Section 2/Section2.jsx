import React from "react";
import styles from "./Section2.module.css";
import mel from "../img/lower-liquify-section2.svg";
import Num from "../../Home/Ranking/Num";

function Section2() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.info}>
          <h1 className={styles.subTitle}>Alcance o topo!</h1>
          <span id={styles.description}>
            Mostre que você é o melhor no que faz:
          </span>
          <div className={styles.beehive}>
            <span className={styles.honey}>Fazendo projetos;</span>
            <span className={styles.honey}>Praticando a simbiose;</span>
            <span className={styles.honey}>Participando de eventos;</span>
            <span className={styles.honey}>Interagindo com a comunidade;</span>
            <span className={styles.honey}>Ganhando conquistas;</span>
            <span className={styles.honey}>Mantendo-se ativo;</span>
            <span className={styles.honey}>Desafiando-se;</span>
          </div>
        </div>
        <div className={styles.users_ranking}>
          <div className={styles.top}>
            <Num
              nome="Kay_bonjour"
              colocacao="1"
              stroke="#EE9B11"
              dotColor="transparent"
              bg="#F9D504"
              color="#1e1d1d"
              fonte="20px"
              scale="1.4"
            />
          </div>

          <div className={styles.others}>
            <Num
              nome="KyanMaloca"
              colocacao="2"
              stroke="#7100B2"
              dotColor="#7100B2"
              bg="#7100B2"
              color="#eaeaea"
              fonte="13px"
            />
            <Num
              nome="takeshi"
              colocacao="3"
              stroke="#3D1B11"
              dotColor="#3D1B11"
              bg="#3D1B11"
              color="#fff"
              fonte="13px"
            />
            <Num
              nome="CactusJack"
              colocacao="4"
              stroke="#1E1D1D"
              color="#fff"
              bg="#1e1d1d"
              fonte="13px"
            />
            <Num
              nome="MuuhPro"
              colocacao="5"
              stroke="#1E1D1D"
              color="#fff"
              bg="#1e1d1d"
              fonte="13px"
            />
          </div>
        </div>
      </section>
      <img src={mel} style={{position: 'relative', zIndex: '1'}} />
    </>
  );
}

export default Section2;