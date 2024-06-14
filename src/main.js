import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import store from './store'

import { Icon } from '@iconify/vue';

const app = createApp(App)


app.directive('focus', {
  mounted(el) {
    el.focus()
  }
});

app.directive('color', {
  mounted(el, binding) {
    el.style.color = binding.value
    console.log('element', el);
    console.log('binding', binding);
  }
})


app.directive('tooltip', {
  mounted(el, binding) {
    const div = document.createElement('div')
    div.innerText = binding.value
    div.style.position = 'absolute'
    el.style.position = 'relative'
    div.style.top = '-20px'
    div.style.backgroundColor = 'black'
    div.style.color = 'white'
    div.style.display = 'none'
    el.appendChild(div)
    el.onmouseenter = function () {
      div.style.display = 'block'
    }
    el.onmouseleave = function () {
      div.style.display = 'none'
    }

  }
})




app.component(Icon)
app.use(router)
app.use(store)
app.mount('#app')
