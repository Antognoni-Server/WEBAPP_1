import axios from 'axios';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const baseURL = "http://localhost:4000/api/login";
//ver como concatenar la url base a url especifica a cada ruta. Esta solo para login().


export const register = newUser => {
  return axios
    //.post('users/register', {
      .post(baseURL, {  
    first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}
export const login = user => {
  return axios
    .post(baseURL, {
      email: user.email,
      password: user.password
    },{
      headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors'
      }
    }
  )
    .then(response => {
      console.log("Cliente: componentes/Userfunction.js: login() -> ver: Response");
      /*var userRecibido = {
        email: '',
        password: ''
      }*/
      var userRecibido = {
        token: ''
      }
      userRecibido = Object.assign({}, response.data);
      console.log('valores en response, ahí esta mi toookeeeenn: '+ userRecibido.token);
      console.log('Almacenando token en localstore o Almacenamiento Local. usertoken: userRecibido')
      localStorage.setItem('usertoken', userRecibido.token);
      return userRecibido.token;
    })
    .catch(err => {
      console.log(err)
    })
}
export const getuser = users => {
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

  alert('hola, has recibido un json')
}
