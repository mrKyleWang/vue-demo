<template>
	<div>
		<button @click="getData">请求新闻数据</button>
		<ul>
			<li v-for="item in list">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		components: {},
		methods: {
			getData() {
				var api =
					"http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
				this.$http.get(api).then(
					response => {
						this.list = response.body.result;
					},
					err => {
						console.log(err);
					}
				);
			}
		},
		mounted() {
			this.getData();
		},
	};
</script>

<style>
</style>
