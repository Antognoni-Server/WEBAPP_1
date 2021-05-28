
# Create User
Para crear un usuario, vamos a utilizar el método POST y el servicio **Create** de **Usuario** (/api/usuario/create/username/:username/status/:status)


* **URL**

  /api/usuario/create/username/:username/status/:status

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

# List User
Ahora que tenemos creados nuestros usuarios, vamos a listarlos para entender cómo se están guardando y que información obtenemos. Para ello, vamos a consultar el servicio **List** de **Usuario** (http://localhost:8000/api/usuario/list).

* **URL**

  /api/usuario/list/

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
