from flask import Blueprint, jsonify, current_app,request
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

@leaderboard_blueprint.route('/newScore',methods=["POST"])
def newScore():

    data = request.get_json()

    name = data.get("name")
    score = data.get("score")
    date = data.get("date")

    client = current_app.mongo_client
    db = client['quiz_app_db']
    collection = db['score']

    new_Entry = {"name":name,"score":score,"date":date}

    

    collection.insert_one(new_Entry)

    return "Ok"