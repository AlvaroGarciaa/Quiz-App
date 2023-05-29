import unittest
from flask import current_app, url_for
from flask_testing import TestCase
from ..app import MyApp
from ..db.mongo import get_mongo_connection
from ..controllers.questions import questions_blueprint
from ..controllers.leaderboard import leaderboard_blueprint
import sys
import os


class MyAppTestCase(TestCase):
    def create_app(self):
        # Create and return an instance of your Flask application for testing
        return MyApp(__name__)

    def setUp(self):
        # This method is called before each test
        #self.mongo_client = get_mongo_connection()
        pass

    def tearDown(self):
        # This method is called after each test
        pass

    def test_blueprints_registered(self):
        # Test that the blueprints are properly registered
        with self.app.test_client() as client:
            response = client.get(url_for('questions_blueprint.get_questions'))
            self.assert200(response)
            response = client.get(url_for('leaderboard_blueprint.get_top_10'))
            self.assert200(response)
            response = client.post(url_for('leaderboard_blueprint.new_score'))
            self.assert200(response)

    def test_mongo_initialized(self):
        # Test that the MongoDB connection is initialized
        with self.app.app_context():
            self.assertIsNotNone(self.app.mongo_client)