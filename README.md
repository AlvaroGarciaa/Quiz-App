# CodeQuizPro

CodeQuizPro is an application of questions that will help you reinforce your knowledge as a programmer, these questions are focused on software architecture. This app has an intuitive interface and basic features that allow the user to decide the number of questions they want to answer and then place them on a laderboard according to their score. 

- [Demo video]()
- [App](https://main.d3nw8l4tw4u49m.amplifyapp.com/)

## Architecture

![App Screenshot](https://github.com/AlvaroGarciaa/Quiz-App/blob/main/Assets/Architecture.jpeg)

## Patterns used

As you can see, we used a controller view model type architecture because in this way we had control of each component individually, thus facilitating its understanding and risk mitigation, this was designed in such a way that this application can be scalable.
While the architectural approach we did with the app was through microservices, as we divided the app into several independent sections such as the frontend, backend and tests.

## Start and run the app

- [Url where the app is hosted](aqui poner link)

Clone the project

```bash
git clone https://github.com/AlvaroGarciaa/Quiz-App.git
```

Go to the project directory

```bash
  cd Quiz-App
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

Unit tests were also performed to verify the proper registration of blueprints and the correct functioning of the endpoints (returning 200).

## Tech Stack

**Client:** ReactJS, CSS

**Server:** Python (flask), MongoDB

## Authors

- [Diego Mellado](https://github.com/m3llad0)
- [Josué Villegas](https://github.com/JosueBVN)
- [Adrián Bravo](https://github.com/Adrian101-hnd)
- [Alan Martinez](https://github.com/AlanSaid1)
- [Álvaro Enrique](https://github.com/AlvaroGarciaa)


