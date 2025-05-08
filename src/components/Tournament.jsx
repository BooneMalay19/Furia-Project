export default function Tournament() {
  const players = [
    { name: "FalleN", img: "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a" },
    { name: "MOLODOY", img: "https://img-cdn.hltv.org/playerbodyshot/qNyAd_xVHTTmbCAKPx-jPk.png?ixlib=java-2.1.0&w=400&s=b128ede878e462107c70590202b14139" },
    { name: "Yuurih", img: "https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb" },
    { name: "KSCERATO", img: "https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca" },
    { name: "YEKINDAR", img: "https://img-cdn.hltv.org/playerbodyshot/rRclDPBXIMxFv2fv0dV0J0.png?ixlib=java-2.1.0&w=400&s=2b0f6209ca40efa081852b9d1d8e01c1" }
  ]

  return (
    <section className="tournament" id="tournament">
      <div className="container">
        <div className="tournament-content">
          <p className="tournament-subtitle">Alou Furioso</p>
          <h2 className="h3 tournament-title">Nossos Campeonatos !</h2>
          <p className="tournament-text">
            Aki você ficará por dentro de todas as novidades dos nossos Panteras.
          </p>
          <a href="https://www.instagram.com/furiagg" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Instagram</button>
          </a>
        </div>

        <div className="tournament-prize">
          <h2 className="h3 tournament-prize-title">Nossa Line</h2>
          <div className="card-wrapper">
            {players.map((player) => (
              <div className="card" key={player.name}>
                <img src={player.img} alt={player.name} />
                <div className="player-name">{player.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
