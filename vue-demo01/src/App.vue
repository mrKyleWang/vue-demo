<template>
	<div id="app">
		<v-home></v-home>
	</div>
</template>

<script>
	import Home from "./components/Home.vue";
	export default {
		name: "app",
		data() {
			return {
				msg: "Hello vue!"
			};
		},
		components: {
			"v-home": Home
		}
	};
</script>

<style lang="scss">
</style>
