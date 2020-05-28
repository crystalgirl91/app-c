import Vue from 'vue'
import photoCropper from "./photoCropper.vue";

const Construct = Vue.extend(photoCropper)

photoCropper.install = function (data) {
  let instance = new Construct({
    data
  }).$mount()
  document.body.appendChild(instance.$el)
}

export default photoCropper
