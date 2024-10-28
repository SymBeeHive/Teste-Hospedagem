import "./Tags.css";
import IconeLupaPreta from "./img/iconeLupaPreta.png"
import React from "react";

const Tags = () => {
  return (
    <section>
      <div className="tagsPage">
        <div className="layoutTags">
          <div className="tagsTitle">
            <h1>Escolha tags que são relevantes para você</h1>
          </div>
          <div className="SubtitleTags">
            <p>Seja o mais específico possível.</p>
          </div>
          <div className="search">
          <img src={IconeLupaPreta} alt="icone de luva para pesquisa" class="input-icon"/>
            <input type="text" placeholder="Outra..." class="input-field" />
          </div>
          <div className="tagsLanguages">
          <div class="tag">Java</div>
        <div class="tag">React</div>
        <div class="tag">API</div>
        <div class="tag">C++</div>
        <div class="tag">Kotlin</div>
        <div class="tag">Lua</div>
        <div class="tag">JavaScript</div>
        <div class="tag">Ruby</div>
        <div class="tag">TypeScript</div>
        <div class="tag">PHP</div>
        <div class="tag">MongoDB</div>
        <div class="tag">Bootstrap</div>
        <div class="tag">C</div>
        <div class="tag">Go Lang</div>
        <div class="tag">Design</div>
        <div class="tag">Cobol</div>
        <div class="tag">MySQL</div>
          </div>
        </div>
      </div>
      <div className="buttonArea">
          <div className="continueButton">
            <button>Continuar</button>
        </div>
        </div>
    </section>
  );
};

export default Tags;