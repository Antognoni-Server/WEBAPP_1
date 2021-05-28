
# User API Services
## Create User

* **URL**

  http://localhost:8000/api/usuarios/create/username/:username/status/:status

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `username=[String]`
   `status=[Integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `{ 
        "id": 1, 
        "username": "tomasmalio", 
        "status": "1",
        "createdAt": "2020-10-09T23:42:44.000Z",
        "updatedAt": "2020-10-09T23:42:44.000Z"
    }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot POST`

## List User

* **URL**

  http://localhost:8000/api/usuarios/list/

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `[{ 
        "id": 1, 
        "username": 
        "tomasmalio", 
        "status": "1"
    }]`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot ERROR`

## Find User

* **URL**

  http://localhost:8000/api/usuarios/find/username/:username

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    `username=[String]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `{
        "id": 1,
        "username": "tomasmalio",
        "status": "1",
        "createdAt": "2020-10-09T23:42:44.000Z",
        "updatedAt": "2020-10-09T23:42:44.000Z"
    }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot ERROR`

# Game API Services
/api/juegos/create
/api/juegos/list

## Find Game

* **URL**

  http://localhost:8000/api/juegos/find

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    `username=[String]`

* **Data Params**

  ```json
  {
      "name": "Pacman"
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `{
        "id": 1,
        "name": "Pacman",
        "description": "Mi juego preferido",
        "status": "1",
        "createdAt": "2020-10-09T23:52:26.000Z",
        "updatedAt": "2020-10-09T23:52:26.000Z"
    }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot ERROR`