<template>
	<div class="flex flex-wrap flex-grow">
		<PostCard v-for="post in posts" :key="post.id" :post="post" />
	</div>
</template>
<script setup>
//importamos nuestro composable
import usePost from '../composables/usePost.js';

import PostCard from '../components/PostCard.vue';

//inicializamos el composable
const { posts, fetchAll } = usePost();

//ejecutamos la funcion del composable para obtener los posts
fetchAll();


</script>

