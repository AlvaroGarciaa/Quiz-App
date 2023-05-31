#App class  tests
# Date: 22-May-2023 
    #Alvaro Enrique Garcia Espinosa A01781511
    #Diego Mellado Oliveros A01655451 
    #Adrian Bravo López A01752067 
    #Alan Said Martínez Guzmán A01746210 
    #Josué Bernardo Villegas Nuño A01751694 


import unittest
from pymongo.mongo_client import MongoClient
from flask import current_app, url_for
from flask_testing import TestCase
from ..app import MyApp
from ..db.mongo import get_mongo_connection
from ..controllers.questions import questions_blueprint
from ..controllers.leaderboard import leaderboard_blueprint



class MyAppTestCase(TestCase):
    def create_app(self):
        # Create and return an instance of your Flask application for testing
        return MyApp(__name__)

    def test_blueprints_registered(self):
        # Test that the blueprints are properly registered
        with self.app.test_client() as client:
            response = client.get(url_for('questions_blueprint.get_questions'))
            self.assert200(response)
            response = client.get(url_for('leaderboard_blueprint.get_top_10'))
            self.assert200(response)
            response = client.post(url_for('leaderboard_blueprint.new_score'))
            self.assert200(response)
 