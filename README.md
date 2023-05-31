# CodeQuizPro

CodeQuizPro is an application of questions that will help you reinforce your knowledge as a programmer, these questions are focused on software architecture. This app has an intuitive interface and basic features that allow the user to decide the number of questions they want to answer and then place them on a laderboard according to their score. 

## Architecture

![App Screenshot](https://github.com/AlvaroGarciaa/Quiz-App/blob/main/Assets/Architecture.jpeg)

As you can see, we used a controller view model type architecture because in this way we had control of each component individually, thus facilitating its understanding and risk mitigation, this was designed in such a way that this application can be scalable. 

## Start and run the app

Clone the project

```bash
git clone https://github.com/AlvaroGarciaa/Quiz-App.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Classes and methods

```http
  leaderboard class
```

| Functions | Description |
| :-------- |:----------- |
|`__init__`     |initializes an instance in the class and create the corresponding paths to the get_top_ten() and new_score() functions.|
| `get_top_ten()`|Within the leaderboard it places the people with the 5 highest scores in the app.|
|`new score()`   |Saves in the database the score, name and date on which the person took the quiz.|

```http
  QuestionsBlueprint class
```

| Functions | Description |
| :-------- |:----------- |
|`__init__` |initializes an instance in the class and sets the path to get_questions.|
|`get_questions()` |Gets all the queries stored in the mongoDB database (quiz_app_db) and brings them to the frontend in JSON format.|

## Patterns used

## Tech Stack

**Client:** ReactJS, CSS

**Server:** Python (flask), MongoDB


