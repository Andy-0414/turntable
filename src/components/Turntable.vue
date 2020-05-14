<template>
	<div class="turntable">
		<div
			class="fill"
			v-for="(item, idx) in data"
			:key="item.content"
			:style="getStyleForSectorForm(idx)"
			ref="fill"
		></div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
	name: "Turntable",
	props: {
		data: Array as PropType<any[]>,
	},
	methods: {
		degreesToRadians(degrees: number): number {
			return degrees * (Math.PI / 180);
		},
		getEndPointBySectorForm(idx: number): number {
			if (idx == 0)
				return (this.data[idx].weight / this.getWeightSum) * 360;
			else {
				let sum = 0;
				for (let i = 0; i <= idx; i++) {
					sum += (this.data[i].weight / this.getWeightSum) * 360;
				}
				return sum;
			}
			// else
			// 	return (
			// 		this.getEndPointBySectorForm(idx - 1) +
			// 		(this.data[idx].weight / this.getWeightSum) * 360
			// 	);
		},
		getStyleForSectorForm(idx: number): string {
			let currentAngle =
				(this.data[idx].weight / this.getWeightSum) * 360;
			let endAngle = this.getEndPointBySectorForm(idx);
			let startAngle = endAngle - currentAngle;
			let centerAngle = (startAngle + endAngle) / 2;

			endAngle = this.degreesToRadians(endAngle);
			startAngle = this.degreesToRadians(startAngle);
			centerAngle = this.degreesToRadians(centerAngle);

			let x1 = Math.cos(startAngle);
			let y1 = Math.sin(startAngle);
			let x2 = Math.cos(centerAngle) * 100;
			let y2 = Math.sin(centerAngle) * 100;
			let x3 = Math.cos(endAngle);
			let y3 = Math.sin(endAngle);

			// //dev code
			// this.$nextTick(() => {
			// 	let p1 = document.createElement("p");
			// 	p1.style.position = "absolute";
			// 	p1.style.zIndex = "100";
			// 	p1.style.width = "10px";
			// 	p1.style.height = "10px";
			// 	p1.style.backgroundColor = "red";
			// 	p1.style.top = 200 + y1 * 200 + "px";
			// 	p1.style.left = 200 + x1 * 200 + "px";
			// 	p1.style.color = "white";
			// 	p1.innerText = idx.toString();
			// 	this.$el.appendChild(p1);

			// 	let p2 = document.createElement("p");
			// 	p2.style.position = "absolute";
			// 	p2.style.zIndex = "100";
			// 	p2.style.width = "15px";
			// 	p2.style.height = "10px";
			// 	p2.style.backgroundColor = "green";
			// 	p2.style.top = 200 + y2 * 200 + "px";
			// 	p2.style.left = 200 + x2 * 200 + "px";
			// 	p2.style.color = "white";
			// 	p2.innerText = idx.toString();
			// 	this.$el.appendChild(p2);

			// 	let p3 = document.createElement("p");
			// 	p3.style.position = "absolute";
			// 	p3.style.zIndex = "100";
			// 	p3.style.width = "20px";
			// 	p3.style.height = "10px";
			// 	p3.style.backgroundColor = "blue";
			// 	p3.style.top = 200 + y3 * 200 + "px";
			// 	p3.style.left = 200 + x3 * 200 + "px";
			// 	p3.style.color = "white";
			// 	p3.innerText = idx.toString();
			// 	this.$el.appendChild(p3);
			// });

			return `
			clip-path: polygon(50% 50%, ${50 + x1 * 50}% ${50 + y1 * 50}%, ${50 +
				x2 * 50}% ${50 + y2 * 50}%, ${50 + x3 * 50}% ${50 +
				y3 * 50}%);`;
		},
	},
	computed: {
		getWeightSum(): number {
			console.log(this.data.map((item) => item.weight));
			return this.data
				.map((item) => Number(item.weight))
				.reduce((x, y) => x + y);
		},
	},
});
</script>

<style lang="scss" scoped>
.turntable {
	width: 400px;
	height: 400px;
	position: relative;
	.fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: lightcoral;
		opacity: 0.5;
		transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

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
	}
}
</style>
