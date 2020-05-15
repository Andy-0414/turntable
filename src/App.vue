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

	overflow-y: hidden;
}
#app {
	display: flex;
	justify-content: center;
	align-items: center;
}
.router {
	width: 100%;
	height: 100%;
	overflow: hidden;
	overflow-y: auto;
}
button {
	cursor: pointer;
	background-color: #222222;
	border: none;
	outline: none;
	color: white;
	padding: 10px;

	font-size: 1em;

	&:hover {
		background-color: #333333;
	}
}
input[type="text"] {
	background-color: #222222;
	border: none;
	outline: none;
	color: white;
	padding: 10px;

	font-size: 1em;
}

input[type="range"] {
	background-color: #222222;

	outline: none;
	-webkit-appearance: none;

	font-size: 1em;

	overflow: hidden;

	&::-webkit-slider-thumb {
		width: 10px;
		height: 10px;
		-webkit-appearance: none;
		background: #36afff;
		box-shadow: -100vw 0 0 100vw #36afff;
		border: 0.1px solid #36afff;
	}
}
::-webkit-scrollbar {
	width: 5px;
}
::-webkit-scrollbar-thumb:window-inactive,
::-webkit-scrollbar-thumb {
	width: 5px;
	background-color: #444444;
}
::-webkit-scrollbar-track {
	width: 5px;
	background-color: #111111;
}
</style>
