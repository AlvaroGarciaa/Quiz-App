# Final Project: Quiz Application with Microservices

# Flask Application
# Date: 20-May-2023 
    #Alvaro Enrique Garcia Espinosa A01781511
    #Diego Mellado Oliveros A01655451 
    #Adrian Bravo López A01752067 
    #Alan Said Martínez Guzmán A01746210 
    #Josué Bernardo Villegas Nuño A01751694 

from flask import Flask
from .db.mongo import get_mongo_connection
from .controllers.questions import questions_blueprint
from .controllers.leaderboard import leaderboard_blueprint

class MyApp(Flask):
    def __init__(self, *args):
        super().__init__(*args)
        self.register_blueprints()
        #Initializes mongo before receiving request's
        self.before_request(self.initialize_mongo) 


    def register_blueprints(self):
        self.register_blueprint(questions_blueprint)
        self.register_blueprint(leaderboard_blueprint)

    
    def initialize_mongo(self):
        self.mongo_client = get_mongo_connection()

app = MyApp(__name__)




