<template>
	<div>
		<button @click="getHeader">show head</button>
		<v-header :author="author" ref="header"></v-header>
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
				msg: "this is home",
				author: "kyle wang"
			};
		},
		methods: {
			getHeader() {
				alert(this.$refs.header.msg);
			}
		},
		components: {
			"v-header": Header,
			"v-news": News
		}
	};
</script>

<style lang="scss" scoped>
	h2 {
		color: red;
	}
</style>
