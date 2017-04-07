<template>
  <div class="hello">
    <div class="headNav">
    	<ul>
    		<li>云图</li>
    		<li>
    			<router-link to="/gather">采集集群</router-link>
    			<router-link to="/task">任务</router-link>
    			<div class="views">
    				<router-view></router-view>		
    			</div>
    		</li>
    		<li>退出系统</li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headNav {
  width: 100%;
  background: #99A9BF;
  height: 45px;
  margin-top: -10px;
}

ul {
  list-style-type: none;
  padding: 0;
  height: 45px;
}

li {
  float: left;
  color: white;
  font-family: "微软雅黑"; 
  line-height: 45px;
}

li:first-child {
  font-size: 30px;
  margin-left: 5%;
  font-weight: bold;
}

li:nth-child(2n) {
  font-size: 16px;
  margin-left: 5%;
}

li:last-child {
  font-size: 16px;
  position: absolute;
  right: 10%;
}

a {
	padding-right: 20px;
	color: white;
  text-decoration: none;
}

.router-link-active {
	color: #e02222;
	font-size: 18px;
	font-weight: bold;
}

.views{
	width: 100%;
	border: 1px solid red;
}

</style>
