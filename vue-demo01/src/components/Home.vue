<template>
	<div id="home">
		<button @click="getHeader">show head</button>
		<v-header :author="author" ref="header"></v-header>
		<h2>首页</h2>
		<button @click="emitNews()">给新闻组件广播事件</button>
		<button @click="goNews()">跳转新闻页面</button>
	</div>
</template>

<script>
	import Header from "./Header.vue";
	import VuewEvent from "../model/VueEvent.js";
	import VueEvent from "../model/VueEvent.js";
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
			},
			emitNews() {
				VueEvent.$emit("to-news", this.msg);
			},
			goNews() {
				// this.$router.push("/news");
				// this.$router.push({ path: "news" });
				this.$router.push({ name: "news" });
			}
		},
		components: {
			"v-header": Header
		}
	};
</script>

<style lang="scss" scoped>
	h2 {
		color: red;
	}
</style>
