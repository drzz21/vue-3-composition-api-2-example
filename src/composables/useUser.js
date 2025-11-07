import { ref } from "vue";

//creamos nuestro composable para obtener usuarios, adaptado especificamente para los usuarios

export default function useUser() {
	const users = ref([]);
	const user = ref({});

	const baseURL="https://jsonplaceholder.typicode.com/users";

	const fetchAll = async () => {
		const response = await fetch(baseURL);
		users.value = await response.json();
	}

	const fetchOne = async (id) => {
		const response = await fetch(`${baseURL}/${id}`);
		user.value = await response.json();
	}

	return {
		users,
		fetchAll,
		user,
		fetchOne
	}

}