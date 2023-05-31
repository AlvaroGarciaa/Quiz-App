from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os 
import certifi

"""Connection to Mongo Atlas cluster"""
def get_mongo_connection():
    # Replace <username>, <password>, and <cluster_name> with your MongoDB Atlas credentials
    username =  os.environ.get('DB_USERNAME')
    password = os.environ.get('DB_PASSWORD')
    cluster_name = os.environ.get('DB_CLUSTER_NAME')
    
    # Construct the MongoDB Atlas connection string
    connection_string  =f'mongodb+srv://{username}:{password}@{cluster_name}.mongodb.net/?retryWrites=true&w=majority'

    try:
        client = MongoClient(connection_string,tlsCAFile=certifi.where())
        # Check if the connection was successful
        if client.server_info():
            print("Successfully connected to MongoDB Atlas")
            return client
    except Exception as e:
        print("Error connecting to MongoDB Atlas:", str(e))
        return None

    