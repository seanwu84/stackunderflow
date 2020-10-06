# SlipbopOverflow

## Database Diagram
![ERD](./documentation/database-schema/erd.png)

## Routes
* GET /
* GET /signup
* POST /api/users-signup
* GET /login
* POST /api/users-login
* GET /users/{user-id}
* GET /search?q={the-question}
* GET /questions/
* POST /api/questions
* GET /questions/ask
* GET /questions/{question-id}
* POST /api/answers  (include question id in post body)
* POST /api/questions/{question-id}/comment
* POST /api/answers/{answer-id}/comment
* GET /api/questions/{question-id}/comments
* GET /api/answers/{answer-id}/comments


### Stretch
* GET /tags
* GET /questions/tagged/{tag-name}
* PUT /api/users/{userid}/edit
