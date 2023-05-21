
from flask import Flask
from db.mongo import get_mongo_connection
from routes.questions import questions_blueprint


app = Flask(__name__)


"""App routes"""
#Question's backend routes  
app.register_blueprint(questions_blueprint)


#Connect to db before receiving requests
@app.before_request
def initialize_mongo():
        app.mongo_client = get_mongo_connection()
