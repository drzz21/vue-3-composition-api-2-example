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

import { useRoute } from "vue-router";

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
import useResource from "../composables/useResource";

// const { post, fetchOne } = usePost();
//renombramos las importaciones para mayor claridad
//y evitar name clashes
const { item: post, fetchOne: fetchPost } = useResource("posts");

//llamamos la funcion hardcodeando el id del post
//para el ejemplo

//obtenemos el id desde la url
//de esta forma
fetchPost(route.params.id);

// const { user, fetchOne: fetchUser } = useUser();
const { item: user, fetchOne: fetchUser } = useResource("users");

fetchUser(1);
</script>
