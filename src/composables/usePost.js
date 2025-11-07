import { ref } from "vue";

//creamos nuestro composable para obtener los posts
export default function usePost() {
	//vamos a almacenarlos en un ref porque reemplazaremos
	//todo el arreglo
	const posts = ref([]);
	//creamos una nueva variable ya que tambien
	//podremos almacenar solo un post
	const post = ref({});

	//creamos la baseURL para nuestras peticiones
	const baseURL="https://jsonplaceholder.typicode.com/posts";

	//creamos la funcion asincrona y usamos la api fetch
	//para obtener los valores
	const fetchAll = async () => {
		const response = await fetch(baseURL);

		//asignamos nuestra ref con el valor de la respuesta del fetch en esta
		//funcion
		posts.value = await response.json();

	}

	//creamos la funcion fetchOne, esta consulta un solo post
	//a traves de su id
	const fetchOne = async (id) => {
		//realizamos la peticion fetch, concatenando el id
		const response = await fetch(`${baseURL}/${id}`);
		//lo asignamos a la ref post
		post.value = await response.json();
	}

	//retornamos los posts y la funcion fetchAll
	return {
		posts,
		fetchAll,
		post,
		fetchOne
	}

}