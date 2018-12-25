<template>
	<div id="user">
		<div class="user">
			<div class="left">
				<ul>
					<li>
						<router-link to="/user/add">新增用户</router-link>
					</li>
					<li>
						<router-link to="/user/list">用户列表</router-link>
					</li>
				</ul>
			</div>
			<div class="right">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "我是user组件"
			};
		},
		components: {}
	};
</script>

<style lang ='scss' scoped>
	.user {
		display: flex;
		.left {
			width: 200px;
			min-height: 400px;
			border-right: 1px solid #eee;
		}
	}
</style>