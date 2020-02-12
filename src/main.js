import Vue from 'vue'
import App from './App.vue'

// 全局混入mixin
import mixin from "@/components/mixin/mixin.js"
Vue.mixin(mixin)

Vue.directive("skeleton", {
	bind(el, binding) {
		// console.log(binding, '---bind');
		el.style.backgroundColor = "#eeeeee",
		el.style.color = "#eeeeee"
	},
	update(el, binding) {
		// console.log('---update');
		console.log(binding, '--binding');
		// console.log(binding.value);
		// console.log(binding.modifiers, '--update el');
		el.style.backgroundColor = "";
		el.style.color = "";
		for (let key in binding.modifiers) {
			switch (key){
				case "img":
				el.src = binding.value
					break;
				case "text":
				el.innerHTML = binding.value
					break;
			}
		}
	}
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
