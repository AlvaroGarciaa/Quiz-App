# Final Project: Quiz Application with Microservices

#Leaderboard controller
# Date: 22-May-2023 
    #Alvaro Enrique Garcia Espinosa A01781511
    #Diego Mellado Oliveros A01655451 
    #Adrian Bravo López A01752067 
    #Alan Said Martínez Guzmán A01746210 
    #Josué Bernardo Villegas Nuño A01751694 


from flask import Blueprint, jsonify, current_app,request
from pymongo import MongoClient


class LeaderboardBlueprint(Blueprint):
    def __init__(self, name, import_name):
        super().__init__(name, import_name)
        self.add_url_rule('/getTop10', view_func=self.get_top_10, methods=['GET'])
        self.add_url_rule('/newScore', view_func=self.new_score, methods=['POST'])

    def get_top_10(self):
        if current_app.mongo_client:
            client = current_app.mongo_client
            db = client['quiz_app_db']
            collection = db['score']

            result = collection.find().sort('score', -1).limit(10)

            result_list = [doc for doc in result]

            for doc in result_list:
                doc['_id'] = str(doc['_id'])

            return jsonify(result_list)
        else:
            return "No connection with database"

    def new_score(self):
        if current_app.mongo_client:
            data = request.get_json()

            name = data.get("name")
            score = data.get("score")
            date = data.get("date")

            client = current_app.mongo_client
            db = client['quiz_app_db']
            collection = db['score']

            new_entry = {"name": name, "score": score, "date": date}

            collection.insert_one(new_entry)
            return "Ok"
        else:
            return "No connection with database"
     

# Crear  LeaderboardBlueprint instance
leaderboard_blueprint = LeaderboardBlueprint('leaderboard_blueprint', __name__)

