export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src="/assets/images/pantera.png" alt="pantera" className="about-img" />
        </figure>

        <div className="about-content">
          <p className="about-subtitle">Os 5 FURIOSOS</p>
          <h2 className="about-title">Aqui é FURIA com <strong>GUARRA</strong></h2>
          <p className="about-text">
            A FURIA é mais que um time; é uma força que domina o cenário de CS2 com garra e determinação. Formada por jogadores talentosos e implacáveis, a equipe traz paixão e estratégia para cada partida, inspirando milhões de fãs pelo mundo. Entre para a FURIA e sinta a energia de uma torcida que pulsa a cada bala!
          </p>
          <p className="about-bottom-text">
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            <a href="https://www.furia.gg/quem-somos">
              <button className="btn btn-primary">Veja Nossa História</button>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
