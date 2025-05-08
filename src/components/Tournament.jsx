export default function Tournament() {
  const players = [
    { name: "FalleN", img: "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a" },
    { name: "MOLODOY", img: "https://img-cdn.hltv.org/playerbodyshot/rz-VvCo_RiA_HoLGsDNd6v.png" },
    { name: "Yuurih", img: "https://img-cdn.hltv.org/playerbodyshot/FxsN1PVin9cB-2FPzklmaQ.png" },
    { name: "KSCERATO", img: "https://img-cdn.hltv.org/playerbodyshot/fqwcgzlPrkI1C5lFXiJhrj.png" },
    { name: "YEKINDAR", img: "https://img-cdn.hltv.org/playerbodyshot/-JQfNT1ijoDX06XY6vO4PF.png" }
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
