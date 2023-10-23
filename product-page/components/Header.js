app.component('header-component', {
  props: {
    cart: { type: Array, required: true },
  },

  template: /*html*/
  `
    <header>
      <h3>Vue 3 Product Page</h3>
      <div class="cart">Cart({{ cart.length }})</div>
    </header>
  `,
})
