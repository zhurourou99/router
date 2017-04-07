<template>
	<div class="task">
		<router-link to="/task/list">任务列表</router-link>
    	<router-link to="/task/allot">任务分配</router-link>
    	<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'task'
}
</script>

<style scoped>
	.task{
		width: 100%;
	}
	
	.task a {
		display: inline-block;
		width: 50%;
		text-align: center;
		border: 1px solid red;
		margin: 10px 0 10px 10px;
		padding: 15% 5px;
		color: #555;
		text-decoration: none;
	}	
	
</style>
