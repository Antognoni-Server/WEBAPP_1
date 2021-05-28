
# User API Services
## Create User

* **URL**

  http://localhost:8000/api/usuario/create/username/:username/status/:status

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
        "username": 
        "tomasmalio", 
        "status": "1"
    }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot POST`

## List User

* **URL**

  http://localhost:8000/api/usuario/list/

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

  http://localhost:8000/api/usuario/find/username/:username

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
        "username": 
        "tomasmalio", 
        "status": "1"
    }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot ERROR`

# Game API Services
/api/juego/create
/api/juego/list

## Find Game

* **URL**

  http://localhost:8000/api/juego/find

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    `username=[String]`

* **Data Params**

  ```json
  {
      
  }
  ``

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `{ 
        "id": 1, 
        "username": 
        "tomasmalio", 
        "status": "1"
    }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Cannot ERROR`