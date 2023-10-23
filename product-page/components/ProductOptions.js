app.component('product-options', {
  props: {
    selectedProduct: { type: Object, required: true },
    variants: { type: Array, required: true },
  },

  template: /*html*/
  `
    <div class="options">
    <div
      v-for="(variant, index) in variants" 
      :key="variant.id" 
      @click="changeVariant(index)"
      :class="['variant', { 'not-in-stock': !isInStock(variant) }]"
      :style="{ backgroundImage: 'url(' + variant.image + ')' }">
    </div>

    <select :disabled="!isProductAvailible">
      <option v-for="(size, index) in availibleSizes" :key="index" :value="size">
        Size: {{ size }}
      </option>

      <option v-if="!isProductAvailible">No sizes available</option>
    </select>
    </div>
  `,

  computed: {
    availibleSizes() {
      const availibleSizes = []
      this.selectedProduct.sizes.forEach(size => {
        if (size.quantity > 0) availibleSizes.push(size.variant)
      })
      return availibleSizes
    },

    isProductAvailible() {
      return this.availibleSizes.length;
    }
  },

  methods: {
    changeVariant(variantIndex) {
      this.$emit('change-variant', variantIndex);
    },

    isInStock(variant) {
      return variant.sizes.some(size => size.quantity > 0);
    },
  },
})
