from core.hltv_scraper import HLTVScraper
from core.gpt_integration import FuriaGPT
from cachetools import cached, TTLCache
from config import Config

class FuriaBot:
    def __init__(self):
        self.scraper = HLTVScraper()
        self.gpt = FuriaGPT()
        self.cache = TTLCache(maxsize=100, ttl=Config.CACHE_TIMEOUT)

    @cached(cache={})
    def handle_message(self, user_input):
        # Primeiro verifica comandos específicos
        if "elenco" in user_input:
            return self._get_lineup_response()
        elif "jogos" in user_input:
            return self._get_matches_response()
        
        # Se não for comando específico, usa GPT
        context_data = self._get_context_data()
        return self.gpt.generate_response(user_input, context_data)

    def _get_lineup_response(self):
        data = self.scraper.get_team_data()
        if not data or not data.get("lineup"):
            return "Não consegui obter o elenco atual. Tente mais tarde."
        
        response = "🔫 Elenco atual da FURIA CS2:\n\n"
        for player in data["lineup"]:
            response += f"• {player['name']} ({player['role']})\n"
        return response

    def _get_matches_response(self):
        data = self.scraper.get_team_data()
        if not data or not data.get("matches"):
            return "Não consegui obter os últimos jogos. Tente mais tarde."
        
        response = "🎮 Últimos resultados da FURIA:\n\n"
        for match in data["matches"]:
            response += f"• {match['event']}: {match['result']}\n"
        return response

    def _get_context_data(self):
        return self.scraper.get_team_data() or {}
