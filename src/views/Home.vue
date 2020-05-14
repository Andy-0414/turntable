<template>
	<div></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	created(){
		function handleOrientation(e:DeviceOrientationEvent){
			console.log(e)
		}
		addEventListener("deviceorientation",handleOrientation)
	}
});
</script>

<style lang="scss" scoped></style>
