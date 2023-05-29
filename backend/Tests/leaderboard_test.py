#Leaderboard class tests
# Date: 22-May-2023 
    #Alvaro Enrique Garcia Espinosa A01781511
    #Diego Mellado Oliveros A01655451 
    #Adrian Bravo López A01752067 
    #Alan Said Martínez Guzmán A01746210 
    #Josué Bernardo Villegas Nuño A01751694 


from flask import Blueprint, jsonify, current_app, json
from pymongo import MongoClient
import unittest
from ..controllers.leaderboard import leaderboard_blueprint
from ..app import MyApp
from unittest.mock import patch
from flask import Flask
from flask.testing import FlaskClient

# Mockear database
class MockMongoClient:
    def __getitem__(self, key):
        return self
    
    def __getattr__(self, name):
        return lambda *args, **kwargs: [{'_id': 1, 'name': 'Peter', 'score':9}]
    

#Create Flask aplication with blueprint for testing
app = Flask(__name__)
mongo_client = MongoClient('mongodb://localhost:27017')
app.mongo_client = mongo_client
app.register_blueprint(leaderboard_blueprint)

class TestLeaderBoardBlueprint(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_get_top_ten(self):
        response = self.app.get('/getTop10')
        self.assertEqual(response.status_code, 200)

    def test_new_score(self):
        score_data = {'_id': 1, 'name': 'Markus', 'score':5}
        
        response = self.app.post('/newScore', data=json.dumps(score_data), content_type='application/json')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()