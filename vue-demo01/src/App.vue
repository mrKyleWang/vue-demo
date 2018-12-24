<template>
	<div id="app">
		<v-home></v-home>
		<hr>
		<v-news></v-news>
	</div>
</template>

<script>
	import Home from "./components/Home.vue";
	import News from "./components/News.vue";
	export default {
		name: "app",
		data() {
			return {
				msg: "Hello vue!"
			};
		},
		components: {
			"v-home": Home,
			"v-news": News
		}
	};
</script>

<style lang="scss">
</style>
