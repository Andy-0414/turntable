<template>
	<div id="app">
		<router-view />
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
}
</style>
