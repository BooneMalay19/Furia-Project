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
  upcomingMatches: [
    { 
      date: "15/05/2024", 
      opponent: "Team Liquid", 
      event: "ESL Pro League",
      time: "19:00",
      format: "MD3 (Melhor de 3)"
    },
    { 
      date: "22/05/2024", 
      opponent: "Natus Vincere", 
      event: "BLAST Premier",
      time: "20:30",
      format: "MD3"
    },
    { 
      date: "30/05/2024", 
      opponent: "Fnatic", 
      event: "IEM Dallas",
      time: "18:00",
      format: "MD3"
    }
  ],
  last6months: {
    tournements: 12,
    matches: 38,
    winrate: 45,
    mapsPlayed: 83,
    roundsPlayed: 1782,
    roundsWinRate: 52
  },
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
      "Loja integrada",
      "Calendário de jogos"
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
    },
    discord: {
      handle: "FURIA Esports",
      url: "https://discord.gg/furia"
    }
  }
};

export const getBotResponse = (message) => {
  const lowerMsg = message.toLowerCase();
  
  // Verificação de termos permitidos (incluindo "próximos jogos" e variações)
  if (!/furia|cs|time|jogador|partida|mapa|estat|coach|liga|torneio|evento|resultado|app|aplicativo|rede|social|próxim|proxim|jogo|calendário|calendario/i.test(lowerMsg)) {
    return "Só respondo perguntas sobre o time da FURIA 😎";
  }

  // Resposta sobre próximos jogos (CORREÇÃO APLICADA AQUI)
  if (/próximos jogos|proximos jogos|próximo jogo|proximo jogo|próximas partidas|proximas partidas|calendário|calendario|quando joga|quando é o próximo/i.test(lowerMsg)) {
    return "Em breve mais informações";
  }

  // Resposta sobre o aplicativo
  if (/app|aplicativo|download|instalar/i.test(lowerMsg)) {
    return `📱 ${furiaStats.app.name} - App Oficial:\n` +
      `${furiaStats.app.description}\n\n` +
      `⭐ Principais recursos:\n` +
      furiaStats.app.features.map(f => `• ${f}`).join('\n') +
      `\n\n⬇️ Baixe agora:\n` +
      `• Android: ${furiaStats.app.download.android}\n` +
      `• iOS: ${furiaStats.app.download.ios}\n\n` +
      `Não perca nenhum detalhe do time FURIA!`;
  }

  // Resposta sobre redes sociais (atualizada com Discord)
  if (/rede social|redes|social|twitter|insta|instagram|youtube|tiktok|discord/i.test(lowerMsg)) {
    return `🌐 Redes Sociais Oficiais:\n\n` +
      `• Twitter ${furiaStats.socialMedia.twitter.handle}: ${furiaStats.socialMedia.twitter.url}\n` +
      `• Instagram ${furiaStats.socialMedia.instagram.handle}: ${furiaStats.socialMedia.instagram.url}\n` +
      `• YouTube ${furiaStats.socialMedia.youtube.handle}: ${furiaStats.socialMedia.youtube.url}\n` +
      `• TikTok ${furiaStats.socialMedia.tiktok.handle}: ${furiaStats.socialMedia.tiktok.url}\n` +
      `• Discord ${furiaStats.socialMedia.discord.handle}: ${furiaStats.socialMedia.discord.url}\n\n` +
      `📲 Siga-nos para conteúdo exclusivo e interação com a comunidade!`;
  }

  // Resposta sobre o time atual
  if (/time|elenco|jogador|roster|equipe/i.test(lowerMsg)) {
    return `🦁 Time Principal de CS:GO:\n\n` +
      `• ${furiaStats.players.Rifler} (Rifler Principal)\n` +
      `• ${furiaStats.players.IGL} (IGL - Líder do time)\n` +
      `• ${furiaStats.players.EntryFragger} (Entry Fragger)\n` +
      `• ${furiaStats.players.Support} (Suporte)\n` +
      `• ${furiaStats.players.AWPer} (Awper)\n\n` +
      `👨‍🏫 Coach: ${furiaStats.coach}\n` +
      `💼 Staff: Analista Tático, Psicólogo e Preparador Físico`;
  }

  // Resposta sobre última partida
  if (/últim|recente|ultim|partida|resultado recente/i.test(lowerMsg)) {
    const lastMatch = furiaStats.lastMatch;
    return `📌 Último Jogo - ${lastMatch.date}:\n\n` +
      `🏆 Torneio: ${lastMatch.league}\n` +
      `🆚 Adversário: ${lastMatch.opponent}\n` +
      `📊 Resultado: ${lastMatch.result} (${lastMatch.score})\n\n` +
      `🔍 Detalhes: Partida ${lastMatch.score} no formato MD2`;
  }

  // Resposta sobre histórico
  if (/histórico|resultado|desempenho|performance|últimos jogos|ultimos jogos/i.test(lowerMsg)) {
    return `📈 Desempenho Recente:\n\n` +
      `📅 Últimos 5 jogos:\n` +
      furiaStats.lastfiveMatches.map(m => 
        `• ${m.opponent}: ${m.result} (${m.score})`
      ).join('\n') + 
      `\n\n📊 Últimos 6 meses:\n` +
      `• ${furiaStats.last6months.matches} partidas disputadas\n` +
      `• ${furiaStats.last6months.winrate}% de vitórias\n` +
      `• ${furiaStats.last6months.roundsWinRate}% de rounds ganhos\n` +
      `• ${furiaStats.last6months.tournements} torneios participados`;
  }

  // Resposta sobre mapas
  if (/mapa|winrate|porcentagem|melhor mapa|pior mapa/i.test(lowerMsg)) {
    return `🗺️ Performance por Mapas:\n\n` +
      `📌 Winrate nos últimos 3 meses:\n` +
      Object.entries(furiaStats.mapsWinRate)
        .sort((a, b) => b[1] - a[1])
        .map(([map, rate]) => `• ${map}: ${rate}% de vitórias`)
        .join('\n') +
      `\n\n🔎 Time mais confortável em Dust2 (${furiaStats.mapsWinRate["Dust2"]}%)`;
  }

  // Resposta sobre estatísticas gerais
  if (/estat|número|dado|vitóri|derrot|performance geral/i.test(lowerMsg)) {
    return `📊 Estatísticas do Time:\n\n` +
      `• Vitórias: ${furiaStats.victories}\n` +
      `• Derrotas: ${furiaStats.defeats}\n` +
      `• Total de rounds jogados: ${furiaStats.totalRounds}\n` +
      `• Winrate últimos 6 meses: ${furiaStats.last6months.winrate}%\n` +
      `• Média de rounds por mapa: ${Math.round(furiaStats.last6months.roundsPlayed/furiaStats.last6months.mapsPlayed)}\n\n` +
      `📈 Time em ascensão no cenário internacional!`;
  }

  // Resposta padrão para outras perguntas
  return `🤔 Não entendi completamente. Você pode perguntar sobre:\n\n` +
    `• "Próximos jogos" - Calendário de partidas\n` +
    `• "Time atual" - Elenco principal\n` +
    `• "Últimos resultados" - Desempenho recente\n` +
    `• "Estatísticas" - Números do time\n` +
    `• "Mapas" - Performance por cenário\n` +
    `• "App FURIA" - Aplicativo oficial\n` +
    `• "Redes sociais" - Onde nos seguir\n\n` +
    `🦁 #VEMPRAFURIA`;
};
