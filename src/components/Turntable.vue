<template>
	<div
		class="turntable"
		:style="{
			width: size + 'px',
			height: size + 'px',
			transform: 'rotate(' + rotate + 'deg)',
		}"
	>
		<div
			class="fill"
			:class="{ select: checkSelect(idx) }"
			v-for="(item, idx) in data"
			:key="item.content"
			:style="getStyleForSectorForm(idx)"
			ref="fill"
		>
			<p class="fill__content" :style="getStyleForText(idx)">
				{{ item.content }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { TurntableItem } from "@/models";
export default Vue.extend({
	name: "Turntable",
	props: {
		data: {
			type: Array as PropType<TurntableItem[]>,
			required: true,
			default: [],
		},
		size: { type: Number as PropType<Number>, default: 400 },
	},
	data() {
		return {
			rotate: 0,
		};
	},
	mounted() {
		addEventListener("keydown", (e: KeyboardEvent) => {
			if (e.keyCode == 38) {
				this.rotate += 10;
			}
			if (e.keyCode == 40) {
				this.rotate -= 10;
			}
		});
	},
	methods: {
		degreesToRadians(degrees: number): number {
			return degrees * (Math.PI / 180);
		},
		getEndPointBySectorForm(idx: number): number {
			if (idx == 0)
				return (this.data[idx].weight / this.getWeightSum) * 360;
			else
				return (
					this.getEndPointBySectorForm(idx - 1) +
					(this.data[idx].weight / this.getWeightSum) * 360
				);
		},
		checkSelect(idx: number) {
			let angle = 360 - (Math.abs(this.rotate+90) % 360);

			let currentAngle =
				(this.data[idx].weight / this.getWeightSum) * 360;
			let endAngle = this.getEndPointBySectorForm(idx);
			let startAngle = endAngle - currentAngle;

			console.log(startAngle, endAngle, angle);
			// endAngle = this.degreesToRadians(endAngle);
			// startAngle = this.degreesToRadians(startAngle);

			// let x1 = Math.cos(startAngle);
			// let y1 = Math.sin(startAngle);
			// let x2 = Math.cos(endAngle);
			// let y2 = Math.sin(endAngle);
			// let xp = Math.cos(angle);
			// let yp = Math.sin(angle);

			return startAngle <= angle && endAngle >= angle;
		},
		getStyleForSectorForm(idx: number): string {
			let currentAngle =
				(this.data[idx].weight / this.getWeightSum) * 360;
			let endAngle = this.getEndPointBySectorForm(idx);
			let startAngle = endAngle - currentAngle;
			let centerAngle = (startAngle + endAngle) / 2;
			let quarterStartAngle = (startAngle + centerAngle) / 2;
			let quarterEndAngle = (endAngle + centerAngle) / 2;

			endAngle = this.degreesToRadians(endAngle);
			startAngle = this.degreesToRadians(startAngle);
			centerAngle = this.degreesToRadians(centerAngle);
			quarterStartAngle = this.degreesToRadians(quarterStartAngle);
			quarterEndAngle = this.degreesToRadians(quarterEndAngle);

			let x1 = Math.cos(startAngle);
			let y1 = Math.sin(startAngle);
			let x2 = Math.cos(quarterStartAngle) * 100;
			let y2 = Math.sin(quarterStartAngle) * 100;
			let x3 = Math.cos(centerAngle) * 100;
			let y3 = Math.sin(centerAngle) * 100;
			let x4 = Math.cos(quarterEndAngle) * 100;
			let y4 = Math.sin(quarterEndAngle) * 100;
			let x5 = Math.cos(endAngle);
			let y5 = Math.sin(endAngle);

			//dev code
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

			// 	let p4 = document.createElement("p");
			// 	p4.style.position = "absolute";
			// 	p4.style.zIndex = "100";
			// 	p4.style.width = "20px";
			// 	p4.style.height = "10px";
			// 	p4.style.backgroundColor = "yellow";
			// 	p4.style.top = 200 + y4 * 200 + "px";
			// 	p4.style.left = 200 + x4 * 200 + "px";
			// 	p4.style.color = "white";
			// 	p4.innerText = idx.toString();
			// 	this.$el.appendChild(p4);

			// 	let p5 = document.createElement("p");
			// 	p5.style.position = "absolute";
			// 	p5.style.zIndex = "100";
			// 	p5.style.width = "20px";
			// 	p5.style.height = "10px";
			// 	p5.style.backgroundColor = "cyan";
			// 	p5.style.top = 200 + y5 * 200 + "px";
			// 	p5.style.left = 200 + x5 * 200 + "px";
			// 	p5.style.color = "white";
			// 	p5.innerText = idx.toString();
			// 	this.$el.appendChild(p5);
			// });

			return (
				"clip-path: polygon(50% 50%," +
				`${50 + x1 * 50}% ${50 + y1 * 50}%,` +
				`${50 + x2 * 50}% ${50 + y2 * 50}%,` +
				`${50 + x3 * 50}% ${50 + y3 * 50}%,` +
				`${50 + x4 * 50}% ${50 + y4 * 50}%,` +
				`${50 + x5 * 50}% ${50 + y5 * 50}%);`
			);
		},
		getStyleForText(idx: number) {
			let currentAngle =
				(this.data[idx].weight / this.getWeightSum) * 360;
			let endAngle = this.getEndPointBySectorForm(idx);
			let startAngle = endAngle - currentAngle;
			let centerAngle = (startAngle + endAngle) / 2;

			centerAngle = this.degreesToRadians(centerAngle);

			let x = Math.cos(centerAngle) / (3 / 2);
			let y = Math.sin(centerAngle) / (3 / 2);

			return `top:${50 + y * 50}%;
			left:${50 + x * 50}%;
			transform: translate(-50%, -50%) rotate(${(startAngle + endAngle) / 2 +
				90}deg);`;
		},
	},
	computed: {
		getWeightSum(): number {
			return this.data
				.map((item) => Number(item.weight))
				.reduce((x, y) => x + y);
		},
	},
});
</script>

<style lang="scss" scoped>
.turntable {
	position: relative;
	width: 400px;
	height: 400px;
	.fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: lightcoral;

		transition: 0.2s;

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
		&.select {
			background-color: red;
		}
		.fill__content {
			position: absolute;
			left: 50%;
			top: 50%;

			transform: translate(-50%, -50%);

			font-size: 1.5em;
			font-weight: bold;
		}
	}
}
</style>
