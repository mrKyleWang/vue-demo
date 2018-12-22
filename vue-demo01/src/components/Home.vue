<template>
	<div>
		<v-header></v-header>
		<h2>首页</h2>
		<hr>
		<v-news></v-news>
	</div>
</template>

<script>
	import Header from "./Header.vue";
	import News from "./News.vue";
	export default {
		data() {
			return {
			};
		},
		components: {
			"v-header": Header,
			"v-news": News
		},
		
	};
</script>

<style lang="scss" scoped>
	h2 {
		color: red;
	}
</style>
