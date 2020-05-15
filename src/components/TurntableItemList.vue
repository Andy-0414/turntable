<template>
	<ul class="turntableItemList">
		<li
			class="turntableItemList__item"
			v-for="(item, idx) in items"
			:key="idx"
		>
			<input class="turntableItemList__item__content" type="text" v-model="item.content" />
			<input class="turntableItemList__item__range" type="range" v-model="item.weight" min="1" max="100" />
		</li>
	</ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { TurntableItem } from "../models";
export default Vue.extend({
	model: {
		prop: "items",
	},
	props: {
		items: { type: Array as PropType<TurntableItem[]> },
	},
});
</script>

<style lang="scss" scoped>
.turntableItemList {
	list-style: none;
	.turntableItemList__item {
        padding: 10px;
        .turntableItemList__item__content{

        }
        .turntableItemList__item__range{

        }
	}
}
</style>
