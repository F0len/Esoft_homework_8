# Esoft_homework_8
### API
## GET запросы:
**Тело ответа для всех запросов:**<br/>
Массив объектов user c полями id(int), name(string), email(string), age(int).
#### 1. GET /users - получение списка всех пользователей.
**Запрос:** http://localhost:3000/users <br />
**Ответ:**
```json
[
    {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "age": 28
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example2.com",
        "age": 34
    }
]
```
#### 2. GET /users/:id - получение пользователя по ID.
- Параметры:
  - id - id пользователя

**Запрос:** http://localhost:3000/users/2 <br />
**Ответ:**
```json
[
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example2.com",
        "age": 34
    }
]
```
#### 3. GET /users/age/:age - получение списка всех пользователей старше указанного возраста.
**Запрос:** http://localhost:3000/users/age/34 <br />
**Ответ:**
```json
[
    {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie.brown@example2.com",
        "age": 45
    },
    {
        "id": 4,
        "name": "Eva Davis",
        "email": "eva.davis@example.com",
        "age": 37
    }
]
```
#### 4. GET /users/domain/:domain - получение списка всех пользователей с указаным доменом почты.
**Запрос:** http://localhost:3000/users/domain/example2.com <br />
**Ответ:**
```json
[
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example2.com",
        "age": 34
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie.brown@example2.com",
        "age": 45
    }
]
```
#### 5. GET /users/sorted - получение списка всех пользователей в алфавитном порядке по имени.
**Запрос:** http://localhost:3000/users/sorted <br />
**Ответ:**
```json
[
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example2.com",
        "age": 34
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie.brown@example2.com",
        "age": 45
    }
]
```
## POST запросы:
#### 1. POST /users - добавление нового пользователя.
**Тело запроса:** объект json с полями id(int), name(string), email(string), age(int).<br />
**Тело ответа:** объект json с полем message.<br />
**Запрос:** http://localhost:3000/users <br />
**Пример тела:**
```json
{ 
    "id": 4, 
    "name": "Eva Brown",
    "email": "eva.brown@example3.com",
    "age": 37    
}
```
**Ответ:**
```json
{
    "message": "Пользователь успешно добавлен"
}
```
**Ответ, если тело не содержало необходимых полей**
```json
{
    "message": "Отсутствуют обязательные поля"
}
```
## PUT запросы:
#### 1. PUT /users/:id - обновление пользователя.
- Параметры:
  - id - id пользователя

**Тело запроса:** объект json с полями id(int), name(string), email(string), age(int). Указание всех полей не обязательно.<br />
**Тело ответа:** объект json содержащий user с обновлёнными данными.<br />
**Запрос:** http://localhost:3000/users/2 <br />
**Пример тела:**
```json
{ 
      "age": 21
}
```
**Ответ:**
```json
{
    "id": 2,
    "name": "Bob Smith",
    "email": "bob.smith@example2.com",
    "age": 21
}
```
## DELETE  запросы:
#### 1. DELETE  /users/:id - удаление пользователя.
- Параметры:
  - id - id пользователя

**Тело ответа:** Тело отсутствует<br />
**Запрос:** http://localhost:3000/users/2 <br />
**Ответ:** Status: 204
