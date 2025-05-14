from openai import OpenAI
from config import Config

class FuriaGPT:
    SYSTEM_PROMPT = """
    Você é um assistente especializado no time de CS2 da FURIA Esports. 
    Responda de forma natural, como um fã apaixonado pelo time.
    
    Regras:
    - Seja preciso com dados e estatísticas
    - Mantenha o tom empolgado e informativo
    - Se não souber, diga que vai verificar e sugira fontes
    - Nunca invente dados que não foram fornecidos
    """

    def __init__(self):
        self.client = OpenAI(api_key=Config.OPENAI_API_KEY)

    def generate_response(self, user_input, context_data):
        try:
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": self.SYSTEM_PROMPT},
                    {"role": "user", "content": f"Dados: {context_data}\nPergunta: {user_input}"}
                ],
                temperature=0.7,
                max_tokens=150
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"Desculpe, estou com problemas para responder agora. Erro: {str(e)}"