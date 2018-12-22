<template>
	<div>
		<v-header></v-header>
		<h2>首页</h2>
		<hr>
		<v-life></v-life>
	</div>
</template>

<script>
	import Header from "./Header.vue";
	import Life from "./Life.vue";
	export default {
		components: {
			"v-header": Header, 
			"v-life": Life
		}
	};
</script>

<style lang="scss" scoped>
	h2 {
		color: red;
	}
</style>
