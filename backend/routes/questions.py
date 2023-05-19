from flask import Blueprint

questions_blueprint = Blueprint('example_blueprint', __name__)



@questions_blueprint.route('/')
def index():
    return "This is an example app"