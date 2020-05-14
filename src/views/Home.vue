<template>
	<div class="home">
		<Turntable :data="items" />
		<input
			type="range"
			min="0"
			max="90"
			step="1"
			v-model="items[0].weight"
			@change="chkData"
		/>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TurntableVue from "../components/Turntable.vue";
export default Vue.extend({
	data() {
		return {
			items: [
				{
					content: "치킨",
					weight: 90,
				},
				{
					content: "피자",
					weight: 90,
				},
				{
					content: "부탄츄",
					weight: 90,
				},
				{
					content: "편의점",
					weight: 20,
				},
				{
					content: "집",
					weight: 20,
				},
			],
		};
	},
	components: {
		Turntable: TurntableVue,
	},
	methods: {
		chkData() {
			console.log(this.items);
		},
	},
});
</script>

<style lang="scss" scoped>
.home {
}
</style>
