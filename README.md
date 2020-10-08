# SlipbopOverflow

## Database Diagram

![ERD](./documentation/database-schema/erd.png)

## Routes
### Front-End Routes
- GET /
  - When logged in - Similar to /questions
  - When not logged in - Splash page
  
- GET /users
- GET /users/{user-id}
- GET /users/signup
- GET /users/login
- GET /users/logout

- GET /questions/
- GET /questions/{question-id}
  - Will grab associated answers
- GET /questions/ask
- GET /search?q={the-question}

### Back-End Routes
- POST /api/users
- POST /api/users/token
- POST /api/questions
- GET /api/questions/{question-id}/comments
  - question comments - AJAX on /questions/{id} page
- GET /api/questions/{question-id}/answers/{answer-id}/comments
  - answer comments - AJAX on /questions/{id} page
- POST /api/questions/{question-id}/answers
  - answer a question - AJAX on /questions/{id} page
- POST /api/questions/{question-id}/comment
  - post a question comment - AJAX on /questions/{id} page
- POST /api/questions/{question-id}/answers/{answer-id}/comment
  - post an answer comment - AJAX on /questions/{id} page
- POST /api/questions/{question-id}/votes
- POST /api/questions/{question-id}/answers/{answer-id}/votes

### Stretch

- GET /tags
- GET /questions/tagged/{tag-name}
- PUT /api/users/{userid}/edit
