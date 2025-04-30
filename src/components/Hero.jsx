export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/assets/images/hero-banner1.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      <div className="overlay"></div>
      <div className="container">
        <p className="hero-subtitle">CS2 Team SOMOS</p>
        <h1 className="h1 hero-title">FURIA</h1>
        <div className="btn-group">
          <a href="https://www.furia.gg" className="btn btn-primary">
            <span>Vista o Manto</span>
            <ion-icon name="play-circle"></ion-icon>
          </a>
          <a href="https://themove.gg" className="btn btn-link">The Move</a>
        </div>
      </div>
    </section>
  )
}
