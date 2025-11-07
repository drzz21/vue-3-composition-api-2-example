<template>
	<div class="flex flex-wrap flex-grow">
		<PostCard v-for="post in posts" :key="post.id" :post="post" />
	</div>
</template>
<script setup>
//importamos nuestro composable

//cambiammos nuestras importaciones
//para usar useResource en lugar de usePost
//le especificamos como parametro el recurso que queremos obtener

// import usePost from '../composables/usePost.js';
import useResource from '../composables/useResource.js';

import PostCard from '../components/PostCard.vue';

//inicializamos el composable
// const { posts, fetchAll } = usePost();
const { items: posts, fetchAll } = useResource("posts");

//ejecutamos la funcion del composable para obtener los posts
fetchAll();


</script>

