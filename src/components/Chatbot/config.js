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
  whatsapp: {
    number: "+5511999999999", // Número oficial da FURIA
    url: "https://wa.me/5511999999999?text=Olá%20FURIA%20Esports!", // Link com mensagem pré-pronta
    description: "Fale diretamente com a FURIA pelo WhatsApp!",
    features: [
      "Respostas rápidas da equipe",
      "Suporte para fãs",
      "Informações sobre eventos",
      "Promoções exclusivas"
    ],
    buttonLabel: "💬 Chamar no WhatsApp" // Texto do botão
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
  
  // Verificação de termos permitidos (incluindo WhatsApp)
  if (!/furia|cs|time|jogador|partida|mapa|estat|coach|liga|torneio|evento|resultado|whatsapp|zap|rede|social|próxim|proxim|jogo|calendário|calendario/i.test(lowerMsg)) {
    return "Só respondo perguntas sobre o time da FURIA 😎";
  }

  // Resposta sobre próximos jogos
  if (/próximos jogos|proximos jogos|próximo jogo|proximo jogo|próximas partidas|proximas partidas|calendário|calendario|quando joga|quando é o próximo/i.test(lowerMsg)) {
    return "Em breve mais informações";
  }

  // Resposta sobre WhatsApp (substitui o aplicativo)
  if (/whatsapp|zap|contato|suporte|comunicação|falar|conversar/i.test(lowerMsg)) {
    return `📱 *WhatsApp Oficial da FURIA*\n\n` +
      `${furiaStats.whatsapp.description}\n\n` +
      `🔹 O que você pode fazer:\n` +
      furiaStats.whatsapp.features.map(f => `• ${f}`).join('\n') +
      `\n\n👉 Clique no botão abaixo para conversar:\n` +
      `[${furiaStats.whatsapp.buttonLabel}](${furiaStats.whatsapp.url})`; // Botão clicável
  }

  // Resposta sobre redes sociais
  if (/rede social|redes|social|twitter|insta|instagram|youtube|tiktok|discord/i.test(lowerMsg)) {
    return `🌐 *Redes Sociais da FURIA*\n\n` +
      `• Twitter: [${furiaStats.socialMedia.twitter.handle}](${furiaStats.socialMedia.twitter.url})\n` +
      `• Instagram: [${furiaStats.socialMedia.instagram.handle}](${furiaStats.socialMedia.instagram.url})\n` +
      `• YouTube: [${furiaStats.socialMedia.youtube.handle}](${furiaStats.socialMedia.youtube.url})\n` +
      `• TikTok: [${furiaStats.socialMedia.tiktok.handle}](${furiaStats.socialMedia.tiktok.url})\n` +
      `• Discord: [${furiaStats.socialMedia.discord.handle}](${furiaStats.socialMedia.discord.url})\n\n` +
      `📲 *Prefere WhatsApp?* Clique aqui: [💬 Chamar no WhatsApp](${furiaStats.whatsapp.url})`;
  }

  // Resposta sobre o time atual
  if (/time|elenco|jogador|roster|equipe/i.test(lowerMsg)) {
    return `🦁 *Time Principal de CS2*\n\n` +
      `• ${furiaStats.players.Rifler} (Rifler Principal)\n` +
      `• ${furiaStats.players.IGL} (IGL - Líder do time)\n` +
      `• ${furiaStats.players.EntryFragger} (Entry Fragger)\n` +
      `• ${furiaStats.players.Support} (Suporte)\n` +
      `• ${furiaStats.players.AWPer} (Awper)\n\n` +
      `👨‍🏫 *Coach*: ${furiaStats.coach}\n` +
      `💼 *Staff*: Analista Tático, Psicólogo e Preparador Físico\n\n` +
      `👉 *Dúvidas?* [Chamar no WhatsApp](${furiaStats.whatsapp.url})`;
  }

  // Resposta sobre última partida
  if (/últim|recente|ultim|partida|resultado recente/i.test(lowerMsg)) {
    const lastMatch = furiaStats.lastMatch;
    return `📌 *Último Jogo - ${lastMatch.date}*\n\n` +
      `🏆 Torneio: ${lastMatch.league}\n` +
      `🆚 Adversário: ${lastMatch.opponent}\n` +
      `📊 Resultado: ${lastMatch.result} (${lastMatch.score})\n\n` +
      `🔍 *Detalhes*: Partida ${lastMatch.score} no formato MD2\n\n` +
      `👉 *Quer detalhes?* [Chamar no WhatsApp](${furiaStats.whatsapp.url})`;
  }

  // Resposta padrão (com botão para WhatsApp)
  return `🤔 *Não entendi completamente.* Você pode perguntar sobre:\n\n` +
    `• "Próximos jogos" - Calendário de partidas\n` +
    `• "Time atual" - Elenco principal\n` +
    `• "WhatsApp" - Contato oficial\n` +
    `• "Redes sociais" - Onde nos seguir\n\n` +
    `[💬 Clique aqui para falar no WhatsApp](${furiaStats.whatsapp.url})`;
};
