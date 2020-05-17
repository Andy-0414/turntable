<template>
	<ul class="turntableItemList">
		<li class="turntableItemList__item" v-for="(item, idx) in items" :key="idx">
			<div class="turntableItemList__wrapper">
				<input
					class="turntableItemList__item__content"
					type="text"
					:placeholder="`항목${idx + 1}`"
					v-model="item.content"
				/>
				<button class="turntableItemList__item__delete" @click="del(idx)">D</button>
			</div>
			<input
				class="turntableItemList__item__range"
				type="range"
				v-model="item.weight"
				min="0"
				max="10"
			/>
		</li>
		<li class="turntableItemList__addBtn" @click="add">+</li>
	</ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { TurntableItem } from "../models";
export default Vue.extend({
	model: {
		prop: "items"
	},
	props: {
		items: { type: Array as PropType<TurntableItem[]> }
	},
	methods: {
		add() {
			this.items.push({ content: "", weight: 1 });
		},
		del(idx: number) {
			if (this.items.length > 1) this.items.splice(idx, 1);
		}
	}
});
</script>

<style lang="scss" scoped>
.turntableItemList {
	width: 400px;
	height: fit-content;
	list-style: none;

	overflow-y: auto;
	.turntableItemList__item {
		padding: 10px;
		margin: 20px;
		box-shadow: 0px 0px 10px #222222;
		background-color: #444444;

		display: flex;
		flex-direction: column;
		.turntableItemList__wrapper {
			display: flex;
		}
		.turntableItemList__item__content {
			flex: 1;
		}
		.turntableItemList__item__delete {
			margin-left: 10px;
			background-color: crimson;
		}
		.turntableItemList__item__range {
			margin-top: 10px;
		}
	}
	.turntableItemList__addBtn {
		cursor: pointer;
		text-align: center;

		padding: 10px;
		margin: 20px;

		box-shadow: 0px 0px 10px #222222;
		background-color: #36afff;

		width: auto;

		font-weight: bold;
	}
}
</style>
