# 🤖 FURIA CS2 WhatsApp Bot - Guia Completo

![FURIA Logo](https://static.draft5.gg/teams/86328-Furia-Gaming.png) *Bot não-oficial para fãs da FURIA Esports*

## 📌 Visão Geral
Bot de WhatsApp que responde sobre:
- Elenco atual do time de CS2
- Próximos jogos e resultados
- Estatísticas de jogadores
- História da organização
- Qualquer pergunta sobre a FURIA!

## 🚀 Começando

### Pré-requisitos
- Python 3.9+
- Conta na [Twilio](https://www.twilio.com/) (WhatsApp Sandbox)
- Chave da [OpenAI API](https://platform.openai.com/)
- Ngrok (para testes locais)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-user/furia-whatsapp-bot.git
cd furia-whatsapp-bot

# Crie ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\activate  # Windows

# Instale dependências
pip install -r requirements.txt

Estrutura

furia-whatsapp-bot/
├── main.py                 → Ponto de entrada
├── config.py               → Configurações
├── requirements.txt        → Dependências
│
├── core/                   → Lógica principal
│   ├── bot_engine.py       → Processa mensagens
│   ├── hltv_scraper.py     → Coleta dados da HLTV
│   ├── wiki_scraper.py     → Histórico da Liquipedia
│   └── gpt_integration.py  → Gera respostas com IA
│
└── services/               → Integrações
    ├── whatsapp_service.py → Twilio WhatsApp
    └── cache_service.py    → Armazenamento temporário