<template>
	<div class="home">
		<Turntable class="home__turntable" :data="items" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TurntableVue from "../components/Turntable.vue";
import { TurntableItem } from "../models";
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
			] as TurntableItem[],
		};
	},
	components: {
		Turntable: TurntableVue,
	},
	methods: {},
});
</script>

<style lang="scss" scoped>
.home {
	width: 100%;
	height: 100%;
	.home__turntable {
		margin: 20px;
	}
}
</style>
