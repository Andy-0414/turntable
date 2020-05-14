<template>
	<div>
		<div
			class="fill"
			v-for="(item,idx) in items"
			:key="item.content"
			:style="`
            transform: rotate(${getCurrentAngle(idx)}deg);
	        clip-path: polygon(0% 0%, ${getAngleToPoint((item.weight/getWeightSum)*360)*100}% 0%, 50% 50%, 0% ${getAngleToPoint((item.weight/getWeightSum)*360)*100}%);
            `"
		>{{(item.weight/getWeightSum)*360}}</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	data() {
		return {
			items: [
				{
					content: "치킨",
					weight: 90
				},
				{
					content: "피자",
					weight: 90
				},
				{
					content: "부탄츄",
					weight: 90
				},
				{
					content: "편의점",
					weight: 45
				},
				{
					content: "집",
					weight: 45
				}
			]
		};
	},
	methods: {
		getCurrentAngle(index: number): number {
			let sum = 0;
			for (let i = 0; i <= index; i++) {
				sum += (this.items[i].weight / this.getWeightSum) * 360;
			}
			console.log("SUM:", sum);
			return sum;
		},
		degreesToRadians(degrees: number): number {
			return degrees * (Math.PI / 180);
		},
		getAngleToPoint(angle: number): number {
			let radian = this.degreesToRadians(angle);
			let result = Math.sin(radian)/2;
            console.log(Math.atan2(1,1)*180/Math.PI);
            
			return result;
		}
	},
	computed: {
		getWeightSum(): number {
			return this.items.map(item => item.weight).reduce((x, y) => x + y);
		}
	}
});
</script>

<style lang="scss" scoped>
.fill {
	position: absolute;
	top: 0;
	left: 0;
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background: lightcoral;
	opacity: 0.75;
	&:nth-child(2n) {
		background-color: lightblue;
	}
	&:nth-child(3n) {
		background-color: lightskyblue;
	}
	&:nth-child(4n) {
		background-color: lightgreen;
	}
	&:nth-child(5n) {
		background-color: lightsalmon;
	}
	&:hover {
		background-color: red;
	}
	.fill__content {
		position: relative;
		bottom: 100px;
		right: 50px;
	}
}
</style>
