from flask import Blueprint, jsonify, current_app

questions_blueprint = Blueprint('questions_blueprint', __name__)


"""Makes query to collection and returns questions"""
@questions_blueprint.route('/')
def get_questions():
    if (current_app.mongo_client):

        #Select db and collection
        client = current_app.mongo_client
        db = client['quiz_app_db']
        collection = db['question']
        
        # Make a query using the collection
        result = collection.find({})

        #Convert the result to a list of dictionaries
        result_list = [doc for doc in result]

        #Converts results into strings
        for doc in result_list:
            doc['_id'] = str(doc['_id'])

        #Returns json
        return jsonify(result_list)
    else:
        return "No conection with database"
        
        

