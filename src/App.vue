<template>
  <div id="app" class="container p-5">
		<h3>你可知今天是：</h3>
		<!-- <on-emit></on-emit> -->
		
		<!-- <div class="alert alert-primary" v-show="show">
			消息提示
		</div>
		<provide></provide> -->
		
		<demo></demo>
		<!-- <time-xia></time-xia> -->
		<!-- <button class="btn btn-success" @click="clickEvent">app.vue的点击事件</button> -->
  </div>
</template>

<script>
	// import demo from "@/components/provide-test/demo.vue"
	import demo from '@/components/on-emit/demo.vue'
	// import demo from '@/components/provide-inject/demo.vue'
	// import demo from '@/components/directive/demo.vue'
	// import demo from "@/components/directive/v-menu.vue"
	// import demo from '@/components/nextTick/demo.vue'
	// import demo from '@/components/sync/demox.vue'
	// import demo from '@/components/mixin/demo.vue'
	// import timeXia from "@/components/demo/time.vue"

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
