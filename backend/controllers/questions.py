
# Final Project: Quiz Application with Microservices

# Questions controller
# Date: 22-May-2023 
    #Alvaro Enrique Garcia Espinosa A01781511
    #Diego Mellado Oliveros A01655451 
    #Adrian Bravo López A01752067 
    #Alan Said Martínez Guzmán A01746210 
    #Josué Bernardo Villegas Nuño A01751694 

from flask import Blueprint, jsonify, current_app

class QuestionsBlueprint(Blueprint):
    def __init__(self, name, import_name):
        super().__init__(name, import_name)
        self.add_url_rule('/get_questions', view_func=self.get_questions)

    def get_questions(self):
        if current_app.mongo_client:
            client = current_app.mongo_client
            db = client['quiz_app_db']
            collection = db['question']

            result = collection.find({})

            result_list = [doc for doc in result]

            for doc in result_list:
                doc['_id'] = str(doc['_id'])

            return jsonify(result_list)
        else:
            return "No connection with database"

# Crear una instancia de la clase QuestionsBlueprint
questions_blueprint = QuestionsBlueprint('questions_blueprint', __name__)


        

