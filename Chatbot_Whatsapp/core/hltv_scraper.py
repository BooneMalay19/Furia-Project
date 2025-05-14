import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
from cachetools import cached, TTLCache
from config import Config

class HLTVScraper:
    def __init__(self):
        self.cache = TTLCache(maxsize=100, ttl=Config.CACHE_TIMEOUT)
        self.headers = {"User-Agent": UserAgent().random}

    @cached(cache={})
    def get_team_data(self):
        """Coleta todos os dados relevantes da HLTV"""
        try:
            soup = self._get_soup(Config.HLTV_TEAM_URL)
            
            return {
                "lineup": self._get_current_lineup(soup),
                "matches": self._get_recent_matches(soup),
                "stats": self._get_team_stats(soup)
            }
        except Exception as e:
            print(f"Erro no scraping: {e}")
            return None

    def _get_soup(self, url):
        response = requests.get(url, headers=self.headers, timeout=10)
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')

    def _get_current_lineup(self, soup):
        players = []
        for player in soup.select(".player-holder"):
            name = player.select(".playerNickname")[0].text.strip()
            role = player.select(".playerRole")[0].text.strip()
            players.append({"name": name, "role": role})
        return players

    def _get_recent_matches(self, soup):
        matches = []
        for match in soup.select(".match")[:5]:
            event = match.select(".event")[0].text.strip()
            result = match.select(".result")[0].text.strip()
            matches.append({"event": event, "result": result})
        return matches

    def _get_team_stats(self, soup):
        stats = {}
        # Implementar extração de estatísticas específicas
        return stats