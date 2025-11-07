<template>
	<div v-if="post && user">
		<h1 class="text-3xl">{{ post.title }}</h1>
		<div class="text-gray-500 mb-10">by {{ user.name }}</div>
		<div>{{ post.body }}</div>
	</div>
</template>
<script setup>
//importamos los composables de vue router
//para poder obtener el id del post desde la url

import { useRoute } from 'vue-router';

const route = useRoute();

//importamos nuestro composable y la funcion
//para obtener un solo post

// import usePost from "../composables/usePost";

// import useUser from "../composables/useUser";

//cambiamos nuestras importaciones
//para usar useResource en lugar de usePost o useUser
//le especificamos como parametro el recurso que queremos obtener
//de este modo solo importamos un solo composable
//y lo reutilizamos para distintos recursos
import useResource from '../composables/useResource';
import { watch } from 'vue';

// const { post, fetchOne } = usePost();
//renombramos las importaciones para mayor claridad
//y evitar name clashes
const { item: post, fetchOne: fetchPost } = useResource('posts');

// (async () => {
fetchPost(route.params.id);
// fetchUser(post.value.userId);
// })();

//llamamos la funcion hardcodeando el id del post
//para el ejemplo

//obtenemos el id desde la url
//de esta forma
// fetchPost(route.params.id);

// const { user, fetchOne: fetchUser } = useUser();
const { item: user, fetchOne: fetchUser } = useResource('users');

//de la forma en que se implementa el watch, 
//lo hacemos así para esperar la respuesta del post, y una vez que 
//responda, usar el user id de ese post, para consultar el usuario
// asociada a ese post, de este modo podemos agregar llamadas
//asincronas encadenadas en un script setup

watch(()=>({...post.value}), (newPost) => {
  console.log('Post changed:', newPost);
  
    fetchUser(newPost.userId);
  
});

//esto de aqui es una forma de encadenar las peticiones
//en un script setup, ya que no podemos usar await
// directamente en el cuerpo del script setup
//creamos un iife que es una funcion autoejecutable
//asincronca, donde llamamos a fetchPost y luego
//cuando responda, llamamos a fetchUser
//esto lo hacemos asi ya que dependemos del userId
//que no podemos obtener hasta haber obtenido el post

// (async () => {
// 	await fetchPost(route.params.id);
// 	fetchUser(post.value.userId);
// })();


</script>

