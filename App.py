from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
import random

app = Flask(__name__,template_folder="template")

english_bot = ChatBot("Chatterbot", storage_adapter="chatterbot.storage.SQLStorageAdapter")

trainer = ChatterBotCorpusTrainer(english_bot)

trainer.train("trainee/hotel.yml")
trainer.train("trainee/panhala.yml")
trainer.train("trainee/services.yml")
trainer.train("trainee/conversations.yml")

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/bot")
def bot():
	return render_template("bot.html")

@app.route("/get")
def get_bot_response():
	userText = request.args.get('msg')
	if (request.args.get('msg')==''):
		some = ["you wann ask something","Yes I'm here ","Please go ahead","You have any question"]
		return str(random.choice(some))
		
	return str(english_bot.get_response(userText))


if __name__ == "__main__":
    app.run(debug=True)

     