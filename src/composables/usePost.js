import { ref } from "vue";

//creamos nuestro composable para obtener los posts
export default function usePost() {
	//vamos a almacenarlos en un ref porque reemplazaremos
	//todo el arreglo
	const posts = ref([]);

	//creamos la funcion asincrona y usamos la api fetch
	//para obtener los valores
	const fetchAll = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");

		//asignamos nuestra ref con el valor de la respuesta del fetch en esta
		//funcion
		posts.value = await response.json();

	}

	//retornamos los posts y la funcion fetchAll
	return {
		posts,
		fetchAll
	}

}