<template>
	<div>
		{{event}}
		<br>
		<button @click="getDataByAxios">请求新闻数据</button>
		<ul>
			<li v-for="item in list">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	import Axios from "axios";
	import VueEvent from "../model/VueEvent.js";
	export default {
		data() {
			return {
				event: "",
				list: []
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
			},
			getDataByAxios() {
				var api =
					"http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
				Axios.get(api)
					.then(response => {
						console.log(response);
						this.list = response.data.result;
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		mounted() {
			VueEvent.$on("to-news", event => {
				this.event = event;
			});
			this.getData();
		}
	};
</script>

<style>
</style>
