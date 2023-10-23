app.component('product', {
  data() {
    return {
      name: 'T-Shirt',
      description: "Introducing our Basic T-Shirt: a comfy, durable, and versatile essential. Made from premium cotton, it's perfect for any occasion. Choose from a variety of colors to elevate your everyday style. Get yours now!",
      details: ['Shoulder-to-shoulder taping', 'Coverseamed neck', 'Double-needle sleeves and hem'],
      variants: [
        {
          id: '01',
          color: 'green', 
          image: '../assets/tshirt-green.png', 
          sizes: [
            {variant: 'XS', quantity: 2},
            {variant: 'S', quantity: 5},
            {variant: 'M', quantity: 10},
            {variant: 'L', quantity: 8},
          ],
        },
        {
          id: '02',
          color: 'blue', 
          image: '../assets/tshirt-blue.png', 
          sizes: [
            {variant: 'XS', quantity: 0},
            {variant: 'S', quantity: 5},
            {variant: 'M', quantity: 0},
            {variant: 'L', quantity: 8},
          ],
        },
        {
          id: '03',
          color: 'red', 
          image: '../assets/tshirt-red.png', 
          sizes: [
            {variant: 'XS', quantity: 0},
            {variant: 'S', quantity: 0},
            {variant: 'M', quantity: 0},
            {variant: 'L', quantity: 0},
          ],
        },
      ],
      selectedVariant: 0,
    }
  },

  template: /*html*/
  `
    <main>
      <img class="product-img" :src="selectedProduct.image" />
      <div class="info">
        <product-info 
          :name="name" 
          :description="description" 
          :details="details">
        </product-info>

        <product-options 
          :selectedProduct="selectedProduct"
          :variants="variants"
          @change-variant="changeVariant">
        </product-options>

        <button class="add-to-cart" @click="addToCart" :disabled="!isProductAvailible">Add to Cart</button>
      </div>
    </main>
  `,

  computed: {
    selectedProduct() {
      return this.variants[this.selectedVariant]
    },

    selectedProductImg() {
      return this.selectedProduct.image
    },

    isProductAvailible() {
      return this.selectedProduct.sizes.some(size => size.quantity > 0)
    }
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.selectedProduct.id)
    },

    changeVariant(newVariantIndex) {
      this.selectedVariant = newVariantIndex;
    },
  }
})
