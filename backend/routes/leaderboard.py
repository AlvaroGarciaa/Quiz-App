from flask import Blueprint, jsonify, current_app
from pymongo import MongoClient


leaderboard_blueprint = Blueprint('leaderboard_blueprint', __name__)

@leaderboard_blueprint.route('/getTop10',methods = ["GET"])
def getTop10():
    client = current_app.mongo_client
    db = client['quiz_app_db']
    collection = db['score']

    result = collection.find().sort('score', -1).limit(10)

    result_list = [doc for doc in result]

    for doc in result_list:
            doc['_id'] = str(doc['_id'])

    return jsonify(result_list)