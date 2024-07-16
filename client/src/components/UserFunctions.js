import axios from 'axios'
const baseURL = "http://localhost:4000/api/login";
//ver como concatenar la url base a url especifica a cada ruta.


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
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      console.log("usuario guardado en ddbb")
      return response.data
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
