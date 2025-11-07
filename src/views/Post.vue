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

import usePost from "../composables/usePost";

const { post, fetchOne } = usePost();

//llamamos la funcion hardcodeando el id del post
//para el ejemplo

//obtenemos el id desde la url
//de esta forma
fetchOne(route.params.id);


const user = {
  name: "Leanne Graham",
};
</script>
