<template>
	<div id="content">详情组件
		<h4>{{msg.title}}</h4>
		<div v-html="msg.content"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: {
					title: "",
					content: ""
				}
			};
		},
		components: {},
		methods: {
			requestData(aid) {
				var api =
					"http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" +
					aid;
				this.$http.get(api).then(
					response => {
						this.msg = response.body.result[0];
						console.log(response);
					},
					err => {
						console.log(err);
					}
				);
			}
		},
		mounted() {
			var aid = this.$route.params.aid;
			this.requestData(aid);
		}
	};
</script>

<style>
</style>