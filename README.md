
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

# Listando los usuarios creados
Ahora que tenemos creados nuestros usuarios, vamos a listarlos para entender cómo se están guardando y que información obtenemos. Para ello, vamos a consultar el servicio **List** de **Usuario** (http://localhost:8000/api/usuario/list).

Método: GET
Url: http://localhost:8000/api/usuario/list

Resultado:
[
    {
        "id": 1,
        "username": "tomasmalio",
        "status": "1"
    }
]