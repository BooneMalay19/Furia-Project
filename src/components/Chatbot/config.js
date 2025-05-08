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
  whatsapp: {
    number: "+5511999999999", // Substitua pelo número oficial da FURIA
    url: "https://wa.me/5511999999999", // Link direto para WhatsApp
    description: "Canal oficial de comunicação da FURIA Esports",
    features: [
      "Suporte direto com a organização",
      "Alertas de jogos ao vivo",
      "Conteúdos exclusivos",
      "Promoções especiais"
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
  
  // Verificação de termos permitidos (atualizado com "whatsapp")
  if (!/furia|cs|time|jogador|partida|mapa|estat|coach|liga|torneio|evento|resultado|whatsapp|zap|rede|social|próxim|proxim|jogo|calendário|calendario/i.test(lowerMsg)) {
    return "Só respondo perguntas sobre o time da FURIA 😎";
  }

  // Resposta sobre próximos jogos
  if (/próximos jogos|proximos jogos|próximo jogo|proximo jogo|próximas partidas|proximas partidas|calendário|calendario|quando joga|quando é o próximo/i.test(lowerMsg)) {
    return "Em breve mais informações";
  }

  // Resposta sobre WhatsApp (substitui o aplicativo)
  if (/whatsapp|zap|contato|suporte|comunicação/i.test(lowerMsg)) {
    return `📱 *WhatsApp Oficial da FURIA*\n\n` +
      `${furiaStats.whatsapp.description}\n\n` +
      `🔹 Principais recursos:\n` +
      furiaStats.whatsapp.features.map(f => `• ${f}`).join('\n') +
      `\n\n💬 Converse conosco: ${furiaStats.whatsapp.url}`;
  }

  // Resposta sobre redes sociais (atualizada)
  if (/rede social|redes|social|twitter|insta|instagram|youtube|tiktok|discord/i.test(lowerMsg)) {
    return `🌐 Redes Sociais Oficiais:\n\n` +
      `• Twitter ${furiaStats.socialMedia.twitter.handle}: ${furiaStats.socialMedia.twitter.url}\n` +
      `• Instagram ${furiaStats.socialMedia.instagram.handle}: ${furiaStats.socialMedia.instagram.url}\n` +
      `• YouTube ${furiaStats.socialMedia.youtube.handle}: ${furiaStats.socialMedia.youtube.url}\n` +
      `• TikTok ${furiaStats.socialMedia.tiktok.handle}: ${furiaStats.socialMedia.tiktok.url}\n` +
      `• Discord ${furiaStats.socialMedia.discord.handle}: ${furiaStats.socialMedia.discord.url}\n\n` +
      `📲 Siga-nos para conteúdo exclusivo!`;
  }

  // Resposta sobre o time atual
  if (/time|elenco|jogador|roster|equipe/i.test(lowerMsg)) {
    return `🦁 Time Principal de CS2:\n\n` +
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

  // Resposta padrão (atualizada com WhatsApp)
  return `🤔 Não entendi completamente. Você pode perguntar sobre:\n\n` +
    `• "Próximos jogos" - Calendário de partidas\n` +
    `• "Time atual" - Elenco principal\n` +
    `• "Últimos resultados" - Desempenho recente\n` +
    `• "Estatísticas" - Números do time\n` +
    `• "WhatsApp" - Contato oficial\n` +
    `• "Redes sociais" - Onde nos seguir\n\n` +
    `🦁 #VEMPRAFURIA`;
};
