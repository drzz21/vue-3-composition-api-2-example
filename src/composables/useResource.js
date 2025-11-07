import { ref } from "vue";

//creamos un composable generico para obtener cualquier recurso
//recibimos el nombre del recurso en la funcion
//para poder obtener tanto posts como usuarios
//esto lo vuelve un composable reutilizable y mas genérico
//para no tener tantas importaciones

export default function useResource(resource) {
	const items = ref([]);
	const item = ref({});

	const baseURL=`https://jsonplaceholder.typicode.com/${resource}`;

	const fetchAll = async () => {
		const response = await fetch(baseURL);
		items.value = await response.json();
	}

	const fetchOne = async (id) => {
		const response = await fetch(`${baseURL}/${id}`);
		item.value = await response.json();
	}

	return {
		items,
		fetchAll,
		item,
		fetchOne
	}

}