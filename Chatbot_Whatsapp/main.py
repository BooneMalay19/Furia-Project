from services.whatsapp_service import app

if __name__ == "__main__":
    print("Iniciando servidor do bot FURIA WhatsApp...")
    app.run(host="0.0.0.0", port=5000)
