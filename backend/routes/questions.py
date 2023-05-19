from flask import Blueprint

questions_blueprint = Blueprint('questions_blueprint', __name__)



@questions_blueprint.route('/')
def index():
    return "This is an example app"
