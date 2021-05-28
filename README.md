
# Users API Services
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

# Games API Services

## Create Game

* **URL**

  http://localhost:8000/api/juegos/create

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**: JSON

   ```json
   {
       "name": "Pacman",
       "description": "Mi juego preferido",
       "status": 1
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

## List Games

* **URL**

  http://localhost:8000/api/juegos/list

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**:

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `[
        {
            "id": 1,
            "name": "Pacman",
            "description": "Mi juego preferido",
            "status": "1",
            "createdAt": "2020-10-09T23:52:26.000Z",
            "updatedAt": "2020-10-09T23:52:26.000Z"
        }
    ]`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot ERROR`

## Find Game

* **URL**

  http://localhost:8000/api/juegos/find

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    `username=[String]`

* **Data Params**: JSON

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

# Participants API Services