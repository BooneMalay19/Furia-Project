// src/components/Chatbot/config.js
export const furiaStats = {
  victories: 25,
  defeats: 5,
  totalRounds: 1500,
  players: {
    Rifler: "KSCERTO",
    IGL: "Fallen",
    EntryFragger: "Yekindar",
    Support: "Yuurih",
    AWPer: "Molodoy",
  },
  lastMatch: {
    date: "2025-04-09",
    league: "PGL Bucharest 2025",
    opponent: "The Mongolz",
    result: "Derrota",
    score: "0-2",
  },
  coach: "Sid 'Sidde' Macedo",
  lastfiveMatches: [
    { opponent: "The MongolZ", result: "Derrota", score: "0-2" },
    { opponent: "Virtus Pro", result: "Derrota", score: "0-2" },
    { opponent: "Complexity", result: "Derrota", score: "1-2" },
    { opponent: "Betclic", result: "Vitoria", score: "2-0" },
    { opponent: "M80", result: "Derrota", score: "1-2" },
  ],
  lastfiveMatchesResults: {
    wins: 1,
    losses: 4,
  },
  mapsWinRate: {
    "Dust2": 53.8,
    "Mirage": 44.4,
    "Train": 40,
    "Anubis": 37.5,
    "Nuke": 33.3,
    "Inferno": 28.6
  },
  upComingEvent: "BLAST.tv Austin Major 2025 Stage 2",
  last6months: {
    tournements: 12,
    matches: 38,
    winrate: 45,
    mapsPlayed: 83,
    roundsPlayed: 1782,
    roundsWinRate: 52
  },
  // Novos dados adicionados
  app: {
    name: "FURIA Nation",
    description: "O aplicativo oficial com notícias, estatísticas e conteúdo exclusivo",
    download: {
      android: "https://play.google.com/store/apps/details?id=com.furia.nation",
      ios: "https://apps.apple.com/br/app/furia-nation/id123456789"
    },
    features: [
      "Notificações de jogos ao vivo",
      "Estatísticas em tempo real",
      "Conteúdo exclusivo para membros",
      "Loja integrada"
    ]
  },
  socialMedia: {
    twitter: {
      handle: "@FURIA",
      url: "https://twitter.com/FURIA"
    },
    instagram: {
      handle: "@furiagg",
      url: "https://instagram.com/furiagg"
    },
    youtube: {
      handle: "FURIA Esports",
      url: "https://youtube.com/FURIAesports"
    },
    tiktok: {
      handle: "@furiagg",
      url: "https://tiktok.com/@furiagg"
    }
  }
};

export const getBotResponse = (message) => {
  const lowerMsg = message.toLowerCase();
  
  // Resposta padrão para perguntas não relacionadas
  if (!/furia|cs|time|jogador|partida|mapa|estat|coach|liga|torneio|evento|resultado|app|aplicativo|rede|social/i.test(lowerMsg)) {
    return "Só respondo perguntas sobre o time da FURIA 😎";
  }

  // Resposta sobre o aplicativo
  if (/app|aplicativo|download|instalar/i.test(lowerMsg)) {
    return `📱 ${furiaStats.app.name} - App Oficial:\n` +
      `${furiaStats.app.description}\n\n` +
      `🔹 Principais recursos:\n` +
      furiaStats.app.features.map(f => `• ${f}`).join('\n') +
      `\n\n⬇️ Download:\n` +
      `• Android: ${furiaStats.app.download.android}\n` +
      `• iOS: ${furiaStats.app.download.ios}`;
  }

  // Resposta sobre redes sociais
  if (/rede social|redes|social|twitter|insta|instagram|youtube|tiktok/i.test(lowerMsg)) {
    return `📲 Redes Sociais da FURIA:\n` +
      `• Twitter (${furiaStats.socialMedia.twitter.handle}): ${furiaStats.socialMedia.twitter.url}\n` +
      `• Instagram (${furiaStats.socialMedia.instagram.handle}): ${furiaStats.socialMedia.instagram.url}\n` +
      `• YouTube (${furiaStats.socialMedia.youtube.handle}): ${furiaStats.socialMedia.youtube.url}\n` +
      `• TikTok (${furiaStats.socialMedia.tiktok.handle}): ${furiaStats.socialMedia.tiktok.url}\n\n` +
      `Siga-nos para conteúdo exclusivo!`;
  }

  // Respostas existentes (time, estatísticas, etc.)
  if (/time|elenco|jogador/i.test(lowerMsg)) {
    return `🔫 Time atual da FURIA:\n` +
      `• ${furiaStats.players.Rifler} (Rifler)\n` +
      `• ${furiaStats.players.IGL} (IGL)\n` +
      `• ${furiaStats.players.EntryFragger} (Entry Fragger)\n` +
      `• ${furiaStats.players.Support} (Support)\n` +
      `• ${furiaStats.players.AWPer} (AWPer)\n` +
      `\nCoach: ${furiaStats.coach}`;
  }

  if (/últim|recente|ultim|partida/i.test(lowerMsg)) {
    const lastMatch = furiaStats.lastMatch;
    return `📅 Última partida (${lastMatch.date}):\n` +
      `• ${lastMatch.league}\n` +
      `• vs ${lastMatch.opponent}\n` +
      `• Resultado: ${lastMatch.result} (${lastMatch.score})`;
  }

  if (/histórico|resultado|desempenho|performance/i.test(lowerMsg)) {
    return `📊 Últimos 5 jogos:\n` +
      furiaStats.lastfiveMatches.map(m => 
        `• ${m.opponent}: ${m.result} (${m.score})`
      ).join('\n') + 
      `\n\n📈 Últimos 6 meses:\n` +
      `• ${furiaStats.last6months.matches} partidas\n` +
      `• ${furiaStats.last6months.winrate}% de vitórias\n` +
      `• ${furiaStats.last6months.roundsWinRate}% de rounds ganhos`;
  }

  if (/mapa|winrate|porcentagem/i.test(lowerMsg)) {
    return `🗺️ Winrate por mapa:\n` +
      Object.entries(furiaStats.mapsWinRate).map(
        ([map, rate]) => `• ${map}: ${rate}%`
      ).join('\n');
  }

  if (/próxim|proxim|evento|torneio|jogo/i.test(lowerMsg)) {
    return `🎮 Próximo evento:\n` +
      `• ${furiaStats.upComingEvent}\n\n` +
      `📅 Próximos jogos:\n` +
      `• Em breve mais informações!`;
  }

  if (/estat|número|dado|vitóri|derrot/i.test(lowerMsg)) {
    return `📊 Estatísticas gerais:\n` +
      `• Vitórias: ${furiaStats.victories}\n` +
      `• Derrotas: ${furiaStats.defeats}\n` +
      `• Total de rounds: ${furiaStats.totalRounds}\n` +
      `• Winrate últimos 6 meses: ${furiaStats.last6months.winrate}%`;
  }

  return "🤔 Não entendi completamente. Você pode perguntar sobre:\n" +
    "• O time atual\n" +
    "• Últimas partidas\n" +
    "• Estatísticas\n" +
    "• Próximos jogos\n" +
    "• Desempenho por mapas\n" +
    "• Nosso aplicativo\n" +
    "• Redes sociais";
};
