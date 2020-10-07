# SlipbopOverflow

## Database Diagram

![ERD](./documentation/database-schema/erd.png)

## Routes

- GET /
- GET /signup
- POST /api/users
- POST /api/users/token
- GET /login
- GET /users/{user-id}
- GET /search?q={the-question}
- GET /questions/
- POST /api/questions
- GET /questions/ask
- GET /questions/{question-id}
- POST /api/questions/{question-id}/answers
- POST /api/questions/{question-id}/comment
- POST /api/questions/{question-id}/answers/{answer-id}/comment
- GET /api/questions/{question-id}/comments
- GET /api/questions/{question-id}/answers/{answer-id}/comments

### Stretch

- GET /tags
- GET /questions/tagged/{tag-name}
- PUT /api/users/{userid}/edit
