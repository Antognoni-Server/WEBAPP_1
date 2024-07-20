import React, { Component } from 'react'
import axios from 'axios';

const baseURL = "http://localhost:4000/api/login";
//Cada url debe apuntar a un endpoint de la API


function test_function(){
  alert('hola mundo');
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );

}
class UsuariosInscritos extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Bienvenido a UsuariosInscritos page</h1>
            <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
            >
                Solicitar usuaios a DDBB
            </button>

            <p id="demo"></p>

            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={test_function}
              >
                Click -  traer ddbb
                </button>
          </div>
        </div>
      </div>
    )
  }
}

export default UsuariosInscritos
