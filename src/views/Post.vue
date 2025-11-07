<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>

//importamos nuestro composable y la funcion
//para obtener un solo post

import usePost from "../composables/usePost";

const { post, fetchOne } = usePost();

//llamamos la funcion hardcodeando el id del post
//para el ejemplo

fetchOne(1);


const user = {
  name: "Leanne Graham",
};
</script>
