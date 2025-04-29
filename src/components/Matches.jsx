export default function Matches() {
  const matches = [
    { 
      type: "previous", 
      teams: ["FURIA", "MongolZ"], 
      score: "0 - 2", 
      tournament: "PGL Bucharest 2025",
      logos: [
        "https://static.draft5.gg/teams/86328-Furia-Gaming.png",
        "https://static.draft5.gg/teams/2635-the-mongolz-c2098cd7f6.png"
      ]
    },
    { 
      type: "previous", 
      teams: ["FURIA", "Virtus.pro"], 
      score: "0 - 2", 
      tournament: "PGL Bucharest 2025",
      logos: [
        "https://static.draft5.gg/teams/86328-Furia-Gaming.png",
        "https://static.draft5.gg/teams/5-Virtuspro.png"
      ]
    },
    { 
      type: "previous", 
      teams: ["FURIA", "Complexity"], 
      score: "1 - 2", 
      tournament: "PGL Bucharest 2025",
      logos: [
        "https://static.draft5.gg/teams/86328-Furia-Gaming.png",
        "https://static.draft5.gg/teams/15-complexity-4a267da945.png"
      ]
    }
  ]

  return (
    <section className="matches-section">
      {matches.map((match, index) => (
        <div className={`match-card ${match.type}-game`} key={index}>
          <div className="team-images">
            <img src={match.logos[0]} alt={match.teams[0]} />
            <span>VS</span>
            <img src={match.logos[1]} alt={match.teams[1]} />
          </div>
          <h3>{match.type === "next" ? "Próximo Jogo" : "Resultado"}</h3>
          <p>{match.score}</p>
          <p>{match.tournament}</p>
        </div>
      ))}
    </section>
  )
}