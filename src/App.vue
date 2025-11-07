<template>
	<nav class="p-5 bg-green-400 text-white mb-10">
		<router-link :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
	</nav>
	<div class="container">
		<!-- 
		de este modo implementamos suspense,
		poniendo nuestro componente default que será
		el que se cargará cuando todo salga bien, y el fallback
		que será lo que se muestre mientras se carga el componente
		todo envuelto en un tag <suspense>.

		-->
		<!-- <suspense>
			<template #default>
				<router-view></router-view>
			</template>
      <template #fallback>
        <div class="text-center">Loading...</div>
      </template>
		</suspense> -->

		<!-- pero en router view se implementa de este modo,
		 validando en cada ruta el componente porque
		 sino, truena la aplicacion al cambiar de ruta -->
		<router-view v-slot="{ Component }">
			<template v-if="Component">
				<suspense>
					<template #default>
						<component :is="Component"></component>
					</template>
					<template #fallback>
						<div class="text-center">Loading...</div>
					</template>
				</suspense>
			</template>
		</router-view>
	</div>
</template>

<script setup></script>
<style lang="css">
.container {
	max-width: 960px;
	margin: 0 auto;
}
</style>

