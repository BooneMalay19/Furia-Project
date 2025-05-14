from flask import Flask, request, Response
from twilio.twiml.messaging_response import MessagingResponse
from config import Config
from core.bot_engine import FuriaBot

app = Flask(__name__)
bot = FuriaBot()

@app.route("/whatsapp", methods=["POST"])
def whatsapp_reply():
    incoming_msg = request.values.get("Body", "").lower()
    sender = request.values.get("From", "")
    
    print(f"Mensagem recebida de {sender}: {incoming_msg}")
    
    response = bot.handle_message(incoming_msg)
    
    twilio_response = MessagingResponse()
    twilio_response.message(response)
    
    return Response(str(twilio_response), mimetype="application/xml")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
