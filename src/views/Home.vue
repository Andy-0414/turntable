<template>
	<div class="home">
		<Turntable class="home__turntable" :data="items" />
		<TurntableItemList v-model="items" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TurntableVue from "../components/Turntable.vue";
import { TurntableItem } from "../models";
import TurntableItemListVue from "../components/TurntableItemList.vue";
export default Vue.extend({
	data() {
		return {
			items: [
				{
					content: "치킨",
					weight: 1,
				},
				{
					content: "피자",
					weight: 1,
				},
				{
					content: "부탄츄",
					weight: 1,
				},
				{
					content: "편의점",
					weight: 1,
				},
				{
					content: "집",
					weight: 1,
				},
			] as TurntableItem[],
		};
	},
	components: {
		Turntable: TurntableVue,
		TurntableItemList: TurntableItemListVue,
	},
	methods: {},
});
</script>

<style lang="scss" scoped>
.home {
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	.home__turntable {
		margin: 20px;
	}
}
</style>
