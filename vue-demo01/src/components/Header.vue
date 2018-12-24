<template>
	<div id="header">
		{{msg}}
		<button @click="getParent">show parent</button>
		<br>
		{{author}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "this is a header"
			};
		},
		methods: {
			getParent() {
				alert(this.$parent.msg);
			}
		},
		props: ["author"]
	};
</script>

<style lang="scss" scoped>
	div {
		font-size: 13px;
	}
</style>
