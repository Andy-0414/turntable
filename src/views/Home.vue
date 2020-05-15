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
					content: "1",
					weight: 1,
				},
				{
					content: "2",
					weight: 1,
				},
				{
					content: "3",
					weight: 1,
				},
				{
					content: "4",
					weight: 1,
				},
				{
					content: "5",
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
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	.home__turntable {
		margin: 20px;
	}
}
</style>
