<template>
	<div id="app">
		<router-view class="router" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body,
#app {
	background-color: #333333;
	width: 100vw;
	height: 100vh;

	font-size: 16px;
	color: white;
}
#app {
	display: flex;
	justify-content: center;
	align-items: center;
}
.router {
	width: 100%;
	height: 100%;
}

input[type="text"] {
	background-color: #222222;
	border: none;
	outline: none;
	color: white;
	padding: 10px;
	
	font-size: 1em;
}
</style>
