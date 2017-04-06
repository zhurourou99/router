<template>
  <div class="hello">
    <div class="headNav">
    	<ul>
    		<li>云图</li>
    		<li>
    			<router-link to="/gather">采集集群</router-link>
    			<router-link to="/task">任务</router-link>
    			<router-view></router-view>
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
  background: #1D8CE0;
  height: 45px;
  margin-top: -10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  float: left;
  color: white;
  font-family: "微软雅黑"; 
  line-height: 45px;
}

li:first-child {
  font-size: 30px;
  margin-left: 8%;
  font-weight: bold;
}

li:last-child {
  font-size: 16px;
  margin-left: 45%;
}

</style>
