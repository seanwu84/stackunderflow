# SlipbopOverflow

[Live Link](https://slipbop.herokuapp.com/)

## Summary
This is a clone of the popular site *StackOverflow*. Users are able to login and ask code related questions, answer other user's questions, and comment on both. Both questions and answers are voted on which is used to bring more popular or useful content to the top of term based search results.

Users are also able to track their own contributions using user profile pages, giving quick access to all content (questions, answers, comments) for that user.
## Technologies Used
- JavaScript
- Node
- Express
- Sequelize
- PostgreSQL
- HTML
- CSS
- Pug
- Heroku

## Screenshots / GIFs
![Question and Answer Page in use]()

## Future Features
- Rich Text Editor
- Question Tags
- Search result pagination

## Technical Implementation Details
### Search
- Anything you had to stop and think about before building
- Descriptions of particular challenges
- Snippets or links to see code for these
### AJAX Voting
- Anything you had to stop and think about before building
- Descriptions of particular challenges
- Snippets or links to see code for these
### Authentication
- Anything you had to stop and think about before building
- Descriptions of particular challenges
- Snippets or links to see code for these

***
## Useful Links
- [Database Diagram](./documentation/erd.png)
- [Routes](./documentation/routes.md)
- [Feature List](./documentation/feature-list.md)
***
## Dev Instructions

1. Clone this repository:
    ```bash
    git clone https://github.com/seanwu84/StackUnderflow.git
    ```

2. Install dependencies
    ```bash
    npm install
    ```
3. Create a **.env** file based on the example with proper settings for your
   development environment (refer to **.env.example**)
4. Create your database, migrate your database, seed your database, and start your express app
    ```bash
    npx dotenv sequelize db:create
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
    npm start
    ```
5. Navigate to your app running on http://localhost:8080

## Heroku Instructions

1. Setup
    Log into Heroku and create a new dyno
    Download the latest version of StackUnderflow from github

2. Add a Database
    Within the Heroku project, go to the "Resource" tab and add the extension "Heroku Postgres"
    This can be added at the free tier

3. Setup Enviromental Variables
    With the Heroku project, go to "Settings" and "Config Vars"
    Add the following varables:
        JWT_SECRET=[SECRET]
        JWT_EXPIRES_IN=604800   

4. Push to Heroku
    Assuming you have the Heroku CLI installed, run "heroku login" from within the StackUnderflow directory
    Login in the window that is openned
    Run "heroku git:remote -a «your-app-name»"
    Run "git push heroku" and wait for it to finish deployment
    Run "heroku run npx sequelize-cli db:migrate"
    Run "heroku run npx sequelize-cli db:seed:all"
