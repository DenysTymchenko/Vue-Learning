app.component('product-info', {
  props: {
    name: { type: String, required: true},
    description: { type: String, required: true},
    details: { type: Array, required: true},
  },

  template: /*html*/
  `
    <h2 class="product-name">{{ name }}</h2>
    <h3 class="product-description">{{ description }}</h3>
    <ul class="details">
      <li v-for="(detail, index) in details" :key="index">
        {{ detail }}
      </li>
    </ul>
  `
})
