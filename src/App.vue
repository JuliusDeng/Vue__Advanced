<template>
  <div id="app" class="container p-5">
		<h3>Vue.js：</h3>
		<!-- <on-emit></on-emit> -->
		
		<!-- <div class="alert alert-primary" v-show="show">
			消息提示
		</div>
		<provide></provide> -->
		
		<!-- <demo></demo> -->
		<!-- <time-xia></time-xia> -->
		<!-- <button class="btn btn-success" @click="clickEvent">app.vue的点击事件</button> -->
		<!-- v-slot 案例 -->
		<demo></demo>
		
  </div>
</template>

<script>
	// import demo from "@/components/ref-parent-children/demo.vue"
	// import demo from "@/components/provide-test/demo.vue"
	// import demo from '@/components/provide-inject/demo.vue'
	import demo from '@/components/on-emit/demo.vue'
	// import demo from '@/components/directive/demo.vue'
	// import demo from "@/components/directive/v-menu.vue"
	// import demo from '@/components/nextTick/demo.vue'
	// import demo from '@/components/sync/demox.vue'
	// import demo from '@/components/mixin/demo.vue'
	// import timeXia from "@/components/demo/time.vue"
	// import demo from "@/components/v-slot/demo.vue"
	// import demo from "@/components/demo-ref/demo.vue"

export default {
	provide() {
		return {
			$_app: this
		}
	},
	// provide() {
	// 	return {
	// 		show: this.show,
	// 		showHide: this.showHide
	// 	}
	// },
  name: 'app',
  components: {
    // provide,
		demo,
		// timeXia
  },
	data() {
		return {
			// show: false
		}
	},
	methods: {
		// showHide(data) {
		// 	this.show = data
		// }
		clickEvent() {
			this.$emit('test', {
				value: 'app.vue的点击事件'
			})
		}
	}
	
}
</script>

<style>
	
</style>
