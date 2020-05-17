<template>
	<div @click="start" class="turntable" :style="{
			width: size,
			height: size,
		}">
		<div class="wrapper" :style="{
				transform: `rotate3d(0,0,1,${rotate}deg)`,
			}">
			<div
				class="fill"
				:class="{ select: result == idx }"
				v-for="(item, idx) in data"
				:key="idx"
				:style="getStyleForSectorForm(idx)"
				ref="fill"
			>
				<p class="fill__content" :style="getStyleForText(idx)">{{ item.content }}</p>
			</div>
		</div>
		<button
			@click="iOSPermission"
			style="position:fixed; bottom:0; left:0; width:100%;"
			v-if="isIOS"
		>IOS 권한 요청</button>
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
			default: []
		},
		size: { type: String as PropType<String>, default: "500px" }
	},
	data() {
		return {
			rotate: (Math.random() * 360) as number, // 돌림판의 각도
			result: -1 as number, // 결과 번호
			isStart: false as boolean, // 돌림판 돌리기가 시작 했는지 확인
			acc: 0 as number, // 돌림판 가속도
			permissionCheck: false // 가속도계 권한 체크
		};
	},
	mounted() {
		if (!this.isIOS) {
			this.setDeviceMotion();
		}
	},
	methods: {
		async start() {
			// 이미 돌림판이 돌아가고있는지 확인
			if (!this.isStart) {
				//초기화
				this.isStart = true;
				this.result = -1;

				// 가속도를 20+random(5)만큼 주어짐
				this.acc = 20 + Math.random() * 20;
				const wait = async (ms: number) =>
					new Promise(r => setTimeout(() => r(), ms));
				while (this.acc > 0.01) {
					await wait(10); // 초당 100번 실행
					this.acc /= 1.02; // 감속
					this.rotate = (this.rotate + this.acc) % 360; // 가속도만큼 회전값에 더함
				}
				this.result = this.checkSelect(); // 결과를 확인
				this.isStart = false;
			}
		},
		setDeviceMotion() {
			if (!this.permissionCheck) {
				this.permissionCheck = true;
				addEventListener("devicemotion", (e: DeviceMotionEvent) => {
					let dmacc: DeviceMotionEventAcceleration | null =
						e.accelerationIncludingGravity || e.acceleration;
					if (dmacc && dmacc.x! > 35) {
						// 휴대폰을 흔들 때
						this.start(); // 돌리기 시작
						if (this.acc > 3 && this.acc < 25) this.acc += 5; // 이미 돌리는 중이라면 가속을 붙여서 계속 돌게함
					}
				});
			}
		},
		iOSPermission(e: Event) {
			e.stopImmediatePropagation();
			// 권한 요청이 가능하면 실행
			if (
				typeof (DeviceMotionEvent as any).requestPermission ===
				"function"
			) {
				(DeviceMotionEvent as any)
					.requestPermission()
					.then((permissionState: string) => {
						if (permissionState === "granted") {
							this.setDeviceMotion();
						}
					})
					.catch(console.error);
			}
		},
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
		checkSelect(): number {
			let angle = 360 - (Math.abs(this.rotate + 90) % 360);
			for (let i = 0; i < this.data.length; i++) {
				let currentAngle =
					(this.data[i].weight / this.getWeightSum) * 360;
				let endAngle = this.getEndPointBySectorForm(i);
				let startAngle = endAngle - currentAngle;
				if (startAngle <= angle && endAngle >= angle) return i;
			}
			return -1;
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
			let polygonPath =
				"50% 50%," +
				`${50 + x1 * 50}% ${50 + y1 * 50}%,` +
				`${50 + x2 * 50}% ${50 + y2 * 50}%,` +
				`${50 + x3 * 50}% ${50 + y3 * 50}%,` +
				`${50 + x4 * 50}% ${50 + y4 * 50}%,` +
				`${50 + x5 * 50}% ${50 + y5 * 50}%`;
			return `-webkit-clip-path: polygon(${polygonPath}); clip-path: polygon(${polygonPath});`;
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
		}
	},
	computed: {
		getWeightSum(): number {
			return this.data
				.map(item => Number(item.weight))
				.reduce((x, y) => x + y);
		},
		isIOS(): boolean {
			return (
				(navigator.userAgent.match(/i(Phone|Pod)/i) != null ||
					navigator.userAgent.match(/Macintosh/i) != null) &&
				!this.permissionCheck
			);
		}
	}
});
</script>

<style lang="scss" scoped>
.turntable {
	cursor: pointer;
	user-select: none;
	position: relative;
	width: 400px;
	height: 400px;

	max-width: calc(100vw - 50px);
	max-height: calc(100vw - 50px);
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;

		clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
		transform: translate(-50%, -75%);

		width: 25px;
		height: 50px;
		background-color: white;

		z-index: 1000;
	}
	.wrapper {
		width: 100%;
		height: 100%;
	}
	.fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: lightcoral;

		transition: width 0.2s, height 0.2s, top 0.2s, left 0.2s;

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
		.fill__content {
			position: absolute;
			left: 50%;
			top: 50%;

			transform: translate(-50%, -50%);

			font-size: 1.5em;
			font-weight: bold;

			transition: font-size 0.2s;
		}
		&.select {
			.fill__content {
				font-size: 2em;
			}
			top: -5%;
			left: -5%;
			width: 110%;
			height: 110%;
		}
	}
}
</style>
