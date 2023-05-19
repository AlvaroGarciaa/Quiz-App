
from flask import Flask
from routes.questions import questions_blueprint

app = Flask(__name__)

"""App routes"""

#Question's backend routes  
app.register_blueprint(questions_blueprint)