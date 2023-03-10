import React from 'react';
import sobreImg from '../img/sobre-img.png';
import sobreImg2 from '../img/sobre-img2.png';
import styles from './QuemSomos.module.css';
import marcos from '../img/equipe/marcos.png';
import lucas from '../img/equipe/lucas.png';
import pedro from '../img/equipe/pedro.png';
import jonatan from '../img/equipe/jonatan.png';
import jean from '../img/equipe/jean.png';
import Head from '../components/global/Head'

function QuemSomos() {

  return (
    <section className='comeFromBottom'>
      <Head title='Quem Somos'/>
      <div className={`${styles.secao1} container`}>
        <div>
          <h2 className={styles.titulo}>quem somos</h2>
          <p className={styles.content}>
            somos uma loja de produtos eletrônicos, voltada principalmente ao
            público gamer
          </p>
        </div>
        <img
          src={sobreImg}
          className='comeFromRight'
          alt="imagem de um homem jogando e um controle de xbox"
        />
      </div>

      <div className={styles.secao2Bg}>
        <div className={`${styles.secao2} container`}>
          <img
            className='comeFromLeft'
            src={sobreImg2}
            alt="jovem jogando com um oculos de realidade virtual"
          />
          <div>
            <h2 className={styles.titulo}>nossos objetivos</h2>
            <ul className={`${styles.lista} ${styles.content}`}>
              <li>ser o ecommerce referência de tecnologia no mercado.</li>
              <li>
                ser a maior marca representativa do cenário e-sports brasileiro.
              </li>
              <li>
                mudar o acesso a tecnologia com inclusão, sustentabilidade e
                preços baixos.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.secao3} container`}>
        <div>
          <h2 className={styles.titulo}>nossa equipe</h2>
        </div>
        <div className={styles.equipe}>
          <img src={marcos} alt="Marcos Antonio" />

          <img src={lucas} alt="Lucas Queiroz" />

          <img src={pedro} alt="Pedro Rocha" />

          <img src={jonatan} alt="Jonatan Silva" />

          <img src={jean} alt="Jean Diniz" />
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
