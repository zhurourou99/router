<template>
	<div class="gather">
		<table>
			<tr>
			<th>服务器IP</th>
			<th>今日采集</th>
			<th>总采集</th>
			<th>今日入库</th>
			<th>总入库</th>
			<th></th>最新更新</tr>
			<th></th><button>添加</button></tr>
		</tr>
		<tr>
			<tb>1</tb>
			<tb>2</tb>
			<tb>3</tb>
			<tb>1</tb>
			<tb>2</tb>
			<tb>3</tb>
			<tb>7</tb>
		</tr>
		</table>
	</div>
</template>

<script>
export default {
  name: 'gather'
}
</script>

<style scoped>
.gather tr{
	width: 100%;
	border: 1px solid red;
}
.gather th{
	width: 15%;
	color: black;
}	
	
</style>
