# BE expat-journal

<!-- ### API ><> https://api-watermyplants.herokuapp.com/ <>< -->

## Table of Contents

- [ BE expat-journal ](#be--expat-journal)
  <!-- - [API ><> https://api-watermyplants.herokuapp.com/ <><](#api--httpsapiwatermyplantsherokuappcom) -->
  - [Table of Contents](#table-of-contents)
  - [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
    - [POST /api/auth/login](#post-/api/auth/login)
    - [POST /api/auth/register](#post-/api/auth/register)
    - [PUT /api/users](#put-/api/users)
    - [DELETE /api/users/delete/:id](#delete-/api/users/delete/:id)
    - [POST /api/stories](#post-/api/stories)
    - [GET /api/stories](#get-/api/stories)
    - [PUT /api/stories](#put-/api/stories)
    - [GET /api/stories/:id](#get-/api/stories/:id)
    - [DELETE /api/stories/:id](#delete-/api/stories/:id)
    - [GET /api/stories/user/:id](#get-/api/stories/user/:id)

## Summary Table of API Endpoints

| Type   | Endpoints             | Description                           |
| ------ | --------------------- | ------------------------------------- |
| POST   | /api/auth/login       | Register user                         |
| POST   | /api/auth/register    | Login                                 |
| PUT    | /api/users            | update a specific user                |
| DELETE | /api/users/delete/:id | delete a specific user                |
| POST   | /api/stories          | create a story                        |
| GET    | /api/stories          | gets all stories                      |
| PUT    | /api/stories          | updates a specific story              |
| GET    | /api/stories/:id      | get a specific story                  |
| DELETE | /api/stories/:id      | delete a specific story               |
| GET    | /api/stories/user/:id | get stories posted by a specific user |

### POST /api/auth/login

```
{
	"email": "testUser", // string, unique
	"password": "pass" // string
}
```

`200 ✅`

```
{
  "message": "Welcome user 1!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1NjY4Njg3OTMsImV4cCI6MTU2Njg3MjM5M30.96mQOZNWFCkWeI-oK76XhntHKcNm0Wcm31qv3XLc9LI",
  "userID": 1
}
```

`401 ❌`

```

{
"message": "Invalid Credentials"
}

```

### POST /api/auth/register

```

{
"email": "test@email.com", // string, unique
"password": "pass" // string
}

```

`200 ✅`

```

{
"message": "Welcome user 1!",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1NjY4Njg3OTMsImV4cCI6MTU2Njg3MjM5M30.96mQOZNWFCkWeI-oK76XhntHKcNm0Wcm31qv3XLc9LI",
"userID": 1
}
```

`401 ❌`

```
{
  "message": "Invalid Credentials"
}
```

### PUT /api/users

```

{
	"id":1,
	"email":"test@email.com",
	"password":"pass",
	"first_name":"John",
	"last_name":"Doe",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1NjY4Njg3OTMsImV4cCI6MTU2Njg3MjM5M30.96mQOZNWFCkWeI-oK76XhntHKcNm0Wcm31qv3XLc9LI"
}

```

`203 ✅`

```

{
  "id": 1,
  "email": "test@email.com",
  "first_name": "John",
  "last_name": "Doe",
  "password": "$2a$05$T2Fk5yWY3kImMbLoulnEquAv/g5bQyzn7MqWyqs/Cm7YUfy9.O7P2"
}
```

`403 ❌`

```
{
  "message": "no token provided"
}
```

### DELETE /api/users/delete/:id

```

{
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1NjY4Njg3OTMsImV4cCI6MTU2Njg3MjM5M30.96mQOZNWFCkWeI-oK76XhntHKcNm0Wcm31qv3XLc9LI"
}

```

`200 ✅`

```

{
  "message": "user 1 successfully deleted"
}
```

`403 ❌`

```
{
  "message": "no token provided"
}
```
