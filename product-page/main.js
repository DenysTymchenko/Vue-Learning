const app = Vue.createApp({
  data() {
    return {
      cart: []
    }
  },

  methods: {
    updateCart(productId) {
      this.cart.push(productId)
    }
  }
})
